import type React from 'react'

const TabPane: React.FC<{ id: any, active: any, children: any }> = ({ id, active, children }) => {
  return (
    <div id={id} className={`tab-pane fade show p-0 ${active ? 'active' : ''}`}>
      <div className="row g-4">{children}</div>
    </div>
  )
}
export default TabPane
