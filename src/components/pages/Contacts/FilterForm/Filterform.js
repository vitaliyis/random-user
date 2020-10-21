import React from "react";
import {connect} from "react-redux";
import {
  setCurrentPage,
  setFilter,
} from "../../../../redux/reducers/contacts/contacts.actions";
import {getListNationalities} from "../../../../utils/utils";

const FilterForm = props => {

  const {filter, data, setFilter, setCurrentPage} = props;

  const genders = [
    {id: 1, name: 'Genders', value: ''},
    {id: 2, name: 'Male', value: 'male'},
    {id: 3, name: 'Female', value: 'female'},
    {id: 4, name: 'Indeterminate', value: 'indeterminate'}
    ];

  const nationalities = getListNationalities(data);

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFilter({[name]: value});
    setCurrentPage(1);
  }

  const clearFilters = (e) => {
    e.preventDefault();
    setFilter({
      fullName: '',
      gender: '',
      nationality: ''
    });
  }

  return (
    <div className="mb-2">
      <form action="">
        <div className="row">
          <div className="col-md-4 mb-2 mb-md-0">
            <input
              type="text"
              className="form-control"
              placeholder="Search by full name"
              name="fullName"
              value={filter.fullName}
              onChange={onChange}
            />
          </div>
          <div className="col-md-3 mb-2 mb-md-0">
            <select
              className="form-control"
              name="gender"
              value={filter.gender}
              onChange={onChange}
            >
              {genders.map(gender => (
                <option key={gender.id} value={gender.value}>{gender.name}</option>
              ))}
            </select>
          </div>
          <div className="col-md-3 mb-2 mb-md-0">
            <select
              className="form-control"
              name="nationality"
              value={filter.nationality}
              onChange={onChange}
            >
              {nationalities.map(nat => (
                <option key={Math.random()} value={nat.value}>{nat.name}</option>
              ))}
            </select>
          </div>
          <div className="col-md-2 mb-2 mb-md-0">
            <button
              className="btn btn-outline-primary w-100"
              onClick={clearFilters}
            >Clear</button>
          </div>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filter: state.contacts.filter,
  }
}

const mapDispatchToProps = {
  setFilter,
  setCurrentPage
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);