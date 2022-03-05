import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import axiosClient from 'api-client/axios-client';
import EmptyLayout from 'components/layout/empty';
import { SWRConfig } from 'swr';
import { createEmotionCache, theme } from 'utils';
import { AppPropsWithLayout } from '../models';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
}: // emotionCache = clientSideEmotionCache,
AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <SWRConfig
          value={{
            fetcher: (url) => axiosClient.get(url),
            shouldRetryOnError: false,
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
