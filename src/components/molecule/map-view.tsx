"use client";
import { useCallback } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

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

// Using default Google Maps markers; removed Font Awesome based custom marker.

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
