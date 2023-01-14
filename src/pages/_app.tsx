import 'styles/globals.css'
import type { AppProps } from 'next/app'
import AppContainer from 'containers/AppContainer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <div id='app' className='flex h-full min-h-[calc(100vh-4rem)]'>
        <Component {...pageProps} />
      </div>
    </AppContainer>
  )
}
