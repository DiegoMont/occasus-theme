import type {ThemeColors} from './theme-colors';
import {generateThemes} from './theme-generator';

export const themes: ThemeColors[] = [
  {
    name: 'Occasus Theme',
    fileName: 'occasus-color-theme.json',
    lightWhite: '#F3E7DB',
    lightDark: '#B5A39A',
    background: '#211D1B',
    orange: '#FFAA66',
    pink: '#FF70B5',
    purple: '#C792FF',
    yellow: '#FFD66D',
    beige: '#E7BDA3',
    burgundy: '#8F3655',
  },
];

generateThemes(themes);
