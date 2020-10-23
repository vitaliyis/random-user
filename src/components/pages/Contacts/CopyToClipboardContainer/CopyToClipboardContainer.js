import React, {useState} from "react";
import {CopyToClipboard} from "react-copy-to-clipboard";

const CopyToClipboardContainer = props => {
  const {value} = props;

  const [copyValue, setCopyValue] = useState('');

  const onCopy = () => {
    setCopyValue('Copied');
    setTimeout(() => {
      setCopyValue('');
    }, 2000);
  }

  return (
    <CopyToClipboard onCopy={onCopy} text={value}>
      <button className={`btn ${copyValue ? "btn-outline-success" : "btn-outline-primary"} btn-sm btn-clipboard`}>{`${copyValue ? copyValue : "copy"}`}</button>
    </CopyToClipboard>
  )
}

export default CopyToClipboardContainer;