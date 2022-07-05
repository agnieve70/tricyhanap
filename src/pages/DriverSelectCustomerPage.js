import React, { useEffect, useState, useRef } from "react";
import { mapbox_key } from "../MAPBOX_KEY";
import mapboxgl from "!mapbox-gl"; /* eslint import/no-webpack-loader-syntax: off */
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import DriverSidebar from "../components/DriverSidebar";
import DriverNavbar from "../components/DriverNavbar";
import { useParams } from "react-router-dom";

mapboxgl.accessToken = mapbox_key;
const MySwal = withReactContent(Swal);
const Toast = MySwal.mixin({
  toast: true,
  position: "center",
  showConfirmButton: false,
  timer: 10000,
  timerProgressBar: true,
  showCancelButton: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(showPosition);
} else {
  alert("Geolocation is not supported by this browser.");
}

let myLocation;

function showPosition(position) {
  myLocation = [position.coords.longitude, position.coords.latitude];
}

function DriverSelectCustomerPage() {
  let { id } = useParams();
  console.log("CUSTOMER ID: ", id);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(125.35722);
  const [lat, setLat] = useState(6.74972);
  const [zoom, setZoom] = useState(14);
  const [customerStatus, setCustomerStatus] = useState("get");

  const [steps, setStep] = useState();
  const [duration, setDuration] = useState();
  const [reportCustomer, setReportCustomer] = useState(false);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: myLocation ? myLocation : [125.6089, 7.0712],
      zoom: zoom,
    });

    const start = myLocation ? myLocation : [125.6089, 7.0712];
    const endPoint = [125.609552, 7.068234];

    // create a function to make a directions request
    async function getRoute(start, end) {
      const query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
        { method: "GET" }
      );
      const json = await query.json();
      const data = json.routes[0];

      console.log("API RESPONSE: ", json);
      console.log("API PASSED TO DATA: ", data);

      setStep(data.legs[0].steps);
      setDuration(Math.floor(data.duration / 60));

      const route = data.geometry.coordinates;
      const geojson = {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: route,
        },
      };
      // if the route already exists on the map, we'll reset it using setData
      if (map.current.getSource("route")) {
        map.current.getSource("route").setData(geojson);
      }
      // otherwise, we'll make a new request
      else {
        map.current.addLayer({
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: geojson,
          },
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#3887be",
            "line-width": 5,
            "line-opacity": 0.75,
          },
        });
      }
      // add turn instructions here at the end
    }

    map.current.on("load", () => {
      getRoute(start, endPoint);

      // Add starting point to the map
      map.current.addLayer({
        id: "point",
        type: "circle",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: start,
                },
              },
            ],
          },
        },
        paint: {
          "circle-radius": 10,
          "circle-color": "#3887be",
        },
      });
      // this is where the code from the next step will go
    });

    map.current.on("load", () => {
      const coords = endPoint;
      console.log("COORDS", coords);
      const end = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: coords,
            },
          },
        ],
      };
      if (map.current.getLayer("end")) {
          console.log('Wala na end na tlga');
        map.current.getSource("end").setData(end);
      } else {
          console.log("Create end");

        map.current.addLayer({
          id: "end",
          type: "circle",
          source: {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  properties: {},
                  geometry: {
                    type: "Point",
                    coordinates: coords,
                  },
                },
              ],
            },
          },
          paint: {
            "circle-radius": 10,
            "circle-color": "#f30",
          },
        });
      }
    //   getRoute(coords);
    });
  }, [steps]);

  const handleGetCustomer = () => {
    Toast.fire({
      icon: "info",
      title: "Customer is waiting . . .",
    }).then(()=> {
      setCustomerStatus('driving');
    })
  };

  const handleArriveDestination = () => {
    Toast.fire({
      icon: "success",
      title: "Customer Successfully Escorted",
    }).then(() => {
      setCustomerStatus("drove");
    });
  }

  const handleReport = () => {
    reportCustomer === false ? setReportCustomer(true) : setReportCustomer(false);
  }

  return (
    <>
      <DriverNavbar />
      <DriverSidebar />
      <div>
        <div ref={mapContainer} className="map-container" />
        <div className="container mt-3">
          <h4>Trip duration: {duration} min 🚴</h4>
          <div class="d-grid gap-2 mb-2">
            {customerStatus == "driving" ? (
              <button
                onClick={() => handleArriveDestination()}
                className="btn btn-success"
              >
                Arrived at Destination
              </button>
            ) : customerStatus == "get" ? (
              <button
                onClick={() => handleGetCustomer()}
                className="btn btn-primary"
              >
                Get Customer
              </button>
            ) : (
              <button
                onClick={() => handleArriveDestination()}
                className="btn btn-success"
                disabled
              >
                Transaction Done
              </button>
            )}
            <button
              onClick={() => handleReport()}
              className="btn btn-outline-danger mb-2"
            >
              Report Customer
            </button>
          </div>
          {
            reportCustomer == false ?
            <ul class="list-group">
            {steps
              ? steps.map((step, indx) => (
                  <li class="list-group-item" key={indx + 1}>
                    {step.maneuver.instruction}
                  </li>
                ))
              : null}
          </ul>:<>
          <h4>Report Customer</h4>
          <small className="text-muted">Please specify the event or reason you are reporting the customer</small>
          <form className="mb-3">
            <div className="form-group mb-2">
              <label for="reason">Reason</label>
              <textarea className="form-control" rows={5}></textarea>
            </div>
            <button type="submit" className="btn btn-danger">Send Report</button>
          </form>
          </>
          }
        </div>
      </div>
    </>
  );
}

export default DriverSelectCustomerPage;
