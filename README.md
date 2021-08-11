# Common/Models View NextJS Project Template
###### _With **dark/light theme** support (no flickering) and other out of the box components..._

## How to use
Download the repository, then in the console run `npm install` and `npm run dev` to test it.

### Anchor links
- **[Absolute paths](#absolute-paths)**
- **[How to configure and use the out of the box theme](#theme)**
- **[Out of the box components](#out-of-the-box-components)**
- **[HeadTags Component](#headtags)**
- **[Image Component](#image)**
- **[Link Component](#link)**

## Structure
```
/public
/src
  /backend
    /api (Where the actual API code will be stored, the page/api folder will be used only as a route)
      example.js
    /db
      /schemas
    /lib
  /frontend
    /common
      /components
        /page
          Page.jsx
          PageLayout.jsx
          PageLayout.module.css
        /wrappers
          /image
            Image.jsx
            Image.module.css
          /link
            Link.jsx
            Link.module.css
          HeadTags.jsx
      /constants
      /context
      /hooks
      /providers
      /styles
        global.css
      /tests
      /utilis
        /lib
    /modules
      /footer
        Footer.jsx
        Footer.module.css
      /navbar
        Navbar.jsx
        Navbar.module.css
      /theme
        theme.css
        themeAplly.js
        themeColors.js
        ThemeContext.js
        ThemeContextProvider.jsx
        ThemeGetInitialColorMode.jsx
  /pages
    /api
      example.js
    _app.js
    _document.js
    index.js
    page2.js
  /shared
    /lib
    isDevEnv.js
.env.development.local
.env.local
.env.production.local
.env.test.local
jsconfig.json (Absolute paths already configured)
package-lock.json
package.json
```

## Absolute paths
In order to avoid the spaghetti import mess created with the relative paths, I've already defined inside the `jsconfig.json` file the absolute paths.
> If you don't know what I'm talking about, please read [this](https://nextjs.org/docs/advanced-features/module-path-aliases "NextJS Absolute Imports and Module path aliases") article

You can find the predefined absolute paths by accessing the **[jsconfig.json](https://github.com/AdiMarianMutu/NextJS-Common-Module-Template/blob/main/jsconfig.json "jsconfig.json")** file

## Theme
##### The method used has been adapted to NextJS from [Joshua Comeau's article](https://www.joshwcomeau.com/react/dark-mode/ "Joshua Comeau's article")

All theme related files resides into the **modules/theme** folder.

---

You should start by defining the theme color palette inside the **theme.css** file, like below:

```css
:root {
  /* COLOR PALETTE */
  --cpalette-bg-main-light: #e5e5e5;
  --cpalette-bg-main-dark: #0d1629;
  --cpalette-bg-sec-light: #ffffff;
  --cpalette-bg-sec-dark: #1f3461;
  --cpalette-border-light: #0000004f;
  --cpalette-border-dark: #5f92ff9e;
  --cpalette-accent-light: #fca311;
  --cpalette-accent-dark: #ff8200;
  /* name KEY USED INSIDE THE themeColors.js FILE */
  --initial-color-mode: null;
  --page-bg-color: null;
  --page-containers-bg-color: null;
  --page-containers-border-color: null;
  --page-text-color: null;
}
```

>It is **mandatory** for the color palette variables name to end with **-light** and **-dark**.

The variables declared after the `/* name KEY USED INSIDE THE themeColors.js FILE */` comment will hold the color retrieved from the **color palette variables** and you will use them to apply the correct color mode to whatever element you want to be affected by the theme logic.

>The `--initial-color-mode` variable **must** be present because will hold the color mode retrieved from the client

You can name those variables as you like, because they will be defined inside the **themeColors.js** file.

---

Inside the **themeColors.js** file, you have to export as *default* a JSON array, which can have two different structure.

**[1]** if you want to use the colors *from the color palette variables* declared inside the *theme.css* file, you will use the structure below:

```json
{
  name: 'page-bg-color',
  theme: 'cpalette-bg-main'
}
```

Where the **name** key **must** match the css variables name (those after the `/* name KEY USED INSIDE THE themeColors.js FILE */`)  which are gonna hold the color retrieved from the color mode palette.

(*You don't have to put `--` at the start of the name key value, is gonna be added automatically under the hood by the themeApply function*)

The **theme** key value is gonna hold the current color palette, so you **don't** have to specify the color mode by attaching at the end -light or -dark, because the **themeApply.js** file will dynamically use the correct css color palette variable.

**[2]** Optionally, you can also define the dark/light colors directly inside the **themeColors.js** by using the structure below:

```json
{
  name: 'page-text-color',
  theme: {
    light: 'black',
    dark: 'white'
  }
}
```

This does mean that the css variable `page-text-color` will hold the `white` color when the color mode is dark and `black` when the color mode is white

> There is also a "third" method, which allows you to easily swap the values, what does that mean? Take a look at the code below:
>
> `theme: 'cpalette-bg-main<>'`
>
> You can see that at the end of the theme key value, there is **<>**, which will be interpreted by the themeApply function as:
> Use the **light** color palette **for the dark mode** and the **dark** color palette **for the light mode** color retrieved from the **cpalette-bg-main** css variable
>
> When is this useful?
> **Maybe you want to have your app text color as the same colors you use for your background page, but of course you want them to be swapped based on the current color mode for a better contrast**.

---

When you finished to declare all the variables and their color values, you can use the css variables as below.

Let's say I want my app text color to switch dynamically based on the **current** theme mode.

I'll add this inside the **global.css** file or directly into the **theme.css** file (**I recommend the 2nd option, you should put all your theme related classes inside the *theme.css* file**)

```css
* {
  color: var(--page-text-color);
}
```

By doing this, whenever the user will *switch* the theme color mode, the text of our app will automatically change based on the color palette we just defined!

One more example:

Let's say I want all the containers style of my app to change based on the current theme color mode, we could do this by defining a class (*or in my case, an **attribute***, but you can definitely use a class) which will look something like the code below:

```css
/* USED TO MARK AN ELEMENT AS CONTAINER SO THE THEME CAN BE APPLIED */
[theme-apply-bg-sec="true"] {
  background-color: var(--page-containers-bg-color);
  border-radius: 4px;
  border: 1px solid var(--page-containers-border-color);
  transition: background-color 0.3s ease-out;
}
```

Now, whenever I need an element to act like a container (which should switch **automatically** from dark to light mode* (and viceversa)*), I can just add the `theme-apply-bg-sec="true"` and my job is done.

> `<div className="container" theme-apply-bg-sec="true"><div>`

---

The **themeApply.js** file is the script responsable for... (You guessed it :tw-1f604:) applying the correct palette based on the **current theme color mode**.

> I'm not gonna get in details about how it does work, because it's a pretty simple script, and, if you are curious to check what it does, you can directly access it by clicking [here](https://github.com/AdiMarianMutu/NextJS-Common-Module-Template/blob/main/src/frontend/modules/theme/themeApply.js "here").

---

Now the core feature of this theme module:
**The reason why it does not flicker when the user refreshes a page!**

> Again, I didn't come with this solution, I've just adapted it to NextJS from the GatsbyJS example written by [Joshua Comeau's](https://www.joshwcomeau.com/react/dark-mode/ "Joshua Comeau's article")

Inside the **pages/\_document.js** file, more exactly inside the `body` tag, we have this code:

```html
<body>
  <ThemeGetInitialColorMode /> <-- THIS
  <Main />
  <NextScript />
</body>
```

> As you can guess, the `ThemeGetInitialColorMode` is a React **component**

Which in the end, will just return a `script` tag containing a small script (automatically minified thanks to [uglify-js](https://www.npmjs.com/package/uglify-js "uglify-js")).

The purpose of this script tag is to be **served** to the client with **SSR**, because by doing it this way, the script will be executed (*as a self calling anonymous function*) right on the page load with the theme color mode (dark/light) **already applied**, thus, **avoiding** the flickering.
The flickering is caused because when the page is loaded, the default color will (usually) be the light palette mode. **Only after** the page has been loaded and, React kicks-in, the **ThemeContextProvider** will  apply the correct mode retrieved by the `theme-color-mode` key saved into the **local storage**, thus causing that annoying white-to-dark flickering.

> You can always acces the ThemeContext by importing the context with `import ThemeContext from '@fmodules/theme/ThemeContext'` and then with `useContext` just extract the **colorMode** variable and the **toggleColorMode** method with `const { colorMode, toggleColorMode } = useContext(ThemeContext);`
>
> **The ThemeContextProvider is already wrapping our  _app.js content**

Returning to our `ThemeGetInitialColorMode` (component used inside the \_document.js file). I'll briefly explain what it does under the hood.

Inside this component is saved the script which is gonna be placed inside the `script` tag, the function will be converted to a string and then minified.
Inside the main function, there are some *placeholders* (marked with `/*{}*/`) which are gonna be replaced with the **colors** JSON array and the **applyTheme** function in order to exist in the context of the main function.

**The bundled version served to the client will look something like the code below**:

```html
<body>
  <script id="theme-hydration">(()=>{const e=document.documentElement.style;var c,t=function(){const e=window.localStorage.getItem("theme-color-mode");if(e&&e.match(/^(light|dark)$/))return e;var t=window.matchMedia("(prefers-color-scheme: dark)");return t&&t.matches?"dark":"light"}();e.setProperty("--initial-color-mode",t),c=t,[{name:"page-bg-color",theme:"cpalette-bg-main"},{name:"page-containers-bg-color",theme:"cpalette-bg-sec"},{name:"page-containers-border-color",theme:"cpalette-border"},{name:"page-text-color",theme:"cpalette-bg-main<>"}].forEach(({name:e,theme:t})=>{let o;var a,r;o="object"!=typeof t?(r=(a=t.endsWith("<>"))?"light"===c?"dark":"light":[c],`var(--${t=a?t.replace("<>",""):t}-${r})`):t[c],window.document.documentElement.style.setProperty(`--${e}`,o)})})();</script>
</body>
```

And that's all about how the built-in theme module works and how to configure it to make our life easier.


## Out of the box components

---

## HeadTags
Details coming soon.

## Image
Details coming soon.

## Link
Details coming soon.

## Feel free to share your modified version. Let's try to create the most flexible and scalable template ever!