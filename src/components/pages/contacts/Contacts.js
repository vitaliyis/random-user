import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
  getDataFromServer,
  setCurrentPage,
  setSort,
  toggleViewTable
} from "../../../redux/reducers/contacts/contacts.actions";
import Table from "./table/Table";
import Tiled from "./tiled/Tiled";
import Spinner from "../../Spinner";
import Statistic from "./statistic/Statistic";
import PaginationContainer from "../../Pagination/PaginationContainer";
import {
  filterData,
  getDataByCurrentPage,
  getDataWithFullName, getQuantityPage,
  sortByDown,
  sortByString,
  sortByUp
} from "../../../utils/utils";
import {NORMAL, SORT_ASC, SORT_DESC} from "../../../constans/constans";
import FilterForm from "./FilterForm/Filterform";

const Contacts = props => {

  const {quantityPage, currentPage} = props.pagination
  const {error, getDataFromServer, isLoading, sort, setSort, filteredData, filter, data} = props;

  useEffect(() => {
    getDataFromServer();
  }, [])

  if (error) return (
    <div><strong>{error}!</strong></div>
  )

  return (
    <>
      <h1>Contacts</h1>
      <div className="mb-3 d-flex justify-content-between flex-column flex-sm-row">
        <button
          className="btn btn-success mb-2 mb-sm-0"
          onClick={() => getDataFromServer()}
        >Update data</button>
        <div className="d-flex contacts-group-btn">
          <button
            type="button"
            className={`btn ${props.viewTable ? "btn-outline-primary" : "btn-primary"} `}
            onClick={() => props.toggleViewTable(false)}
          >Tiled view</button>
          <button
            type="button"
            className={`btn ml-2 ${props.viewTable ? "btn-primary" : "btn-outline-primary"} `}
            onClick={() => props.toggleViewTable(true)}
          >Tabular view</button>
        </div>
      </div>

      <FilterForm/>

      { !isLoading && quantityPage > 1
        ? <PaginationContainer
          currentPage={currentPage}
          quantityPage={quantityPage}
          setCurrentPage={props.setCurrentPage}
        />
        : null
      }

      { isLoading ? <Spinner/> :
        props.viewTable
          ? <Table data={props.dataCurrentPage} sort={sort} setSort={setSort}/>
          : <Tiled data={props.dataCurrentPage}/>
      }

      {!isLoading && <Statistic data={data}/>}

      { !isLoading && quantityPage > 1
        ? <PaginationContainer
          currentPage={currentPage}
          quantityPage={quantityPage}
          setCurrentPage={props.setCurrentPage}
        />
        : null
      }
    </>
  )
}

const mapStateToProps = (state) => {
  const {
    data,
    pagination: {sizePage, currentPage},
    sort,
    filter
  } = state.contactsReducer;

  const newData = getDataWithFullName(data);

  const sortedData = sortByString(newData, sort);

  // const filteredData = filterData(sortedData, filter.fullName);

  const dataCurrentPage = getDataByCurrentPage(sortedData, sizePage, currentPage);

  return {
    data: state.contactsReducer.data,
    viewTable: state.contactsReducer.viewTable,
    isLoading: state.contactsReducer.isLoading,
    pagination: state.contactsReducer.pagination,
    error: state.contactsReducer.error,
    sort: state.contactsReducer.sort,
    filter: state.contactsReducer.filter,
    // filteredData,
    dataCurrentPage
  }
}

const mapDispatchToProps = {
  getDataFromServer,
  toggleViewTable,
  setCurrentPage,
  setSort
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)