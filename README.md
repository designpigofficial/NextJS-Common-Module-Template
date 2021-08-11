# Common/Models View NextJS Project Template
###### _With **dark/light theme** support (no flickers) and other out of the box components..._

## How to use
Download the repository, then in the console run `npm install` and `npm run dev` to test it.

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

## Theme
Details coming soon.

## Out of the box components
Details coming soon.

## Feel free to share your modified version. Let's try to create the most flexible and scalable template ever!
