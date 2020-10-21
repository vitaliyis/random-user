import React from 'react'

const Pagination4 = (props) => {
  const {currentPage, numberPages, sizeChangePagination, setCurrentPage} = props

  return (
    <nav className="nav-pagination">
      <ul className="pagination">
        <li className="page-item" key={1}>
          <button className="page-link"
             onClick={() => setCurrentPage(1)}
          >{1}</button>
        </li>
        <li className="page-item" key={2}><span className="page-link">...</span></li>
        {numberPages.map(item => {
          return currentPage === item
            ? <li className="page-item active" key={item}><span className="page-link">{item}</span></li>
            : item >= numberPages.length - sizeChangePagination
              ? <li className="page-item" key={item}>
                  <button className="page-link"
                     onClick={() => setCurrentPage(item)}
                  >{item}</button>
                </li>
              : null
        })}
      </ul>
    </nav>
  )
}

export default Pagination4