import React from "react";
import {
  getDataFromServer,
  setCurrentPage, setError, setFilter,
  setSort,
  toggleViewTable
} from "../../../../redux/reducers/contacts/contacts.actions";
import {connect} from "react-redux";
import {NORMAL} from "../../../../constans/constans";

const ViewDataControls = props => {

  const {viewTable, toggleViewTable, isLoading, error, getDataFromServer, setSort, setCurrentPage, setFilter, setError} = props;

  const updateData = () => {
    getDataFromServer();
    toggleViewTable(true);
    setSort(NORMAL);
    setCurrentPage(1);
    setError('');
    setFilter({
      fullName: '',
      gender: '',
      nationality: ''
    });
  }

   return (
     <div className="mb-3 d-flex justify-content-between flex-column flex-sm-row">
       <button
         className="btn btn-success mb-2 mb-sm-0"
         onClick={() => updateData()}
         disabled={isLoading}
       >Update data</button>
       {!error &&
        <div className="d-flex contacts-group-btn">
         <button
           type="button"
           className={`btn ${viewTable ? "btn-outline-primary" : "btn-primary"} `}
           onClick={() => toggleViewTable(false)}
           disabled={isLoading}
         >Tiled view
         </button>
         <button
           type="button"
           className={`btn ml-2 ${viewTable ? "btn-primary" : "btn-outline-primary"} `}
           onClick={() => toggleViewTable(true)}
           disabled={isLoading}
         >Tabular view
         </button>
       </div>
       }
     </div>
   )
}

const mapStateToProps = state => {
  return {
    viewTable: state.contacts.viewTable,
    isLoading: state.contacts.isLoading,
    error: state.contacts.error,
    filter: state.contacts.filter,
    pagination: state.contacts.pagination,
  }

}

const mapDispatchToProps = {
  getDataFromServer,
  toggleViewTable,
  setCurrentPage,
  setSort,
  setFilter,
  setError
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewDataControls);