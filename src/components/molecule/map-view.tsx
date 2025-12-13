"use client";
import { useCallback, useMemo } from "react";
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
    
    const center = useMemo(() => {
        return selectedLocationKey
            ? locations.find((l) => l.key == selectedLocationKey)
            : locations[0];
    }, [selectedLocationKey, locations]);

    const mapCenter = useMemo(() => ({
        lat: center?.lat || 52.379189,
        lng: center?.lng || 4.899431,
    }), [center]);

    return (
        <LoadScript
            googleMapsApiKey={"AIzaSyDVzyNeH_1RC_3Q-S9bhgHUwFxDc7hIFy4"}
            loadingElement={<div className="h-[500px] w-full animate-pulse bg-neutral-200" />}
        >
            <GoogleMap
                mapContainerStyle={{ width: "100%", height: "500px" }}
                center={mapCenter}
                zoom={13}
                options={{
                    // Performance optimizations
                    disableDefaultUI: false,
                    zoomControl: true,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: true,
                }}
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
