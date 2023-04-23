import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import UIWrapper from '../Components/UI/UIWrapper'
import { MantineProvider } from '@mantine/core'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <MantineProvider withGlobalStyles withNormalizeCSS>
  <UIWrapper>
    <Component {...pageProps} />
  </UIWrapper>
  </MantineProvider>
  </>
}
