import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Card from "../ui/Card";
import styles from "./CustomerPoints.module.css";
import { mapbox_key } from "../MAPBOX_KEY";
import mapboxgl from "!mapbox-gl"; /* eslint import/no-webpack-loader-syntax: off */

mapboxgl.accessToken = mapbox_key;

async function getAddress(latitude, longitude) {

  const res = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxgl.accessToken}`);

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Something wnt wrong");
  }

  return data.features[0].text;
}

function DriverCustomers(props) {

  return (
    <div className="container mt-4">
      <h4>Passengers</h4>
      {
        props.items.length > 0 && props.items.map(item => {
          
          return <Card
            key={item.id}
            cardBodyClass={"bg-primary text-light rounded-3 mb-2"}
            body={
              <Link className={styles.a_redeem} to="/driver-dashboard/1">
                <h6><b>{item.name}</b></h6>
                <small>From: <b>{item.current_address}</b></small> <br />
                <small>To: <b>{item.to_address}</b></small> <br />
                <small>Fare: <b>{item.amount}</b></small> <br />
                <small>Date/Time: <b>{item.created_at}</b></small> <br />
              </Link>
            }
          />
        })
      }

    </div>
  );
}

export default DriverCustomers