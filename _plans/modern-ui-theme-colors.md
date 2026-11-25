# Plan for modern-ui-theme-colors

## Problem Statement

The Occasus theme currently defines only four Modern UI color IDs, leaving the new VS Code layout to infer the remaining colors from defaults that may not match the theme's palette. The desired outcome is complete, intentional Modern UI color coverage while retaining the theme's existing classic workbench color tokens where they remain useful.

## Functional Requirements

- **FR-1: Provide intentional theme values for every Modern UI Color ID documented by VS Code.**
  - **Acceptance criteria:** Every ID in the linked Modern UI Colors table is defined by the generated color theme for each supported Occasus theme variant, including shell, surface, editor and panel borders, sash grip, tab states, activity bar states, connected tabs, and inactive status bar colors.
- **FR-2: Retain classic workbench color IDs only where the Modern UI continues to consume those roles.**
  - **Acceptance criteria:** Color IDs required for shared Modern UI surfaces and controls remain explicitly mapped; classic-layout-only overrides are not retained solely for unverified classic appearance.

## Proposed Solution

Extend the existing `ThemeColors` to `getTheme()` generator path in `src/theme-colors.ts` and `src/theme-template.ts` with explicit values for every documented Modern UI color ID. Keep classic IDs only when they still control a Modern UI role, such as the editor, sidebar, or panel surface, and omit classic-layout-only overrides that are outside the tested target. This fits the repository's shared palette and generated JSON design, and avoids treating a color ID name as a value, which VS Code's documentation says is invalid in theme JSON.

## To-dos

- [ ] **TODO-1:** Inventory the documented Modern UI Color IDs and identify classic color IDs that continue to control Modern UI surfaces or shared controls. **Requirements:** `FR-1`, `FR-2`
- [ ] **TODO-2:** Add the agreed Modern UI color mappings to `getTheme()` in `src/theme-template.ts` and ensure each registered palette in `src/main.ts` receives them; retain only classic IDs required by Modern UI roles. **Requirements:** `FR-1`, `FR-2`
- [ ] **TODO-3:** Verify generated theme JSON covers the full Modern UI ID list and retains mappings only for classic roles used by the Modern UI. **Requirements:** `FR-1`, `FR-2`

## Open Questions

Pending testing decision.

## Implementation Phases

Pending phase discussion and approval.
