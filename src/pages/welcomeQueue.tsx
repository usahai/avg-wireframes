import WelcomeQueue from 'containers/WelcomeQueue'

const Queue = () => {
  return (
    <div id='container' className='flex h-[100vh] items-center'>
      <WelcomeQueue className='flex h-64 flex-col items-center justify-center'>
        <h1 className='text-white'>Happy New Year!</h1>
      </WelcomeQueue>
    </div>
  )
}

export default Queue
