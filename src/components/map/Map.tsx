import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

type PropsType = {
  autos: any;
};

const Map = (props: PropsType) => {
  const getGeoInObj = (lat: number, lng: number) => {
    return {
      lat: lat,
      lng: lng,
    };
  };
  console.log(props.autos);

  return (
    <>
      {props.autos && props.autos[0] && (
        <MapContainer
          center={getGeoInObj(
            props.autos[1].latitude,
            props.autos[1].longitude,
          )}
          zoom={13}
          zoomControl={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {props.autos.map((auto: any) => (
            <Marker
              key={auto.id}
              position={getGeoInObj(auto.latitude, auto.longitude)}
            >
              <Tooltip>
                <p>
                  {auto.name} {auto.model}
                </p>
                <p>Год выпуска: {auto.year}</p>
                <p>Цена: {auto.price}</p>
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
      )}
    </>
  );
};

export default Map;
