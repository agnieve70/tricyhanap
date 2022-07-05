import React from 'react'

function Card(props) {
  return (
    <div class={props.cardBodyClass}>
      <div class="card-body">{props.body}</div>
    </div>
  );
}

export default Card