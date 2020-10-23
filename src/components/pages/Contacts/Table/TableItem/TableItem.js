import React from "react";
import {getPhone, transformDate} from "../../../../../utils/utils";
import CopyToClipboardContainer from "../../CopyToClipboardContainer/CopyToClipboardContainer";

const TableItem = props => {
  const {item} = props;

  return (
    <tr>
      <td>
        <img src={item.picture.thumbnail} alt=""/>
      </td>
      <td>{`${item.name.title}. ${item.name.first} ${item.name.last}`}</td>
      <td>
        <p>{transformDate(item.dob.date)}</p>
        <p>{item.dob.age} years</p>
      </td>
      <td>
        <p><a href={`mailto:${item.email}`}>{item.email}</a></p>
        <CopyToClipboardContainer value={item.email}/>
      </td>
      <td>
        <p><a href={`tel:${getPhone(item.phone)}`}>{item.phone}</a></p>
        <CopyToClipboardContainer value={item.phone}/>
      </td>
      <td>
        <p>{`${item.location.country} ${item.location.street.number} ${item.location.street.name} ${item.location.state} ${item.location.postcode}`}</p>
        <CopyToClipboardContainer value={`${item.location.country} ${item.location.street.number} ${item.location.street.name} ${item.location.state} ${item.location.postcode}`}/>
      </td>
      <td>{item.nat}</td>
    </tr>
  )
}

export default TableItem;