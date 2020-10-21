import React, {useState} from "react";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {getPhone} from "../../../../../utils/utils";

const TiledItem = props => {
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
    <div className="col-md-4 mb-3 col-sm-6">
      <div className="card">
        <img src={item.picture.large} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{`${item.name.title}. ${item.name.first} ${item.name.last} (${item.dob.age} years)`}</h5>
          <div className="mb-2 tiled-item-email">
            <CopyToClipboard onCopy={onCopyEmail} text={item.email}>
              <button className={`btn mr-2 ${copyEmail ? "btn-outline-success" : "btn-outline-primary"} btn-sm btn-clipboard`}>{`${copyEmail ? copyEmail : "copy"}`}</button>
            </CopyToClipboard>
            <span className="card-text"><a href={`mailto:${item.email}`}>{item.email}</a></span>
          </div>

          <div className="mb-2">
            <CopyToClipboard onCopy={onCopyPhone} text={item.phone}>
              <button className={`btn mr-2 ${copyPhone ? "btn-outline-success" : "btn-outline-primary"} btn-sm btn-clipboard`}>{`${copyPhone ? copyPhone : "copy"}`}</button>
            </CopyToClipboard>
            <span className="card-text"><a href={`tel:${getPhone(item.phone)}`}>{item.phone}</a></span>
          </div>

          <div className="mb-2">
            <CopyToClipboard onCopy={onCopyLocation} text={`${item.location.country} ${item.location.street.number} ${item.location.street.name} ${item.location.state} ${item.location.postcode}`}>
              <button className={`btn mr-2 ${copyLocation ? "btn-outline-success" : "btn-outline-primary"} btn-sm btn-clipboard`}>{`${copyLocation ? copyLocation : "copy"}`}</button>
            </CopyToClipboard>
            <span className="card-text">{`${item.location.country} ${item.location.street.number} ${item.location.street.name} ${item.location.state} ${item.location.postcode}`}</span>
          </div>

          <p>{item.nat}</p>
        </div>
      </div>
    </div>
  )
}

export default TiledItem;