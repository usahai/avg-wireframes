import Layout from 'components/Layout'

interface AppContainerProps {
  children: React.ReactNode
}

const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <div id='app-container' className='bg-app-bg bg-cover bg-fixed'>
      <Layout>{children}</Layout>
    </div>
  )
}

export default AppContainer
