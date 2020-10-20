import React from "react";

const CopyToClipboard = props => {

  const myFunction = () => {
    let copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");

    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
  }

  return (
    <div className="tooltip">
      <button
        onClick={() => myFunction()}
      >
        <span className="tooltiptext" id="myTooltip">Copy to clipboard</span>
        Copy text
      </button>
    </div>
  )
}

export default CopyToClipboard;