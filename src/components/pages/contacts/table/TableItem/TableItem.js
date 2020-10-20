import React, {useState} from "react";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {transformDate} from "../../../../../utils/utils";

const TableItem = props => {
  const [copyEmail, setCopyEmail] = useState('');
  const [copyPhone, setCopyPhone] = useState('');
  const [copyLocation, setCopyLocation] = useState('');

  const {item} = props;

  const onCopyEmail = () => {
    setCopyEmail('Copied.');
    setTimeout(() => {
      setCopyEmail('');
    }, 2000)
  }

  const onCopyPhone = () => {
    setCopyPhone('Copied.');
    setTimeout(() => {
      setCopyPhone('');
    }, 2000)
  }

  const onCopyLocation = () => {
    setCopyLocation('Copied.');
    setTimeout(() => {
      setCopyLocation('');
    }, 2000)
  }

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
        <p>{item.email}</p>
        <CopyToClipboard onCopy={onCopyEmail} text={item.email}>
          <button className={`btn ${copyEmail ? "btn-outline-success" : "btn-outline-primary"} btn-sm btn-clipboard`}>{`${copyEmail ? copyEmail : "copy"}`}</button>
        </CopyToClipboard>
      </td>
      <td>
        <p>{item.phone}</p>
        <CopyToClipboard onCopy={onCopyPhone} text={item.phone}>
          <button className={`btn ${copyPhone ? "btn-outline-success" : "btn-outline-primary"} btn-sm btn-clipboard`}>{`${copyPhone ? copyPhone : "copy"}`}</button>
        </CopyToClipboard>
      </td>
      <td>
        <p>{`${item.location.country} ${item.location.street.number} ${item.location.street.name} ${item.location.state} ${item.location.postcode}`}</p>
        <CopyToClipboard onCopy={onCopyLocation} text={`${item.location.country} ${item.location.street.number} ${item.location.street.name} ${item.location.state} ${item.location.postcode}`}>
          <button className={`btn ${copyLocation ? "btn-outline-success" : "btn-outline-primary"} btn-sm btn-clipboard`}>{`${copyLocation ? copyLocation : "copy"}`}</button>
        </CopyToClipboard>
      </td>
      <td>{item.nat}</td>
    </tr>
  )
}

export default TableItem;