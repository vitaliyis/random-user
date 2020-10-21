import React from 'react';
import TableItem from "./TableItem/TableItem";
import ArrowMark from "./ArrowMark/ArrowMark";
import {NORMAL, SORT_ASC, SORT_DESC} from "../../../../constans/constans";

const Table = props => {

  const {data, sort, setSort} = props;

  const updateSort = () => {
    switch (sort) {
      case NORMAL:
        setSort(SORT_ASC);
        break;
      case SORT_ASC:
        setSort(SORT_DESC);
        break;
      case SORT_DESC:
        setSort(NORMAL);
        break;
      default:
        break;
    }
  }

  const getMessageForSortTooltip = () => {
    switch (sort) {
      case NORMAL:
        return "Sort by asc";
      case SORT_ASC:
        return "Sort by desc";
      case SORT_DESC:
        return "Sort by normal";
      default:
        break;
    }
  }

  return (
    <div className="table-wrapper">
      <div className="table-responsive">
        <table className="table">
          <thead>
          <tr>
            <th scope="col" className="text-nowrap">Avatar</th>
            <th scope="col"
                className="text-nowrap table-fullname"
                onClick={updateSort}
                data-title={getMessageForSortTooltip()}
            >Full name <ArrowMark sortCondition={sort}/></th>
            <th scope="col" className="text-nowrap">Birthday</th>
            <th scope="col" className="text-nowrap">Email</th>
            <th scope="col" className="text-nowrap">Phone</th>
            <th scope="col" className="text-nowrap">Location</th>
            <th scope="col" className="text-nowrap">Nationality</th>
          </tr>
          </thead>
          <tbody>
          {data.map(item => {
            return (
              <TableItem item={item} key={item.phone}/>
            )
          })}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default Table;