import React, { useEffect, useState, useRef } from "react";
import { mapbox_key } from "../MAPBOX_KEY";
import mapboxgl from "!mapbox-gl"; /* eslint import/no-webpack-loader-syntax: off */
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import CustomerSidebar from "../components/CustomerSidebar";
import CustomerNavbar from "../components/CustomerNavbar";

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

function CustomerDashboardPage() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(125.35722);
  const [lat, setLat] = useState(6.74972);
  const [zoom, setZoom] = useState(14);
  const [showTextArea, setShowTextArea]  =useState(false);
  const [fare, setFare]  =useState(20.00);
  const [clicked, setClicked]  =useState(false);

  const [steps, setStep] = useState();
  const [duration, setDuration] = useState();

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
    Toast.fire({
      icon: "question",
      title: "Finding Vehicle",
      showCancelButton: true,
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
    <>
      <CustomerNavbar />
      <CustomerSidebar />
      <div>
        <div ref={mapContainer} className="map-container" />
        <div className="container mt-3">
          {clicked && <h4>Fare: Php. {fare}</h4>}
          <h4>Trip duration: {duration} min 🚴</h4>
          <div class="d-grid gap-2">
            <button
              onClick={() => handleFindVehicle()}
              className="btn btn-primary"
            >
              Get Vehicle <i className="fa fa-search"></i>
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
          <ul class="list-group">
            {steps
              ? steps.map((step, indx) => (
                  <li class="list-group-item" key={indx + 1}>
                    {step.maneuver.instruction}
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CustomerDashboardPage;
