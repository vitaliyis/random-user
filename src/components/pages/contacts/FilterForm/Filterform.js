import React from "react";
import {connect} from "react-redux";
import {
  setFilter,
} from "../../../../redux/reducers/contacts/contacts.actions";
import {getListNationalities} from "../../../../utils/utils";

const FilterForm = props => {

  const {filter, setFilter, data} = props;

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
    // console.log('filter', filter);
  }

  return (
    <div className="mb-2">
      <form action="">
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Search by full name"
              name="fullName"
              value={filter.fullName}
              onChange={onChange}
            />
          </div>
          <div className="col">
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
          <div className="col">
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
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filter: state.contactsReducer.filter,
    data: state.contactsReducer.data
  }
}

const mapDispatchToProps = {
  setFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);