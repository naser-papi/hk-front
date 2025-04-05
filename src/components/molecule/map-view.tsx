"use client";
import { useCallback } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { faLocationCheck } from "@awesome.me/kit-026a927a83/icons/classic/regular";

interface Location {
    key: string;
    lat: number;
    lng: number;
}

interface MapViewProps {
    locations: Location[];
    onLocationClick?: (location: Location) => void;
    selectedLocationKey?: string;
}

const fontAwesomeIcon = {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="red">
              <path d="${faLocationCheck.icon[4]}" />
            </svg>
        `)}`,
    scaledSize: { width: 40, height: 40 }, // Render size adjustments
};

const MapView = ({
    selectedLocationKey,
    locations,
    onLocationClick,
}: MapViewProps) => {
    const handleMarkerClick = useCallback(
        (location: Location) => {
            onLocationClick && onLocationClick(location);
        },
        [onLocationClick]
    );
    const center = selectedLocationKey
        ? locations.find((l) => l.key == selectedLocationKey)
        : locations[0];

    return (
        <LoadScript
            googleMapsApiKey={"AIzaSyDVzyNeH_1RC_3Q-S9bhgHUwFxDc7hIFy4"}
        >
            <GoogleMap
                mapContainerStyle={{ width: "100%", height: "500px" }} // Adjust dimensions as needed
                center={{
                    lat: center?.lat || 52.379189,
                    lng: center?.lng || 4.899431,
                }} // Center on the first location or default coords
                zoom={13} // Adjust zoom level as needed
            >
                {locations.map((location) => (
                    <Marker
                        key={location.key}
                        position={{ lat: location.lat, lng: location.lng }}
                        onClick={() => handleMarkerClick(location)}
                        label={
                            selectedLocationKey == location.key
                                ? "@"
                                : undefined
                        }
                    />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapView;
