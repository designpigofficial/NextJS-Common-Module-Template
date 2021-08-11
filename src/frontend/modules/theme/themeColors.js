/*
  The name key must have the same key name from the theme.css file!

  Add these markups at the end of the theme name to manipulate how the theme should be applied
  <> :Swaps the color mode (light palette will be used during dark mode and viceversa)

  The theme key can be extend as object to provide custom values not defined in theme.css
  theme: {
    light: 'value',
    dark: 'value'
  }
*/

export default [
  {
    name: 'page-bg-color',
    theme: 'cpalette-bg-main'
  },
  {
    name: 'page-containers-bg-color',
    theme: 'cpalette-bg-sec'
  },
  {
    name: 'page-containers-border-color',
    theme: 'cpalette-border'
  },
  {
    name: 'page-text-color',
    theme: 'cpalette-bg-main<>'
  }
];