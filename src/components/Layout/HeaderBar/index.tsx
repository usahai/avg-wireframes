import Link from 'next/link'

const HeaderBar = () => {
  return (
    <div
      id='header'
      className='sticky top-0 z-30 h-16 w-full bg-slate-400 opacity-90'
    >
      <div id='nav-links' className='ml-12 flex h-full items-center gap-4'>
        <Link href={'/'} className='flex h-full items-center'>
          <h3 className='font-bold text-amber-900 hover:text-amber-700'>
            Home
          </h3>
        </Link>
        <Link href={'/welcomeQueue'} className='flex h-full items-center'>
          <h3 className='font-bold text-amber-900 hover:text-amber-700'>
            Welcome Queue
          </h3>
        </Link>
        <Link href={'/dashboard'} className='flex h-full items-center'>
          <h3 className='font-bold text-amber-900 hover:text-amber-700'>
            Dashboard
          </h3>
        </Link>
      </div>
    </div>
  )
}

export default HeaderBar
