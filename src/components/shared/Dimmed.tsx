import React from 'react'

function Dimmed({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-[#00000042]">
      {children}
    </div>
  )
}
export default Dimmed
