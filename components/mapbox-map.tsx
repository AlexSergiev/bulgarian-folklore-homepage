"use client";

import { useRef } from "react";
import Map, { Marker, NavigationControl, FullscreenControl } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

const LONGITUDE = 23.36343579345595;
const LATITUDE  = 42.67321106050847;

export function MapboxMap() {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  if (!token || token === "YOUR_MAPBOX_TOKEN_HERE") {
    return (
      <div className="w-full h-[400px] bg-secondary flex items-center justify-center rounded-sm">
        <p className="text-muted-foreground text-sm">
          Добавете вашия Mapbox токен в <code className="text-primary">.env.local</code>
        </p>
      </div>
    );
  }

  return (
    <Map
      mapboxAccessToken={token}
      initialViewState={{
        longitude: LONGITUDE,
        latitude: LATITUDE,
        zoom: 15,
      }}
      style={{ width: "100%", height: 400 }}
      mapStyle="mapbox://styles/mapbox/light-v11"
    >
      <NavigationControl position="top-right" />
      <FullscreenControl position="top-right" />

      <Marker longitude={LONGITUDE} latitude={LATITUDE} anchor="bottom">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-primary rounded-full border-[3px] border-white shadow-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>
          </div>
          <div className="w-2 h-2 bg-primary rounded-full mt-1 shadow" />
        </div>
      </Marker>
    </Map>
  );
}
