import UglifyJS from 'uglify-js';
import colors from '@fmodules/theme/themeColors';
import applyTheme from './themeApply.js';

const minifiedFnctStr = () => {
  /*{applyThemeFnct}*/

  function getInitialColorMode() {
    // The getInitialColorMode function will be minified at build time with the uglify-js lib
    // And will be inserted as first element inside the body tag
    // The purpose of having this script at build time is to avoid the dark mode flickering during a page refresh
    // Method applied to NextJS thanks to Joshua Comeau's article
    // For more details, please read his article
    // https://www.joshwcomeau.com/react/dark-mode/

    const lsThemeKeyName = 'theme-color-mode';
    const persistedColorPreference = window.localStorage.getItem(lsThemeKeyName);

    // If the user has used the theme mode switch button, we'll use the saved color mode
    if (persistedColorPreference) {
      if (persistedColorPreference.match(/^(light|dark)$/))
        return persistedColorPreference;
    }

    // If the user never used the theme mode switch button
    // or the value does not match light/dark (someting went wrong)
    // let's check the browser/OS theme color mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql) return mql.matches ? 'dark' : 'light';

    // If they are using a browser/OS that doesn't support color themes, let's default to 'light'.
    return 'light';
  };

  /*{colors}*/

  // Initial color mode served throught SSR
  const root = document.documentElement.style;
  const mode = getInitialColorMode();

  root.setProperty('--initial-color-mode', mode);
  /*{applyThemeFnctCall}*/
};

export default function Theme() {
  const c = 'colors';
  const _ = String(minifiedFnctStr)
            // Will replace the {colors} placeholder with the actual colors array
            .replace('/*{colors}*/', `const ${c} = ${JSON.stringify(colors)}`)
            // Will replace the {applyTheme} function with the actual function code
            .replace('/*{applyThemeFnct}*/', String(applyTheme))
            // Used in order to avoid a method call right at build time
            .replace('/*{applyThemeFnctCall}*/', `applyTheme(${c}, mode)`);

  return (
    <script
      id='theme-hydration'
      dangerouslySetInnerHTML={{
        __html: UglifyJS.minify(`(${_})();`).code,
      }}
    />
  );
};