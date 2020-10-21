import React from 'react'

const Pagination1 = (props) => {
  const {currentPage, numberPages, setCurrentPage} = props

  return (
    <nav className="nav-pagination">
      <ul className="pagination">
        {numberPages.map(item => {
          return currentPage === item
            ? <li className="page-item active" key={item}><span className="page-link">{item}</span></li>
            : <li className="page-item" key={item}>
              <button className="page-link"
                 onClick={() => setCurrentPage(item)}
              >{item}
              </button>
            </li>
        })}
      </ul>
    </nav>
  )
}

export default Pagination1