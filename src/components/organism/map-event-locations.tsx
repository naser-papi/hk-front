import { useMemo } from "react";
import { useSnapshot } from "valtio/react";
import EventsState from "@/stores/events";
import MapView from "@/components/molecule/map-view";
import { NoData } from "@/components/molecule";

const MapEventLocations = () => {
    const { list, selectedLocationKey } = useSnapshot(EventsState);
    const locations = useMemo(
        () =>
            list
                ?.filter((item) => item.location?.lat || 0 > 0)
                .map((item) => ({
                    lat: item.location?.lat || 0,
                    lng: item.location?.lng || 0,
                    key: item.documentId,
                })),
        [list]
    );
    if (locations && locations.length > 0)
        return (
            <MapView
                locations={locations}
                selectedLocationKey={selectedLocationKey}
                onLocationClick={(location) =>
                    (EventsState.selectedLocationKey = location.key)
                }
            />
        );
    return <NoData />;
};

export default MapEventLocations;
