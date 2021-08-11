import Document, { Html, Head, Main, NextScript } from 'next/document'
import ThemeGetInitialColorMode from '@fend/modules/theme/ThemeGetInitialColorMode';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en-US'>
        <Head>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <body>
          <ThemeGetInitialColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument