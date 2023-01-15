import Modal from 'containers/Modal'
import React from 'react'
import RealmModalDashboard from './realmModalDashboard'

interface RealmModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const RealmModal: React.FC<RealmModalProps> = ({ isOpen, setIsOpen }) => {
  const handleChange = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpen(false)
  }

  return (
    <Modal isOpen={isOpen} onChange={handleChange}>
      <RealmModalDashboard handleClose={handleChange} />
    </Modal>
  )
}

export default RealmModal
