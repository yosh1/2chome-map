import GoogleMapReact from "google-map-react";
import { LatLng } from "src/types/LatLng";

export default function Home() {
    const defaultLatLng: LatLng = {
      lat: 35.7022589,
      lng: 139.7744733,
    };

  return (
      <div style={{ height: "100vh", width: "100vw" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY }}
          defaultCenter={defaultLatLng}
          defaultZoom={16}
        />
      </div>
  );
}
