import { useModalsContext } from 'contexts/ModalsContext'

const Dashboard = () => {
  const { setIsShowRealmModal } = useModalsContext()

  return (
    <div
      id='dashboard-container'
      className='m-auto flex flex-col justify-center'
    >
      <button onClick={(event) => setIsShowRealmModal(true)}>
        <h1 className='text-white'>Show Realm Details</h1>
      </button>
    </div>
  )
}

export default Dashboard
