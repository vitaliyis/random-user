import React from 'react'

const Pagination2 = (props) => {
  const {currentPage, numberPages, sizeChangePagination, setCurrentPage} = props

  return (
    <nav className="nav-pagination">
      <ul className="pagination">
        {numberPages.map(item => {
          return currentPage === item
            ? <li className="page-item active" key={item}><span className="page-link">{item}</span></li>
            : item <= sizeChangePagination + 1//<= 5
                ? <li className="page-item" key={item}>
                <button className="page-link"
                   onClick={() => setCurrentPage(item)}
                >{item}</button></li>
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

export default Pagination2