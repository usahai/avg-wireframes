import RealmModal from 'components/RealmModal'
import { useContext, useState } from 'react'
import { ModalsContext } from './context'

const ModalsProvider = ({ children }: { children: React.ReactNode }) => {
  const [isShowRealmModal, setIsShowRealmModal] = useState<boolean>(false)

  const sharedState = {
    isShowRealmModal,
    setIsShowRealmModal,
  }

  return (
    <ModalsContext.Provider value={sharedState}>
      {children}
      <RealmModal isOpen={isShowRealmModal} setIsOpen={setIsShowRealmModal} />
    </ModalsContext.Provider>
  )
}

const useModalsContext = () => {
  const context = useContext(ModalsContext)

  if (context === undefined) {
    throw new Error('useModalsContext must be used within a ModalsProvider')
  }

  return context
}

export { ModalsProvider, useModalsContext }
