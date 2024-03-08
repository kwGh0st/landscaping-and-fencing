import React, { useEffect, useState } from "react";

const CompanyMap = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const [infoWindow, setInfoWindow] = useState(null);

  useEffect(() => {
    const loadMapScript = () => {
      if (window.google && window.google.maps) return;

      window.initMap = () => {
        const myLatLng = { lat: 53.22241233181528, lng: -0.601331137652337 };

        const map = new window.google.maps.Map(document.getElementById("map"), {
          zoom: 15,
          center: myLatLng,
        });

        const marker = new window.google.maps.Marker({
          position: myLatLng,
          map: map,
          title: "DW Landscaping & Fencing",
        });

        const contentString =
          '<div id="content">DW <br />Landscaping & Fencing <br />Woodfield Avenue LN6 0 Lincoln, United Kingdom </div>';
        const infowindow = new window.google.maps.InfoWindow({
          content: contentString,
        });

        marker.addListener("click", () => {
          if (infoWindow) {
            infoWindow.close();
          }
          infowindow.open(map, marker);
          setInfoWindow(infowindow);
        });
      };

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;

      document.head.appendChild(script);

      window.addEventListener("error", handleScriptError);

      function handleScriptError() {
        console.error("An error ocurred while loading google maps api");
        window.removeEventListener("error", handleScriptError);
      }

      return () => {
        document.head.removeChild(script);

        delete window.initMap;

        window.removeEventListener("error", handleScriptError);
      };
    };

    loadMapScript();
  }, [apiKey, infoWindow, location.pathname]);

  return <div id="map" className="min-h-96 w-full"></div>;
};

export default CompanyMap;
