import 'styles/globals.css'
import type { AppProps } from 'next/app'
import AppContainer from 'containers/AppContainer'
import { ModalsProvider } from 'contexts/ModalsContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalsProvider>
      <AppContainer>
        <div id='app' className='flex h-full min-h-[calc(100vh-4rem)]'>
          <Component {...pageProps} />
        </div>
      </AppContainer>
    </ModalsProvider>
  )
}
