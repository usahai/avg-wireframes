import clsx from 'clsx'

interface DataContainerProps {
  className?: string
  children: React.ReactNode
}

const DataContainer = ({ className, children }: DataContainerProps) => {
  return (
    <div
      id='data-container'
      className={clsx(className, 'flex h-fit items-center')}
    >
      {children}
    </div>
  )
}

export default DataContainer
