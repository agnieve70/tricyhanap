import React, { useEffect, useState, useRef } from "react";
import { mapbox_key } from "../MAPBOX_KEY";
import mapboxgl from "!mapbox-gl"; /* eslint import/no-webpack-loader-syntax: off */
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import CustomerSidebar from "../components/CustomerSidebar";
import CustomerNavbar from "../components/CustomerNavbar";

const auth_token = localStorage.getItem("auth_token");

mapboxgl.accessToken = mapbox_key;
const MySwal = withReactContent(Swal);
const Toast = MySwal.mixin({
  toast: true,
  position: "center",
  showConfirmButton: false,
  timer: 10000,
  timerProgressBar: true,
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

async function getAddress(latitude, longitude) {

  const res = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxgl.accessToken}`);

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Something wnt wrong");
  }
  console.log("RESULT CONVERT ADDRESS: ", data);
  return data.features[0].text;
}

async function addRequest(current_latitude, current_longitude,
  to_latitude, to_longitude, from_address, to_address, status, amount) {

  const res = await fetch('https://tricyhanap-backend.herokuapp.com/api/request-pickup/create', {
      method: 'POST',
      body: JSON.stringify({
        current_latitude : current_latitude,
        current_longitude: current_longitude,
        to_latitude : to_latitude,
        to_longitude: to_longitude,
        from_address: from_address,
        to_address: to_address,
        status: status,
        amount: amount
      }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${auth_token}`
    },
  });

  const data = await res.json();
  if (!res.ok) {
      throw new Error(data.message || "Something wnt wrong");
  }

  return data;
}


function CustomerDashboardPage() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(125.35722);
  const [lat, setLat] = useState(6.74972);
  const [zoom, setZoom] = useState(14);
  const [showTextArea, setShowTextArea]  =useState(false);
  const [fare, setFare]  =useState(20.00);
  const [clicked, setClicked]  =useState(false);
  const [count, setCount] = useState(1);


  const [steps, setStep] = useState();
  const [duration, setDuration] = useState();
  const [status, setStatus] = useState();
  const [currentAddress, setCurrentAddress] = useState();
  const [toAddress, setToAddress] = useState();
  const [coord, setCoord] = useState([]);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: myLocation ? myLocation : [125.6089, 7.0712],
      zoom: zoom,
    });

    const start = myLocation ? myLocation : [125.6089, 7.0712];

    // create a function to make a directions request
    async function getRoute(end) {
      const query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
        { method: "GET" }
      );
      const json = await query.json();
      const data = json.routes[0];

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
    getAddress(myLocation[1], myLocation[0]).then((result) => {
      setCurrentAddress(result);
    });

    map.current.on("load", () => {
      getRoute(start);

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

    map.current.on("click", (event) => {
      setClicked(true);
      const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);
      setCoord(coords);
      console.log("COORDS", coords);
      getAddress(coords[1], coords[0]).then((result) => {
        setToAddress(result);
      });
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
        map.current.getSource("end").setData(end);
      } else {
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
      getRoute(coords);
    });
  }, [steps]);

  const handleFindVehicle = () => {
    addRequest(myLocation[1], myLocation[0], coord[1], coord[0], currentAddress, toAddress, 'waiting', 20 ).then((result) => {
      Toast.fire({
        icon: "question",
        title: "Finding Tricy",
        showCancelButton: true,
      }).then((data)=> {
       if(count === 2){
  
        setStatus('Waiting');
       }else{
        setStatus('No Tricycle has picked up your request.');
        setCount(count + 1);
       }
      })
    });

    
  };

  const handleReportDriver = () => {
    setShowTextArea(true);
  }

  const handleCancelReport =()=>{
    setShowTextArea(false);
  }

  const handleSaveReport = () => {
    Toast.fire({
      icon: "success",
      title: "Send Report",
    });
  }

  return (
    <div className="mb-3">
      <CustomerNavbar />
      <CustomerSidebar />
      <div>
        <div ref={mapContainer} className="map-container" />
        <div className="container mt-3">
          {clicked && <h4>Fare: Php. {fare}</h4>}
          <h4>My Location: {currentAddress}</h4>
          <h4>Destination: {toAddress}</h4>
          <h4>Trip duration: {duration} min ????</h4>
          {status && <h4>Status: <span className="text-muted">{status}</span></h4>}
          {/* <h4>Status: <span className="badge bg-warning">Waiting</span></h4> */}
          <div className="d-grid gap-2">
            <button
              onClick={() => handleFindVehicle()}
              className="btn btn-primary"
            >
              Get Tricy <i className="fa fa-search"></i>
            </button>
            {showTextArea && <>
              <textarea className="form-control" placeholder="Please describe what happend..." rows={5}></textarea>
              <button
              onClick={() => handleSaveReport()}
              className="btn btn-danger"
            >
              Send Report <i className="fa fa-information"></i>
            </button>
            <button
              onClick={() => handleCancelReport()}
              className="btn btn-secondary mb-2"
            >
              Cancel
            </button></>}
            
            {!showTextArea &&<button
              onClick={() => handleReportDriver()}
              className="btn btn-danger mb-2"
            >
              Report Driver <i className="fa fa-information"></i>
            </button>}
          </div>
          <ul className="list-group">
            {steps
              ? steps.map((step, indx) => (
                  <li className="list-group-item" key={indx + 1}>
                    {step.maneuver.instruction}
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboardPage;
