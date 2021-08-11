import '@fglobalcss';
import '@fthemecss';
import ThemeContextProvider from '@fmodules/theme/ThemeContextProvider';
import PageLayout from '@fcommon/components/page/PageLayout';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ThemeContextProvider>
  );
}

export default MyApp;