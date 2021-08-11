export default function applyTheme(colors, mode) {
  colors.forEach(({ name, theme }) => {
    let cssVarTheme;

    if (typeof theme !== 'object') {
      const reversePalette = theme.endsWith('<>');
      const paletteColorMode = !reversePalette ? [mode] : (mode === 'light' ? 'dark' : 'light');

      if (reversePalette)
        theme = theme.replace('<>', '');

      cssVarTheme = `var(--${theme}-${paletteColorMode})`;
    } else
      cssVarTheme = theme[mode];

    window.document.documentElement.style.setProperty(
      `--${name}`,
      cssVarTheme
    );
  });
}