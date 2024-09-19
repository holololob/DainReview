import React from 'react'
import Dimmed from './Dimmed'

interface ModalProps {
  open: boolean
  children: React.ReactNode
}

function Modal({ open, children }: ModalProps) {
  if (open === false) return null

  return (
    <Dimmed>
      <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-lg bg-white">
        <div className="w-80">
          <div className="p-4">{children}</div>
        </div>
      </div>
    </Dimmed>
  )
}

export default Modal
