import React from "react";
import {getPhone} from "../../../../../utils/utils";
import CopyToClipboardContainer from "../../CopyToClipboardContainer/CopyToClipboardContainer";

const TiledItem = props => {
  const {item} = props;

  return (
    <div className="col-md-4 mb-3 col-sm-6">
      <div className="card">
        <img src={item.picture.large} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{`${item.name.title}. ${item.name.first} ${item.name.last} (${item.dob.age} years)`}</h5>
          <div className="mb-2 tiled-item-email">
            <CopyToClipboardContainer value={item.email}/>
            <span className="card-text ml-2"><a href={`mailto:${item.email}`}>{item.email}</a></span>
          </div>

          <div className="mb-2">
            <CopyToClipboardContainer value={item.phone}/>
            <span className="card-text ml-2"><a href={`tel:${getPhone(item.phone)}`}>{item.phone}</a></span>
          </div>

          <div className="mb-2">
            <CopyToClipboardContainer value={`${item.location.country} ${item.location.street.number} ${item.location.street.name} ${item.location.state} ${item.location.postcode}`}/>
            <span className="card-text ml-2">{`${item.location.country} ${item.location.street.number} ${item.location.street.name} ${item.location.state} ${item.location.postcode}`}</span>
          </div>

          <p>{item.nat}</p>
        </div>
      </div>
    </div>
  )
}

export default TiledItem;