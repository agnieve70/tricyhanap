import React from 'react'

function Card(props) {
  return (
    <div className={props.cardBodyClass}>
      <div className="card-body">{props.body}</div>
    </div>
  );
}

export default Card