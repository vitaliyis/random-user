import React from "react";
import {getMaxGender, getStatisticNationalities, getSumGender} from "../../../../utils/utils";

const Statistic = props => {

  const males = getSumGender(props.data, "male");
  const females = getSumGender(props.data, "female");
  const Indeterminates = getSumGender(props.data, "indeterminate");
  const analyticGender = getMaxGender(males, females, Indeterminates);



  const nats = getStatisticNationalities(props.data);

  return (
    <div className="statistic mt-3 p-3 mb-3">
      <h5>Statistic:</h5>
      <div className="statistic-row d-flex justify-content-between mb-3">
        <div className="statistic-item">
          <p className="statistic-item-title">Collection size</p>
          <p className="statistic-item-content">{props.data.length}</p>
        </div>
        <div className="statistic-item">
          <p className="statistic-item-title">Males</p>
          <p className="statistic-item-content">{males}</p>
        </div>
        <div className="statistic-item">
          <p className="statistic-item-title">Females</p>
          <p className="statistic-item-content">{females}</p>
        </div>
        <div className="statistic-item">
          <p className="statistic-item-title">Indeterminate</p>
          <p className="statistic-item-content">{Indeterminates}</p>
        </div>
        <div className="statistic-item">
          <p className="statistic-item-title">Analytics</p>
          <p className="statistic-item-content">{analyticGender}</p>
        </div>
      </div>
      <div className="row">
        {nats.map(nat => {
          return (
            <div className="col-4 col-md-2 mb-2" key={Math.random()}>
              <span><strong>{nat.name}:</strong></span>
              <span>  {nat.quantity}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Statistic