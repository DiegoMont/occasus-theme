import type {ThemeColors} from './theme-colors';

export function getTheme(colors: ThemeColors) {
  return {
    name: colors.name,
    colors: {

      // Base colors
      'foreground': colors.lightWhite,
      'descriptionForeground': colors.lightDark,
      'disabledForeground': '#927F74',
      'errorForeground': '#FF6B7A',
      'focusBorder': '#FFD76D',
      'widget.border': '#514039',
      'widget.shadow': '#00000066',
      'selection.background': '#C792FF40',
      'icon.foreground': colors.lightDark,


      // Text colors
      'textLink.foreground': colors.pink,
      'textLink.activeForeground': '#FFD76D',
      'textBlockQuote.background': colors.backgroundMuted,
      'textBlockQuote.border': colors.purple,
      'textCodeBlock.background': '#191614',
      'textPreformat.foreground': '#FFD76D',
      'textSeparator.foreground': '#514039',

      // Button control
      'button.background': colors.purple,
      'button.foreground': '#191614',
      'button.hoverBackground': '#D6AEFF',
      'button.secondaryBackground': '#493749',
      'button.secondaryForeground': colors.lightWhite,
      'button.secondaryHoverBackground': '#5A4156',

      // Dropdown control
      'dropdown.background': colors.backgroundMuted,
      'dropdown.foreground': colors.lightWhite,
      'dropdown.border': '#514039',

      // Input control
      'input.background': '#191614',
      'input.foreground': colors.lightWhite,
      'input.border': '#514039',
      'input.placeholderForeground': colors.lightDark,
      'inputOption.activeBackground': '#C792FF28',
      'inputOption.activeBorder': colors.purple,
      'inputOption.activeForeground': colors.lightWhite,
      'inputValidation.errorBackground': '#46262B',
      'inputValidation.errorBorder': '#FF6B7A',
      'inputValidation.warningBackground': '#453722',
      'inputValidation.warningBorder': '#FFD76D',
      'inputValidation.infoBackground': '#263740',
      'inputValidation.infoBorder': '#8CCBEB',

      // Scrollbar control
      'scrollbarSlider.background': '#A18C8038',
      'scrollbarSlider.hoverBackground': '#A18C8060',
      'scrollbarSlider.activeBackground': '#C792FF66',

      // Badge
      'badge.background': colors.purple,
      'badge.foreground': '#191614',

      // Progress bar
      'progressBar.background': colors.pink,

      // Lists and trees
      'list.activeSelectionBackground': '#493749',
      'list.activeSelectionForeground': colors.lightWhite,
      'list.inactiveSelectionBackground': '#332B30',
      'list.inactiveSelectionForeground': colors.lightWhite,
      'list.hoverBackground': colors.backgroundMuted,
      'list.hoverForeground': colors.lightWhite,
      'list.focusBackground': '#493749',
      'list.focusForeground': colors.lightWhite,
      'list.highlightForeground': '#FFD76D',
      'list.focusHighlightForeground': '#FFD76D',
      'list.errorForeground': '#FF6B7A',
      'list.warningForeground': '#FFD76D',
      'tree.indentGuidesStroke': '#514039',

      // Activity Bar
      'activityBar.background': '#191614',
      'activityBar.foreground': colors.pink,
      'activityBar.inactiveForeground': '#A18C80',
      'activityBar.activeBorder': colors.pink,
      'activityBar.border': '#362D28',
      'activityBarBadge.background': colors.purple,
      'activityBarBadge.foreground': '#191614',

      // Side bar
      'sideBar.background': colors.background,
      'sideBar.foreground': '#D5C2B4',
      'sideBar.border': '#362D28',
      'sideBarTitle.foreground': colors.lightWhite,
      // 'sideBarSectionHeader.background': colors.background,
      // 'sideBarSectionHeader.foreground': colors.lightWhite,
      // 'sideBarSectionHeader.border': colors.background,
      // 'sideBarStickyScroll.border': '#1B1F29',
      // 'sideBarStickyScroll.shadow': '#00000080',

      // Minimap
      'minimap.selectionHighlight': '#C792FF66',
      'minimap.findMatchHighlight': '#FFD76D88',
      'minimap.errorHighlight': '#FF6B7A',
      'minimap.warningHighlight': '#FFD76D',

      // Editor Groups & Tabs
      'editorGroupHeader.tabsBackground': '#191614',
      'editorGroupHeader.tabsBorder': '#362D28',
      'editorGroup.border': '#514039',
      'tab.activeBackground': colors.backgroundSubtle,
      'tab.activeForeground': colors.lightWhite,
      'tab.activeBorder': colors.backgroundSubtle,
      'tab.activeBorderTop': colors.pink,
      'tab.inactiveBackground': '#191614',
      'tab.inactiveForeground': colors.lightDark,
      'tab.border': '#362D28',
      'tab.hoverBackground': colors.backgroundMuted,
      'tab.unfocusedActiveBorderTop': '#C792FF80',
      'tab.unfocusedActiveForeground': '#D5C2B4',

      // Editor colors
      // 'editor.background': colors.backgroundSubtle,
      // 'editor.foreground': colors.lightWhite,
      'editor.background': colors.backgroundSubtle,
      'editor.foreground': '#FCF8EC',
      'editorLineNumber.foreground': '#A18C80',
      'editorLineNumber.activeForeground': '#FFD76D',
      'editorCursor.foreground': '#FFD76D',
      'editor.selectionBackground': '#C792FF28',
      'editor.inactiveSelectionBackground': '#C792FF20',
      'editor.selectionHighlightBackground': '#FFD76D15',
      'editor.selectionHighlightBorder': '#FFD76D66',
      'editor.wordHighlightBackground': '#C792FF20',
      'editor.wordHighlightBorder': '#C792FF55',
      'editor.wordHighlightStrongBackground': '#FF70B520',
      'editor.wordHighlightStrongBorder': '#FF70B566',
      'editor.findMatchBackground': '#3D2C12',
      'editor.findMatchBorder': '#FFD76D',
      'editor.findMatchHighlightBackground': '#FFD76D20',
      'editor.findMatchHighlightBorder': '#FFD76D66',
      'editor.lineHighlightBackground': colors.backgroundMuted,
      'editor.lineHighlightBorder': '#00000000',
      'editorLink.activeForeground': '#FFD76D',
      'editorWhitespace.foreground': '#514039',
      'editorIndentGuide.background1': '#3E332D',
      'editorIndentGuide.activeBackground1': '#A18C80',
      'editorInlayHint.foreground': colors.lightDark,
      'editorInlayHint.background': colors.backgroundMuted,
      'editorRuler.foreground': '#3E332D',
      'editorCodeLens.foreground': colors.lightDark,
      'editorBracketMatch.background': '#C792FF28',
      'editorBracketMatch.border': colors.purple,
      'editorBracketHighlight.foreground1': colors.purple,
      'editorBracketHighlight.foreground2': colors.pink,
      'editorBracketHighlight.foreground3': '#FFD76D',
      'editorBracketHighlight.foreground4': colors.orange,
      'editorBracketHighlight.foreground5': '#E7BDA4',
      'editorBracketHighlight.foreground6': colors.lightWhite,
      'editorBracketHighlight.unexpectedBracket.foreground': '#FF6B7A',
      'editorError.foreground': '#FF6B7A',
      'editorWarning.foreground': '#FFD76D',
      'editorInfo.foreground': '#8CCBEB',
      'editorHint.foreground': colors.purple,
      'editorGutter.background': colors.backgroundSubtle,
      'editorGutter.addedBackground': '#A8CD88',
      'editorGutter.modifiedBackground': colors.purple,
      'editorGutter.deletedBackground': '#FF6B7A',

      // Diff editor colors
      'diffEditor.insertedTextBackground': '#A8CD8820',
      'diffEditor.removedTextBackground': '#FF6B7A20',
      'diffEditor.insertedLineBackground': '#A8CD8810',
      'diffEditor.removedLineBackground': '#FF6B7A10',

      // Editor widget colors
      'editorWidget.background': colors.backgroundMuted,
      'editorWidget.foreground': colors.lightWhite,
      'editorWidget.border': '#514039',
      'editorSuggestWidget.background': colors.backgroundMuted,
      'editorSuggestWidget.foreground': colors.lightWhite,
      'editorSuggestWidget.border': '#514039',
      'editorSuggestWidget.selectedBackground': '#493749',
      'editorSuggestWidget.selectedForeground': colors.lightWhite,
      'editorSuggestWidget.highlightForeground': '#FFD76D',
      'editorHoverWidget.background': colors.backgroundMuted,
      'editorHoverWidget.foreground': colors.lightWhite,
      'editorHoverWidget.border': '#514039',

      // Peek view colors
      'peekView.border': colors.purple,
      'peekViewTitle.background': '#30262E',
      'peekViewTitleLabel.foreground': colors.lightWhite,
      'peekViewTitleDescription.foreground': colors.lightDark,
      'peekViewEditor.background': colors.background,
      'peekViewResult.background': '#191614',
      'peekViewResult.selectionBackground': '#493749',
      'peekViewResult.selectionForeground': colors.lightWhite,

      // Panel colors
      'panel.background': colors.background,
      'panel.border': '#514039',
      'panelTitle.activeForeground': colors.lightWhite,
      'panelTitle.activeBorder': colors.pink,
      'panelTitle.inactiveForeground': colors.lightDark,

      // Status Bar colors
      'statusBar.background': '#191614',
      'statusBar.foreground': '#D5C2B4',
      'statusBar.border': '#362D28',
      'statusBar.debuggingBackground': '#FFD76D',
      'statusBar.debuggingForeground': '#191614',
      'statusBar.noFolderBackground': '#191614',
      'statusBarItem.hoverBackground': '#493749',
      'statusBarItem.remoteBackground': colors.purple,
      'statusBarItem.remoteForeground': '#191614',
      'statusBarItem.prominentBackground': '#493749',
      'statusBarItem.prominentForeground': colors.lightWhite,

      // Title Bar colors
      'titleBar.activeBackground': '#191614',
      'titleBar.activeForeground': colors.lightWhite,
      'titleBar.inactiveBackground': '#191614',
      'titleBar.inactiveForeground': '#A18C80',
      'titleBar.border': '#362D28',

      // Menu Bar colors
      'menu.background': colors.backgroundMuted,
      'menu.foreground': colors.lightWhite,
      'menu.selectionBackground': '#493749',
      'menu.selectionForeground': colors.lightWhite,
      'menu.border': '#514039',
      'menu.separatorBackground': '#514039',

      // Command Center colors
      'commandCenter.background': colors.backgroundMuted,
      'commandCenter.foreground': '#D5C2B4',
      'commandCenter.border': '#514039',

      // Notification colors
      'notificationCenterHeader.background': '#191614',
      'notifications.background': colors.backgroundMuted,
      'notifications.foreground': colors.lightWhite,
      'notifications.border': '#514039',
      'notificationsErrorIcon.foreground': '#FF6B7A',
      'notificationsWarningIcon.foreground': '#FFD76D',
      'notificationsInfoIcon.foreground': '#8CCBEB',

      // Integrated Terminal colors
      'terminal.background': colors.background,
      'terminal.foreground': colors.lightWhite,
      'terminalCursor.foreground': '#FFD76D',
      'terminal.selectionBackground': '#C792FF38',
      'terminal.ansiBlack': '#4D4038',
      'terminal.ansiRed': '#FF6B7A',
      'terminal.ansiGreen': '#A8CD88',
      'terminal.ansiYellow': '#FFD76D',
      'terminal.ansiBlue': '#8CCBEB',
      'terminal.ansiMagenta': colors.purple,
      'terminal.ansiCyan': '#A5D6C2',
      'terminal.ansiWhite': '#D5C2B4',
      'terminal.ansiBrightBlack': '#A18C80',
      'terminal.ansiBrightRed': '#FF91A0',
      'terminal.ansiBrightGreen': '#BDE2A0',
      'terminal.ansiBrightYellow': '#FFE6A3',
      'terminal.ansiBrightBlue': '#AFDDF5',
      'terminal.ansiBrightMagenta': colors.pink,
      'terminal.ansiBrightCyan': '#C1E8D8',
      'terminal.ansiBrightWhite': colors.lightWhite,

      // Debug colors
      'debugToolBar.background': colors.backgroundMuted,

      // Welcome page colors
      'welcomePage.background': colors.backgroundSubtle,

      // Git colors
      'gitDecoration.addedResourceForeground': '#A8CD88',
      'gitDecoration.modifiedResourceForeground': colors.orange,
      'gitDecoration.deletedResourceForeground': '#FF6B7A',
      'gitDecoration.untrackedResourceForeground': '#A8CD88',
      'gitDecoration.ignoredResourceForeground': '#A18C80',
      'gitDecoration.conflictingResourceForeground': '#FFD76D',

      // Settings
      'settings.headerForeground': '#FFD76D',
      'settings.modifiedItemIndicator': colors.pink,

      // Breadcrumbs colors
      'breadcrumb.foreground': colors.lightDark,
      'breadcrumb.focusForeground': '#FFD76D',
      'breadcrumb.activeSelectionForeground': colors.pink,
      'breadcrumb.background': colors.backgroundSubtle,

      // Debug Icons colors
      'debugIcon.breakpointForeground': '#FF6B7A',
      'debugIcon.startForeground': '#A8CD88',
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
