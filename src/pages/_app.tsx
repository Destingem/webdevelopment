import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import UIWrapper from '../Components/UI/UIWrapper'
import { MantineProvider } from '@mantine/core'
import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';
export default function App({ Component, pageProps }: AppProps) {
  return <>
  <MantineProvider withGlobalStyles withNormalizeCSS>
  <UIWrapper>
  <FpjsProvider
    loadOptions={{
      apiKey: "RfwEReU3d0Ro0HNHE9pq",
      region: "eu"
    }}
  >
    <Component {...pageProps} />
    </FpjsProvider>
  </UIWrapper>
  </MantineProvider>
  </>
}
