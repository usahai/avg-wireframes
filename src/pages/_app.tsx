import 'styles/globals.css'
import type { AppProps } from 'next/app'
import AppContainer from 'containers/AppContainer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <Component {...pageProps} />
    </AppContainer>
  )
}
