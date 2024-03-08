import React, { useEffect, useState } from "react";

const CompanyMap = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const [infoWindow, setInfoWindow] = useState(null);

  useEffect(() => {
    const loadMapScript = () => {
      // Jeśli skrypt jest już załadowany, zakończ funkcję
      if (window.google && window.google.maps) return;

      // Funkcja inicjalizująca mapę
      window.initMap = () => {
        // Wstaw tutaj współrzędne geograficzne Twojej firmy
        const myLatLng = { lat: 53.22241233181528, lng: -0.601331137652337 };

        // Utwórz mapę Google
        const map = new window.google.maps.Map(document.getElementById("map"), {
          zoom: 15,
          center: myLatLng,
        });

        // Użyj AdvancedMarkerElement zamiast google.maps.Marker
        const marker = new window.google.maps.Marker({
          position: myLatLng,
          map: map,
          title: "DW Landscaping & Fencing",
        });

        // Utwórz infowindow z treścią informacji
        const contentString =
          '<div id="content">Landscaping & Fencing <br /> Woodfield Avenue LN6 0 Lincoln, United Kingdom </div>';
        const infowindow = new window.google.maps.InfoWindow({
          content: contentString,
        });

        // Dodaj obsługę kliknięcia na marker
        marker.addListener("click", () => {
          if (infoWindow) {
            infoWindow.close();
          }
          infowindow.open(map, marker);
          setInfoWindow(infowindow);
        });
      };

      // Załaduj skrypt Google Maps API
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;

      // Dodaj skrypt do strony
      document.head.appendChild(script);

      // Obsłuż wielokrotne ładowanie API
      window.addEventListener("error", handleScriptError);

      function handleScriptError() {
        console.error(
          "Wystąpił błąd podczas ładowania skryptu Google Maps API."
        );
        window.removeEventListener("error", handleScriptError);
      }

      return () => {
        // Oczyść skrypt po odmontowaniu komponentu
        document.head.removeChild(script);
        // Remove the global initMap function
        delete window.initMap;
        // Usuń event listener obsługujący błąd ładowania skryptu
        window.removeEventListener("error", handleScriptError);
      };
    };

    loadMapScript();
  }, [apiKey, infoWindow]);

  return <div id="map" className="min-h-96 w-full"></div>;
};

export default CompanyMap;
