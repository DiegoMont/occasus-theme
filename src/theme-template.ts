import { info } from 'node:console';
import type {ThemeColors} from './theme-colors';

export function getTheme(colors: ThemeColors) {
  const primaryColor = colors.orange;
  const secondaryColor = colors.purple;
  const highlightColor = colors.yellow;

  const errorColor = colors.burgundy;
  const warningColor = colors.yellow;
  const infoColor = colors.purple

  return {
    name: colors.name,
    colors: {

      // Base colors
      'foreground': colors.lightWhite,
      'descriptionForeground': colors.lightDark,
      'disabledForeground': colors.lightDark,
      'errorForeground': errorColor,
      'focusBorder': `${colors.lightDark}CC`,
      'widget.border': `${colors.lightWhite}38`,
      'widget.shadow': `${colors.background}80`,
      'selection.background': `${colors.purple}40`,
      'icon.foreground': colors.lightDark,
      'sash.hoverBorder': primaryColor,

      // Modern UI colors
      'surface.background': colors.background,
      'surface.foreground': colors.beige,
      // 'surface.border': modernSurfaceBorder,
      // 'editor.border': modernSurfaceBorder,
      // 'modernPanel.border': modernSurfaceBorder,
      // 'modernSash.gripForeground': `${colors.lightWhite}66`,
      'modernTab.activeBackground': colors.background,
      'modernTab.activeForeground': primaryColor,
      'modernTab.hoverBackground': colors.background,
      'modernTab.hoverForeground': secondaryColor,
      // 'modernEditorTab.activeBackground': colors.backgroundSubtle,
      // 'modernEditorTab.activeActionBackground': colors.backgroundSubtle,
      // 'modernEditorTab.activeForeground': colors.lightWhite,
      // 'modernEditorTab.inactiveBackground': '#00000000',
      // 'modernEditorTab.hoverBackground': colors.backgroundMuted,
      // 'modernEditorTab.hoverActionBackground': colors.backgroundMuted,
      // 'modernEditorTab.hoverForeground': colors.lightWhite,
      // 'modernEditorTab.activeHoverBackground': colors.backgroundMuted,
      // 'modernEditorTab.activeHoverActionBackground': colors.backgroundMuted,
      // 'modernEditorTab.selectedActionBackground': colors.backgroundSubtle,
      // 'modernActivityBar.background': colors.background,
      // 'modernActivityBar.inactiveBackground': colors.background,
      // 'modernActivityBarItem.activeBackground': colors.backgroundMuted,
      // 'modernActivityBarItem.activeForeground': colors.lightWhite,
      // 'modernActivityBarItem.hoverBackground': colors.backgroundMuted,
      // 'modernActivityBarItem.hoverForeground': colors.lightWhite,
      // 'modernActivityBar.border': modernSurfaceBorder,
      // 'modernUI.shellBackground': colors.background,
      // 'modernUI.inactiveShellBackground': colors.background,
      // 'statusBar.inactiveBackground': colors.background,
      // 'editorGroupHeader.connectedTabsBackground': colors.background,

      // Text colors
      'textLink.foreground': colors.pink,
      'textLink.activeForeground': colors.yellow,
      'textBlockQuote.background': colors.backgroundMuted,
      'textBlockQuote.border': colors.burgundy,
      'textCodeBlock.background': colors.background,
      'textPreformat.foreground': colors.yellow,
      'textSeparator.foreground': `${colors.darkPurple}A0`,

      // Button control
      'button.background': `${primaryColor}CC`,
      'button.foreground': colors.background,
      'button.hoverBackground': primaryColor,
      'button.secondaryBackground': `${colors.darkPurple}CC`,
      'button.secondaryForeground': colors.lightWhite,
      'button.secondaryHoverBackground': colors.darkPurple,
      'checkbox.background': colors.backgroundMuted,

      // Dropdown control
      'dropdown.background': colors.backgroundMuted,
      'dropdown.foreground': colors.lightWhite,
      'dropdown.border': colors.background,

      // Input control
      'input.background': colors.backgroundMuted,
      'input.foreground': colors.lightWhite,
      'input.border': colors.backgroundMuted,
      'input.placeholderForeground': colors.lightDark,
      'inputOption.activeBackground': `${colors.purple}28`,
      'inputOption.activeBorder': colors.yellow,
      'inputOption.activeForeground': colors.lightWhite,
      'inputValidation.errorBackground': `${errorColor}20`,
      'inputValidation.errorBorder': errorColor,
      'inputValidation.warningBackground': `${warningColor}20`,
      'inputValidation.warningBorder': warningColor,
      'inputValidation.infoBackground': `${infoColor}20`,
      'inputValidation.infoBorder': infoColor,

      // Scrollbar control
      'scrollbarSlider.background': `${colors.lightDark}38`,
      'scrollbarSlider.hoverBackground': `${colors.lightDark}60`,
      'scrollbarSlider.activeBackground': `${colors.purple}66`,

      // Badge
      'badge.background': `${primaryColor}40`,
      'badge.foreground': primaryColor,

      // Progress bar
      'progressBar.background': colors.pink,

      // Lists and trees
      'list.activeSelectionBackground': `${colors.darkPurple}80`,
      'list.activeSelectionForeground': colors.lightWhite,
      'list.inactiveSelectionBackground': colors.backgroundMuted,
      'list.inactiveSelectionForeground': colors.lightDark,
      'list.hoverBackground': colors.backgroundMuted,
      'list.hoverForeground': colors.lightDark,
      'list.focusBackground': colors.background,
      'list.focusForeground': colors.lightDark,
      'list.focusOutline': colors.darkPurple,
      'list.errorForeground': errorColor,
      'list.warningForeground': warningColor,
      'tree.indentGuidesStroke': `${colors.darkPurple}A0`,

      // Activity Bar
      'activityBar.foreground': primaryColor,
      'activityBar.background': colors.background,
      'activityBar.inactiveForeground': `${secondaryColor}80`,
      'activityBar.activeBorder': highlightColor,
      'activityBar.border': `${colors.darkPurple}80`,
      'activityBarBadge.background': highlightColor,
      'activityBarBadge.foreground': colors.background,

      // Side bar
      'sideBar.background': colors.background,
      'sideBar.foreground': colors.lightDark,
      'sideBarTitle.foreground': primaryColor,

      // Minimap
      'minimap.selectionHighlight': `${colors.purple}66`,
      'minimap.findMatchHighlight': `${colors.yellow}88`,
      'minimap.errorHighlight': errorColor,
      'minimap.warningHighlight': warningColor,

      // Editor Groups & Tabs
      'editorGroupHeader.tabsBackground': colors.background,
      'editorGroupHeader.tabsBorder': `${colors.darkPurple}80`,
      'editorGroup.border': `${colors.darkPurple}A0`,
      'tab.unfocusedActiveBackground': colors.backgroundSubtle,
      'tab.selectedBackground': colors.backgroundSubtle,
      'tab.activeBorder': colors.backgroundSubtle,
      'tab.activeBorderTop': colors.yellow,
      'tab.inactiveForeground': colors.lightDark,
      'tab.border': `${colors.darkPurple}80`,
      'tab.unfocusedActiveBorderTop': `${colors.burgundy}B0`,
      'tab.unfocusedActiveForeground': colors.beige,

      // Editor colors
      'editor.background': colors.backgroundSubtle,
      'editor.foreground': colors.lightWhite,
      'editorLineNumber.foreground': colors.lightDark,
      'editorLineNumber.activeForeground': colors.yellow,
      'editorCursor.foreground': colors.yellow,
      'editor.selectionBackground': `${colors.purple}28`,
      'editor.inactiveSelectionBackground': `${colors.purple}20`,
      'editor.selectionHighlightBackground': `${colors.yellow}15`,
      'editor.selectionHighlightBorder': `${colors.yellow}66`,
      'editor.wordHighlightBackground': `${colors.purple}20`,
      'editor.wordHighlightBorder': `${colors.purple}55`,
      'editor.wordHighlightStrongBackground': `${colors.pink}20`,
      'editor.wordHighlightStrongBorder': `${colors.pink}66`,
      'editor.findMatchBackground': `${colors.burgundy}80`,
      'editor.findMatchBorder': colors.yellow,
      'editor.findMatchHighlightBackground': `${colors.yellow}20`,
      'editor.findMatchHighlightBorder': `${colors.yellow}66`,
      'editor.lineHighlightBackground': colors.backgroundMuted,
      'editor.lineHighlightBorder': `${colors.background}00`,
      'editorLink.activeForeground': colors.yellow,
      'editorWhitespace.foreground': `${colors.darkPurple}A0`,
      'editorIndentGuide.background1': `${colors.darkPurple}70`,
      'editorIndentGuide.activeBackground1': colors.lightDark,
      'editorInlayHint.foreground': colors.lightDark,
      'editorInlayHint.background': colors.backgroundMuted,
      'editorRuler.foreground': `${colors.darkPurple}70`,
      'editorCodeLens.foreground': colors.lightDark,
      'editorBracketMatch.background': `${colors.purple}28`,
      'editorBracketMatch.border': colors.purple,
      'editorBracketHighlight.foreground1': colors.purple,
      'editorBracketHighlight.foreground2': colors.pink,
      'editorBracketHighlight.foreground3': colors.yellow,
      'editorBracketHighlight.foreground4': colors.orange,
      'editorBracketHighlight.foreground5': colors.beige,
      'editorBracketHighlight.foreground6': colors.lightWhite,
      'editorBracketHighlight.unexpectedBracket.foreground': colors.pink,
      'editorError.foreground': errorColor,
      'editorWarning.foreground': warningColor,
      'editorInfo.foreground': infoColor,
      'editorHint.foreground': colors.beige,
      'editorGutter.background': colors.backgroundSubtle,
      'editorGutter.addedBackground': colors.orange,
      'editorGutter.modifiedBackground': colors.purple,
      'editorGutter.deletedBackground': colors.pink,

      // Diff editor colors
      'diffEditor.insertedTextBackground': `${colors.yellow}20`,
      'diffEditor.removedTextBackground': `${colors.pink}20`,
      'diffEditor.insertedLineBackground': `${colors.yellow}10`,
      'diffEditor.removedLineBackground': `${colors.pink}10`,

      // Editor widget colors
      'editorWidget.background': colors.backgroundMuted,
      'editorWidget.foreground': colors.lightWhite,
      'editorWidget.border': `${colors.lightWhite}38`,
      'editorSuggestWidget.background': colors.backgroundMuted,
      'editorSuggestWidget.foreground': colors.lightWhite,
      'editorSuggestWidget.border': `${colors.lightWhite}38`,
      'editorSuggestWidget.selectedBackground': colors.burgundy,
      'editorSuggestWidget.selectedForeground': colors.background,
      'editorSuggestWidget.highlightForeground': colors.orange,
      'editorHoverWidget.background': colors.backgroundMuted,
      'editorHoverWidget.foreground': colors.lightWhite,
      'editorHoverWidget.border': `${colors.lightWhite}38`,

      // Peek view colors
      'peekView.border': colors.burgundy,
      'peekViewTitle.background': colors.burgundy,
      'peekViewTitleLabel.foreground': colors.background,
      'peekViewTitleDescription.foreground': colors.background,
      'peekViewEditor.background': colors.background,
      'peekViewResult.background': colors.background,
      'peekViewResult.selectionBackground': colors.burgundy,
      'peekViewResult.selectionForeground': colors.background,

      // Panel colors
      'panel.background': colors.background,
      'panel.border': `${highlightColor}33`,
      'panelTitle.activeForeground': highlightColor,
      'panelTitle.activeBorder': highlightColor,
      'panelTitle.inactiveForeground': colors.lightDark,

      // Status Bar colors
      'statusBar.background': colors.background,
      'statusBar.foreground': colors.lightDark,
      'statusBar.debuggingBackground': colors.burgundy,
      'statusBar.debuggingForeground': colors.background,
      'statusBar.noFolderBackground': colors.background,
      'statusBarItem.hoverBackground': colors.burgundy,
      'statusBarItem.hoverForeground': colors.background,
      'statusBarItem.remoteBackground': colors.orange,
      'statusBarItem.remoteForeground': colors.background,
      'statusBarItem.prominentBackground': colors.orange,
      'statusBarItem.prominentForeground': colors.background,

      // Title Bar colors
      'titleBar.activeBackground': colors.background,
      'titleBar.activeForeground': colors.lightWhite,
      'titleBar.inactiveBackground': colors.background,
      'titleBar.inactiveForeground': colors.lightDark,
      'titleBar.border': `${colors.darkPurple}80`,

      // Menu Bar colors
      'menu.background': colors.backgroundMuted,
      'menu.foreground': colors.lightWhite,
      'menu.selectionBackground': colors.burgundy,
      'menu.selectionForeground': colors.background,
      'menu.border': `${colors.darkPurple}A0`,
      'menu.separatorBackground': `${colors.darkPurple}A0`,

      // Command Center colors
      'commandCenter.background': colors.backgroundMuted,
      'commandCenter.foreground': colors.lightDark,
      'commandCenter.border': `${colors.lightWhite}38`,
      'commandCenter.activeBorder': `${colors.lightWhite}38`,

      // Notification colors
      'notificationCenterHeader.background': colors.background,
      'notifications.background': colors.backgroundMuted,
      'notifications.foreground': colors.lightWhite,
      'notifications.border': `${colors.darkPurple}A0`,
      'notificationsErrorIcon.foreground': errorColor,
      'notificationsWarningIcon.foreground': warningColor,
      'notificationsInfoIcon.foreground': infoColor,

      // Extensions colors
      'extensionIcon.verifiedForeground': primaryColor,

      // Integrated Terminal colors
      'terminal.background': colors.background,
      'terminal.foreground': colors.lightWhite,
      'terminalCursor.foreground': colors.yellow,
      'terminal.selectionBackground': `${colors.purple}38`,
      'terminal.ansiBlack': colors.backgroundMuted,
      'terminal.ansiRed': colors.pink,
      'terminal.ansiGreen': colors.orange,
      'terminal.ansiYellow': colors.yellow,
      'terminal.ansiBlue': colors.purple,
      'terminal.ansiMagenta': colors.purple,
      'terminal.ansiCyan': colors.pink,
      'terminal.ansiWhite': colors.beige,
      'terminal.ansiBrightBlack': colors.lightDark,
      'terminal.ansiBrightRed': colors.pink,
      'terminal.ansiBrightGreen': colors.orange,
      'terminal.ansiBrightYellow': colors.yellow,
      'terminal.ansiBrightBlue': colors.purple,
      'terminal.ansiBrightMagenta': colors.pink,
      'terminal.ansiBrightCyan': colors.pink,
      'terminal.ansiBrightWhite': colors.lightWhite,

      // Debug colors
      'debugToolBar.background': colors.backgroundMuted,

      // Welcome page colors
      'welcomePage.background': colors.backgroundSubtle,

      // Git colors
      'gitDecoration.addedResourceForeground': `${colors.green}CC`,
      'gitDecoration.modifiedResourceForeground': colors.purple,
      'gitDecoration.deletedResourceForeground': colors.burgundy,
      'gitDecoration.stageModifiedResourceForeground': `${colors.purple}CC`,
      'gitDecoration.stageDeletedResourceForeground': `${colors.burgundy}CC`,
      'gitDecoration.untrackedResourceForeground': colors.green,
      'gitDecoration.ignoredResourceForeground': `${colors.lightDark}80`,
      'gitDecoration.conflictingResourceForeground': colors.yellow,

      // Settings
      'settings.headerForeground': colors.yellow,
      'settings.modifiedItemIndicator': colors.orange,

      // Breadcrumbs colors
      'breadcrumb.foreground': colors.lightDark,
      'breadcrumb.focusForeground': colors.yellow,
      'breadcrumb.activeSelectionForeground': colors.pink,
      'breadcrumb.background': colors.backgroundSubtle,

      // Symbol Icons colors
      'symbolIcon.arrayForeground': colors.purple,
      'symbolIcon.booleanForeground': colors.yellow,
      'symbolIcon.classForeground': colors.orange,
      'symbolIcon.colorForeground': colors.pink,
      'symbolIcon.constantForeground': colors.yellow,
      'symbolIcon.constructorForeground': colors.orange,
      'symbolIcon.enumeratorForeground': colors.green,
      'symbolIcon.enumeratorMemberForeground': colors.yellow,
      'symbolIcon.eventForeground': colors.pink,
      'symbolIcon.fieldForeground': colors.beige,
      'symbolIcon.fileForeground': colors.orange,
      'symbolIcon.folderForeground': colors.yellow,
      'symbolIcon.functionForeground': colors.pink,
      'symbolIcon.interfaceForeground': colors.green,
      'symbolIcon.keyForeground': colors.purple,
      'symbolIcon.keywordForeground': colors.purple,
      'symbolIcon.methodForeground': colors.pink,
      'symbolIcon.moduleForeground': colors.orange,
      'symbolIcon.namespaceForeground': colors.purple,
      'symbolIcon.nullForeground': colors.burgundy,
      'symbolIcon.numberForeground': colors.orange,
      'symbolIcon.objectForeground': colors.beige,
      'symbolIcon.operatorForeground': colors.yellow,
      'symbolIcon.packageForeground': colors.green,
      'symbolIcon.propertyForeground': colors.purple,
      'symbolIcon.referenceForeground': colors.pink,
      'symbolIcon.snippetForeground': colors.green,
      'symbolIcon.stringForeground': colors.yellow,
      'symbolIcon.structForeground': colors.green,
      'symbolIcon.textForeground': colors.beige,
      'symbolIcon.typeParameterForeground': colors.yellow,
      'symbolIcon.unitForeground': colors.orange,
      'symbolIcon.variableForeground': colors.orange,

      // Debug Icons colors
      'debugIcon.breakpointForeground': colors.pink,
      'debugIcon.startForeground': colors.yellow,
    },
    semanticHighlighting: true,
    semanticTokenColors: {
      // namespace: { foreground: colors.color0, italic: false },
      class: { foreground: colors.orange, italic: false },
      // enum: { foreground: colors.color6, italic: false },
      interface: { foreground: colors.orange, italic: false },
      // struct: { foreground: colors.color0, italic: false },
      // typeParameter: { foreground: colors.color0, italic: false },
      // type: { foreground: colors.color0, italic: false },
      parameter: { foreground: colors.beige, italic: false },
      variable: { foreground: colors.orange, italic: false },
      'variable.readonly': { foreground: colors.orange, italic: false },
      property: { foreground: colors.beige, italic: false },
      // 'property.readonly': { foreground: colors.color4, italic: false },
      // enumMember: { foreground: colors.color7, italic: false },
      // decorator: { foreground: colors.color0, italic: false },
      // event: { foreground: colors.color0, italic: false },
      function: { foreground: colors.pink, italic: false },
      method: { foreground: colors.pink, italic: false },
      // macro: { foreground: colors.color0, italic: false },
      // label: { foreground: colors.color0, italic: false },
      comment: { foreground: colors.lightDark, italic: false },
      string: { foreground: colors.yellow, italic: false },
      keyword: { foreground: colors.purple, italic: false },
      number: { foreground: colors.orange, italic: false },
      // operator: { foreground: colors.color0, italic: false },
      // modifier: { foreground: colors.color0, italic: false },
    },
  };
}
