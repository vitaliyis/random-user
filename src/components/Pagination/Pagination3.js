import React from 'react'

const Pagination3 = (props) => {
  const {currentPage, numberPages, setCurrentPage} = props

  const leftMark = currentPage - 2
  const rightMark = currentPage + 2

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
            : item >= leftMark && item <= rightMark
              ? <li className="page-item" key={item}>
                  <button className="page-link"
                     onClick={() => setCurrentPage(item)}
                  >{item}</button>
                </li>
              : null
        })}
        <li className="page-item" key={numberPages.length - 2}><span className="page-link">...</span></li>
        <li className="page-item" key={numberPages.length - 1}>
          <button className="page-link"
             onClick={() => setCurrentPage(numberPages.length)}
          >{numberPages.length}</button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination3