import Image from 'next/image'
import planks from 'assets/planks.webp'
import DataContainer from 'components/DataContainer'
import ReservoirsBalance from 'components/ReservoirBalance'
import { IconCredits, IconFire, IconGrass, IconIce } from 'containers/IconImage'
import StatsBalances from 'components/StatsBalances'

const Dashboard = () => {
  return (
    <div
      id='dashboard-container'
      className='m-auto flex flex-col justify-center'
    >
      <div
        id='contents-container'
        className='shadow-[0 0 10px bg-appPurple] flex w-screen max-w-4xl flex-col border-2 border-appPurple bg-black p-8 text-white'
      >
        <div
          id='title'
          className='mx-60 -mt-[4.5rem] mb-4 flex justify-center border-2 border-appPurple bg-black px-4 py-2'
        >
          <h1>REALM #18763</h1>
        </div>
        <div id='padlock' className='mb-8 w-4'>
          <h3 className='leading-none'>Access Rights</h3>
        </div>
        <div id='text-row' className='flex justify-center gap-8'>
          <div id='text-col-1' className='w-1/3'></div>
          <div id='text-col-2' className='flex w-1/3 justify-center gap-4'>
            <h2 className='text-appPurple'>COLLECTED</h2>
            <h2>REMAINING</h2>
          </div>
          <div id='text-col-3' className='flex w-1/3 justify-center'>
            <h2>STATS</h2>
          </div>
        </div>
        <div id='user-inventory' className='flex justify-center gap-8'>
          <div id='alchemica' className='w-1/3'>
            <div id='data-container-upper-items' className='grow'>
              <DataContainer className='flex-col gap-6 border-2 border-solid border-appPurple bg-gradient-to-b from-appPurple/50 to-appPurple/25 py-4'>
                <Image src={planks} alt='sample-img-1' width={120} />
                <h2 className='text-center text-[2.25rem] leading-none'>
                  ALCHEMICAL AALTAR
                </h2>
              </DataContainer>
            </div>
            <div
              id='data-container-lower-items'
              className='flex flex-col items-center justify-start'
            >
              <button onClick={(event) => window.alert('Btn clicked!')}>
                <h2>Channel Alchemica</h2>
              </button>
              <h3 className='min-h-[2rem]'>READY TO CHANNEL</h3>
            </div>
          </div>
          <div id='reservoirs' className='flex w-1/3 flex-col'>
            <div id='data-container-upper-items' className='h-full grow'>
              <DataContainer className='!h-full justify-center gap-4'>
                <div id='collected' className='h-full'>
                  <ReservoirsBalance
                    className='bg-gradient-to-t from-appPurple/40 to-appPurple/10'
                    balances={{
                      credits: 4000,
                      grass: 13000,
                      ice: 27000,
                      fire: 2500,
                    }}
                  />
                </div>
                <div id='remaining' className='h-full'>
                  <ReservoirsBalance
                    className='bg-gradient-to-t from-slate-200/40 to-slate-200/10'
                    balances={{
                      credits: 320000,
                      grass: 877000,
                      ice: 1000000,
                      fire: 12000,
                    }}
                  />
                </div>
              </DataContainer>
            </div>
            <div
              id='data-container-lower-items'
              className='flex flex-col items-center justify-start'
            >
              <button onClick={(event) => window.alert('Btn clicked!')}>
                <h2>Empty Reservoirs</h2>
              </button>
              <h3 className='min-h-[2rem]'>READY TO EMPTY</h3>
            </div>
          </div>
          <div id='stats' className='flex w-1/3 flex-col'>
            <div
              id='data-container-upper-items'
              className='flex h-full grow flex-col justify-around'
            >
              <DataContainer className='!h-full flex-col justify-center gap-4'>
                <div id='stats-icon-row' className='h-full w-full'>
                  <StatsBalances
                    isIcon
                    className='border-b-appPurple bg-gradient-to-t from-appPurple/40 to-appPurple/10'
                  />
                </div>
                <div id='stats-total-claimed' className='h-full'>
                  <StatsBalances
                    title='Total Claimed'
                    balances={{
                      credits: 320000,
                      grass: 877000,
                      ice: 1000000,
                      fire: 12000,
                    }}
                  />
                </div>
                <div id='stats-harvest-day' className='h-full'>
                  <StatsBalances
                    title='Harvest / Day'
                    balances={{
                      credits: 15000,
                      grass: 2000,
                      ice: 1342,
                      fire: 1800,
                    }}
                  />
                </div>
                <div id='stats-reservoirs-capacity' className='h-full'>
                  <StatsBalances
                    title='Reservoirs Capacity'
                    balances={{
                      credits: 17000,
                      grass: 13000,
                      ice: 2000,
                      fire: 1500,
                    }}
                  />
                </div>
              </DataContainer>
            </div>
            <div
              id='data-container-lower-items'
              className='flex flex-col items-center justify-start'
            >
              <button onClick={(event) => window.alert('Btn clicked!')}>
                <h2>Survey Parcel</h2>
              </button>
              <h3 className='min-h-[2rem]'></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
