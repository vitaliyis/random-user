import React, {Fragment} from 'react'
import {SORT_ASC, SORT_DESC} from "../../../../../constans/constans";

const ArrowMark = props => {
  const {sortCondition} = props;
  return (
    <Fragment>
      {(sortCondition === SORT_ASC) ? <b>&uarr;</b> : null}
      {(sortCondition === SORT_DESC) ? <b>&darr;</b> : null}
    </Fragment>

  )
}

export default ArrowMark;