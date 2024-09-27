import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function MapaInteractivo() {
    const [mapLoaded, setMapLoaded] = useState(false);

    const mapContainer = {
        width: "100%",
        height: "350px"
    };

    const center = {
        lat: 39.47201,
        lng: -0.37217
    };

    return (
        <LoadScript
            googleMapsApiKey='AIzaSyDMW4ayzfYbAvpIwF4LG-kbny9Ccsh4OtI'
            onLoad={() => setMapLoaded(true)}  // Se activa cuando la API está cargada
            onError={() => console.error('Error al cargar la API de Google Maps')} // Maneja errores
        >
            {mapLoaded ? (
                <GoogleMap
                    mapContainerStyle={mapContainer}
                    center={center}
                    zoom={15}
                >
                    <Marker position={center} />
                </GoogleMap>
            ) : (
                <div>Cargando mapa...</div> // Mensaje de carga
            )}
        </LoadScript>
    );
}

export default MapaInteractivo;