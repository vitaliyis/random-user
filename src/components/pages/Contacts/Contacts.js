import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
  getDataFromServer,
  setCurrentPage,
  setSort,
} from "../../../redux/reducers/contacts/contacts.actions";
import Table from "./Table/Table";
import Tiled from "./Tiled/Tiled";
import Spinner from "../../Spinner/Spinner";
import Statistic from "./Statistic/Statistic";
import PaginationContainer from "../../Pagination/PaginationContainer";
import {
  filterData,
  getDataByCurrentPage,
  getDataWithFullName, getQuantityPage,
  sortByString,
} from "../../../utils/utils";
import FilterForm from "./FilterForm/Filterform";
import ViewDataControls from "./ViewDataControls/ViewDataControls";
import {SIZE_PAGE} from "../../../constans/constans";

const Contacts = props => {

  const {currentPage} = props.pagination
  const {error,
    isLoading,
    sort,
    data,
    dataCurrentPage,
    viewTable,
    quantityPage,
    isInitialLoaded,
    getDataFromServer,
    setSort,
    setCurrentPage} = props;

  useEffect(() => {
    if(!isInitialLoaded) getDataFromServer();
  }, [isInitialLoaded, getDataFromServer]);

  return (
    <>
      <h2 className="mt-3 mb-3">Contacts</h2>

      <ViewDataControls/>

      {error && <div><strong>{error}</strong></div>}

      {!isLoading && !error && <FilterForm data={data}/>}

      { !isLoading && !error && quantityPage > 1
        ? <PaginationContainer
          currentPage={currentPage}
          quantityPage={quantityPage}
          setCurrentPage={setCurrentPage}
        />
        : null
      }

      { isLoading ? <Spinner/> :
        !error && viewTable
          ? <Table data={dataCurrentPage} sort={sort} setSort={setSort}/>
          : !error && <Tiled data={dataCurrentPage}/>
      }

      {!isLoading && !error && <Statistic data={data}/>}

      { !isLoading && !error && quantityPage > 1
        ? <PaginationContainer
          currentPage={currentPage}
          quantityPage={quantityPage}
          setCurrentPage={setCurrentPage}
        />
        : null
      }
    </>
  )
}

const mapStateToProps = (state) => {
  const {
    data,
    pagination: {currentPage},
    sort,
    filter
  } = state.contacts;

  const newData = getDataWithFullName(data);

  const filteredData = filterData(newData, filter.fullName, filter.gender, filter.nationality);

  const quantityPage = getQuantityPage(filteredData);

  const sortedData = sortByString(filteredData, sort);

  const dataCurrentPage = getDataByCurrentPage(sortedData, SIZE_PAGE, currentPage);

  return {
    data: sortedData,
    isLoading: state.contacts.isLoading,
    viewTable: state.contacts.viewTable,
    pagination: state.contacts.pagination,
    error: state.contacts.error,
    sort: state.contacts.sort,
    isInitialLoaded: state.contacts.isInitialLoaded,
    dataCurrentPage,
    quantityPage
  }
}

const mapDispatchToProps = {
  getDataFromServer,
  setCurrentPage,
  setSort
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)