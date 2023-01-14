interface AppContainerProps {
  children: React.ReactNode
}

const AppContainer = ({ children }: AppContainerProps) => {
  return <div className='w-full bg-slate-500'>{children}</div>
}

export default AppContainer
