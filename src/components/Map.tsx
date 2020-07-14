import React, { useState } from 'react';
import ReactMapGL, { WebMercatorViewport } from 'react-map-gl';
import styled from 'styled-components';

import GetLocations from 'core/GetLocations';
import MapOverlay from './MapOverlay';
import Markers from './MapMarkers';


const Container = styled.div`
position: absolute;
`;

export default function() {
    let [viewport, setViewport] = useState({
        latitude: 32.8149783969858,
        longitude: -96.82250976562501,
        zoom: 16,
    });

    const maxMarkerNum = 100;

    const locations = GetLocations("Testing Locations");

    const mercatorViewport = new WebMercatorViewport(viewport);
    const bottomLeft = mercatorViewport.unproject([0, 0]);
    const topRight = mercatorViewport.unproject([mercatorViewport.width, mercatorViewport.height]);
    const leftX = bottomLeft[0];
    const rightX = topRight[0];
    const bottomY = topRight[1];
    const topY = bottomLeft[1];

    let filteredLocations = locations.filter(el => el[0] >= leftX && el[0] <= rightX && el[1] >= bottomY && el[1] <= topY);
    if (filteredLocations.length > maxMarkerNum) {
        filteredLocations = filteredLocations.splice(0, maxMarkerNum);
    }

    return (
        <Container>
            <ReactMapGL width="100vw" height="100vh" {...viewport}
             onViewportChange={viewport => setViewport(viewport)}>
                <Markers data={filteredLocations}/>
            </ReactMapGL>
        </Container>
    );
};
// <MapOverlay locations={coords}/>