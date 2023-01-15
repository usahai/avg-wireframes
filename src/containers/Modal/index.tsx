interface ModalProps {
  children: React.ReactNode
  className?: string
  isOpen: boolean
  onChange: (event: any) => void
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onChange }) => {
  return (
    <div>
      {isOpen && (
        <div>
          <div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
            {children}
          </div>
          <div className='fixed inset-0 z-40 bg-black opacity-25'></div>
        </div>
      )}
    </div>
  )
}

export default Modal
