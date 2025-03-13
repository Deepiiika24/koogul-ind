import type React from 'react'

const Single: React.FC<{ title: any, name: any }> = ({ title, name }) => (
  <>
    {/* Single Page Header start */}
    <div className="container-fluid page-header py-5">
      <h1 className="text-center text-white display-6">{title}</h1>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <a href="/index.html#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="/#">Pages</a>
        </li>
        <li className="breadcrumb-item active text-white">{name}</li>
      </ol>
    </div>
    {/* Single Page Header End */}
  </>
)

export default Single
