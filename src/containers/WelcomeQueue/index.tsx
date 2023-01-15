import Dot from 'components/Dot'
import React from 'react'

interface WelcomeQueueProps {
  children?: React.ReactNode
  className?: string
}

const WelcomeQueue = ({ children, className }: WelcomeQueueProps) => {
  return (
    <div
      id='welcome-queue-container'
      className='mx-auto flex flex-col justify-evenly p-16'
    >
      <div id='flex-container'>
        <div
          id='top-container'
          className='flex h-40 items-center justify-center'
        >
          <div
            id='top-line'
            className='container absolute h-20 max-w-4xl bg-queueYellow clip-path-topLine'
          ></div>
          <div
            id='top-shade'
            className='container absolute h-20 max-w-4xl bg-gradient-to-b from-queueYellow to-transparent opacity-50 clip-path-topShade'
          ></div>
          <div
            id='dot-left'
            className='container absolute flex max-w-4xl justify-start'
          >
            <Dot color='yellow' />
          </div>
          <div
            id='dot-right'
            className='container absolute flex max-w-4xl justify-end'
          >
            <Dot color='yellow' />
          </div>
        </div>
        <div id='content' className={className}>
          {children}
        </div>
        <div
          id='bottom-container'
          className='flex h-40 items-center justify-center'
        >
          <div
            id='bottom-line'
            className='container absolute h-20 max-w-4xl bg-queueBlue clip-path-bottomLine'
          ></div>
          <div
            id='bottom-shade'
            className='container absolute h-20 max-w-4xl bg-gradient-to-t from-queueBlue to-transparent opacity-50 clip-path-bottomShade'
          ></div>
          <div
            id='dot-left'
            className='container absolute flex max-w-4xl justify-start'
          >
            <Dot color='blue' />
          </div>
          <div
            id='dot-right'
            className='container absolute flex max-w-4xl justify-end'
          >
            <Dot color='blue' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeQueue
