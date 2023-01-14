import clsx from 'clsx'

interface DotProps {
  color: 'yellow' | 'blue'
}

const Dot = ({ color }: DotProps) => {
  return (
    <div
      className={clsx('h-4 w-4', {
        ['bg-queueYellow']: color === 'yellow',
        ['bg-queueBlue']: color === 'blue',
      })}
    ></div>
  )
}

export default Dot
