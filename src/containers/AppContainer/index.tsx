interface AppContainerProps {
  children: React.ReactNode
}

const AppContainer = ({ children }: AppContainerProps) => {
  return <div className='w-full bg-app-bg bg-cover'>{children}</div>
}

export default AppContainer
