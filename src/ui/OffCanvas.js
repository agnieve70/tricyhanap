import React from 'react'

function OffCanvas(props) {
  return (
    <div
      className="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header">
        {props.header}
      </div>
      <div className="offcanvas-body">
        {props.body}
      </div>
    </div>
  );
}

export default OffCanvas