export const projects = [
  {
    title: 'BiliTV Android TV 客户端 UI 重构与发布',
    author: 'lucksufe',
    description: '对 Flutter 开发的 Android TV 哔哩哔哩客户端进行全面 UI 重构，统一焦点导航框架，清理废弃代码，修复多个交互 bug，最终发布到 GitHub',
    tags: ['Flutter', 'Android TV', 'UI重构', '焦点导航', '遥控器交互', '代码清理'],
    difficulty: 'advanced',
    agent: {
      name: 'Claude Code',
      version: '2.1.177',
      model: 'mimo-v2.5-pro'
    },
    steps: [
      {
        title: '项目现状分析与重构方案确认',
        userMessage: '现在这个项目的功能和UI外观和功能、设计都是好用的，但是因为UI操作会有一些乱跳的不符合预期的行为，而且现在非常乱很难改动了，需要对UI进行重构，另外有一些用不上的tab和逻辑也希望删除',
        agentResponse: '分析了项目结构，发现 4 个未使用的 tab 文件（home_tab、dynamic_tab、history_tab、live_tab）是死代码，每个 tab 各自手写 onKeyEvent 处理方向键导致焦点混乱。确认删除死代码、统一使用 TvFocusScope 焦点框架、提取 TvGridTabMixin 公共基类。',
        code: null,
        result: '确定了三步重构方案：删除死代码 → 创建网格基类 → 重构活跃 tab'
      },
      {
        title: '删除死代码 + 创建 TvGridTabMixin + 重构三个 tab',
        userMessage: '（用户确认了全部删除、统一使用 TvFocusScope、提取公共基类三个选项）',
        agentResponse: '删除了 9 个废弃文件（4 个 tab + 5 个 widget），创建了 TvGridTabMixin mixin 统一管理网格布局、焦点节点、滚动定位、键盘导航，重构了 LocalFavoritesTab、CategoryTab、BangumiIndexTab 使用 mixin。flutter analyze 无新增错误。',
        code: `// lib/widgets/tv_grid_tab.dart - TvGridTabMixin 核心
mixin TvGridTabMixin<T extends StatefulWidget> on State<T> {
  FocusNode? get sidebarFocusNode;
  int get itemCount;
  void onItemTap(int index);
  Widget buildGridCard(BuildContext context, int index);

  final ScrollController gridScrollController = ScrollController();
  final Map<int, FocusNode> _gridItemFocusNodes = {};

  FocusNode getGridFocusNode(int index) =>
      _gridItemFocusNodes.putIfAbsent(index, () => FocusNode());

  KeyEventResult handleGridKeyEvent(KeyEvent event, int index, {VoidCallback? onLeftToSidebar}) {
    if (event is! KeyDownEvent) return KeyEventResult.ignored;
    return TvKeyHandler.handleNavigation(
      event,
      onUp: index >= gridCrossAxisCount
          ? () { getGridFocusNode(index - gridCrossAxisCount).requestFocus(); scrollToGridItem(index - gridCrossAxisCount); }
          : onGridTopRowUp,
      onDown: (index + gridCrossAxisCount < itemCount)
          ? () { getGridFocusNode(index + gridCrossAxisCount).requestFocus(); scrollToGridItem(index + gridCrossAxisCount); }
          : null,
      onLeft: (index % gridCrossAxisCount == 0)
          ? (onLeftToSidebar ?? () => sidebarFocusNode?.requestFocus())
          : () => getGridFocusNode(index - 1).requestFocus(),
      onRight: (index + 1 < itemCount)
          ? () => getGridFocusNode(index + 1).requestFocus()
          : null,
      onSelect: () => onItemTap(index),
    );
  }
}`,
        result: '编译成功，APK 59.0MB'
      },
      {
        title: '清理设置 + 修复返回键逻辑',
        userMessage: '把现在设置里面没用的地方去掉，比如检查更新以及显示已经删掉的tab之类的，然后在右侧区域按返回键以前的逻辑是强行回到收藏，这个也引起了一些bug，接下来按返回回到当前的tab处并且重置当前tab内容。',
        agentResponse: '删除了"关于软件"tab（about_settings.dart），删除了界面设置中的直播分区开关和排序。返回键逻辑从"强制跳收藏tab"改为"重置当前tab内容+聚焦侧边栏"。删除了 _backFromSearchHandled 和 _activateFocusSystem 两个无用代码。',
        code: `// home_screen.dart - 新的返回键逻辑
onKeyEvent: (node, event) {
  if (event is! KeyDownEvent) return KeyEventResult.ignored;
  if (event.logicalKey != LogicalKeyboardKey.goBack &&
      event.logicalKey != LogicalKeyboardKey.escape) {
    return KeyEventResult.ignored;
  }
  if (Navigator.of(context).canPop()) return KeyEventResult.ignored;

  // 搜索 tab: 保持两步返回逻辑
  if (_selectedTabIndex == 0) {
    final handled = _searchTabKey.currentState?.handleBack() ?? false;
    if (!handled) {
      setState(() {});
      _sideBarFocusNodes[0].requestFocus();
    }
    return KeyEventResult.handled;
  }

  // 其他 tab: 重置当前 tab 内容并聚焦侧边栏
  _resetCurrentTab();
  WidgetsBinding.instance.addPostFrameCallback((_) {
    _sideBarFocusNodes[_selectedTabIndex].requestFocus();
  });
  return KeyEventResult.handled;
},`,
        result: 'flutter analyze 无新增错误，APK 58.9MB'
      },
      {
        title: '搜索结果页修复',
        userMessage: '还有个搜索结果页面需要优化，这个页面在最左侧左移会跳出到tab里，而且是根据焦点的垂直坐标跳到其他tab上导致无法再回到这个结果页面上。另外现在结果页面上下两排的卡片太挤了图片看不到',
        agentResponse: '问题1：最左列按左键时 onMoveLeft 传 null 导致 Flutter 默认焦点遍历跳到侧边栏。修复：统一在 onKeyEvent 中处理，最左列按左键直接返回 KeyEventResult.handled。问题2：6列+360/300 宽高比太挤。改为 4 列+320/280。同时合并了重复的 _VideoResultCard 和 _BangumiResultCard。',
        code: `// search_results_view.dart - 修复左键跳出
onKeyEvent: (node, event) {
  if (event.logicalKey == LogicalKeyboardKey.arrowLeft) {
    if (!isLeftEdge) {
      _getFocusNode(index - 1).requestFocus();
    }
    return KeyEventResult.handled; // 最左列也吃掉事件，不跳出
  }
  // ...
}`,
        result: 'APK 58.8MB'
      },
      {
        title: '修复多个 UI 样式 bug',
        userMessage: '还有一些样式问题，比如从用户tab移动到退出tab时，用户tab是灰色的被选中状态。还有影视和索引页面最上面一行的样式也都有些问题，一个是焦点在上面是没用白色框，一个是焦点移走时还有白色框。另外收藏中按返回键会第一排第一个收藏内容闪一下选中框。影视和索引页面则是按返回后，如果上一次按键是下则返回到tag后又自动移动到右侧第一个内容上。',
        agentResponse: '修复了 5 个问题：1. 退出按钮聚焦时 _selectedTabIndex 设为 -1 消除灰色选中态。2. 影视/索引分类标签用 Builder 监听焦点状态，聚焦显示白色边框，失焦立即消失。3. 收藏返回不再闪第一个卡片（去掉 focusFirstItem 调用）。4. 影视/索引返回后不再自动跳内容（去掉 onFocusChange 中的分类切换）。',
        code: null,
        result: 'APK 58.8MB'
      },
      {
        title: '搜索排序改为下拉式',
        userMessage: '还有个搜索结果的问题，在切换搜索结果的排序时，每次移动都会触发排序然后还会把焦点跳转到第一个搜索结果，这边不合理。索性做成下拉吧，不用选中了再触发排序，这样焦点跳转到第一个也合理。现在要切换一个排序需要移动非常多次。',
        agentResponse: '改为焦点移到排序按钮即触发排序但焦点不跳走，按 ↓ 才跳到第一个结果。给 _performSearch 加了 focusFirst 参数，排序栏触发时传 false。给 _SortButton 加了 onMoveDown 回调跳到第一个结果。',
        code: null,
        result: '切换排序只需 1 次按键'
      },
      {
        title: '修复弹窗焦点越界 + 首次进入焦点问题',
        userMessage: '现在还有两个bug，一个是索引的条件弹窗，可能会初始焦点位置越界导致出现问题，索性初始位置都是第一项吧，保证不出问题。另外还有个问题是第一次进入app时的tag位置虽然是收藏上，但是移动时却不是从收藏上开始移动的，这个地方需要修复。',
        agentResponse: '1. 弹窗焦点：去掉复杂的居中定位逻辑，始终聚焦第一项 [0][0]。2. 首次进入焦点：在 initState 的 addPostFrameCallback 中主动 _sideBarFocusNodes[1].requestFocus()。',
        code: null,
        result: 'APK 58.8MB'
      },
      {
        title: '创建新仓库并发布到 GitHub',
        userMessage: '我想这样，把代码和资源复制到外层目录一个新文件夹中，再建立一个新的repo',
        agentResponse: '创建了 E:/code/claude/BiliTV-v1/ 目录，复制了 lib/、assets/、android/、配置文件等必要文件，初始化了新的 git 仓库。',
        code: null,
        result: '新仓库 132 个文件，单次初始提交'
      },
      {
        title: '更新 README',
        userMessage: '修改一些README.md',
        agentResponse: '重写了 README.md，去掉了旧的原生版引用，更新了功能列表以匹配当前代码（去掉了已删除的动态、推荐、分区浏览等），添加了编译说明和测试设备信息。',
        code: null,
        result: null
      },
      {
        title: '添加致谢',
        userMessage: 'https://github.com/Hyper-Beast/BiliTV https://github.com/jay3-yy/BiliPai 加两个致谢 readme中',
        agentResponse: '在 README 中添加了致谢部分，包含 BiliTV 和 BiliPai 两个项目链接。',
        code: null,
        result: null
      },
      {
        title: '删除插件设置和分区排序',
        userMessage: '突然发现还有些内容需要删除，设置界面还有个插件相关的页面，然后还有调整tab和显示顺序相关的内容需要删掉',
        agentResponse: '删除了 plugins_settings.dart，从 SettingsCategory 枚举和 _buildContent 中移除了 plugins。重写了 interface_settings.dart，只保留启动动画和时间显示两个开关，删除了全部分区开关和分区排序代码。',
        code: null,
        result: null
      },
      {
        title: '删除全部插件系统代码',
        userMessage: '插件相关的代码删了吗',
        agentResponse: '发现插件核心代码还在（core/plugin/ 和 plugins/），删除了这两个目录，清理了 main.dart（插件注册）、local_server.dart（插件 API 和 Web 管理界面，只保留 MPD 代理）、player_action_mixin.dart（插件调用）、player_screen.dart（跳过按钮 UI）中的所有插件引用。',
        code: null,
        result: '从 131 个文件减少到 124 个文件'
      },
      {
        title: '推送并编译最终版本',
        userMessage: 'git@github.com:lucksufe/lucksufe-BiliTV.git 这个remote，push一下\n\n（以及后续的编译一下）',
        agentResponse: '设置 remote 并强制推送成功。编译 release APK 成功，58.6MB。',
        code: null,
        result: '最终版本已发布到 https://github.com/lucksufe/lucksufe-BiliTV'
      }
    ],
    finalResult: {
      description: '完成了 BiliTV Android TV 客户端的全面重构：删除了 9 个废弃文件和整个插件系统（7 个文件），创建了 TvGridTabMixin 统一焦点导航框架，修复了 5+ 个 UI 交互 bug（焦点跳出、边框残留、返回键跳转、弹窗越界等），优化了搜索结果布局和排序交互，清理了无用设置项，更新了 README，最终以 124 个文件的干净代码库发布到 GitHub。'
    },
    tips: [
      'TV 端开发中，焦点管理是最容易出问题的地方。统一使用 TvKeyHandler 处理方向键，避免各组件各自手写 onKeyEvent',
      '删除死代码时要检查引用链：不只删除文件本身，还要检查它引用的 widget 是否也被其他地方使用',
      'Flutter 的 Focus widget 边框样式不能直接用 focusNode.hasFocus 判断（不会触发重建），需要用 Builder 包裹并通过 Focus.of(context).hasFocus 获取',
      '返回键行为要一致：不要强制跳到某个固定 tab，而是重置当前 tab 内容',
      '排序/筛选这类频繁切换的操作，应该让焦点留在原位，结果在下方更新，而不是每次切换都跳走',
      '新建干净仓库时，先复制必要文件到新目录再 git init，比在原仓库 reset 更安全'
    ]
  }
]
