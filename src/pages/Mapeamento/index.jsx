import { GoogleMap, Polygon, useJsApiLoader } from "@react-google-maps/api";
import React from "react";
import casa from "./assets/casa-alagada.png";
import chuva from "./assets/chuva.png";
import sol from "./assets/sun.png";

const Mapeamento = () => {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyBdBKeZ6szYHY0wLkgitDMpxIUn8aLccK4",
    });

    const neighborhood = [
        {
            name: "São Miguel",

            polygonCoordinates: [
                { lat: -23.4905, lng: -46.4463 }, // Topo Esquerda
                { lat: -23.4905, lng: -46.4289 }, // Topo Direita
                { lat: -23.5, lng: -46.4289 }, // Baixo Direita
                { lat: -23.5, lng: -46.4463 }, // Baixo Esquerda
            ],

            center: { lat: -23.49525, lng: -46.4376 },
        },

        {
            name: "Osasco",

            polygonCoordinates: [
                { lat: -23.473, lng: -46.8828 }, // Topo Esquerda
                { lat: -23.473, lng: -46.7027 }, // Topo Direita
                { lat: -23.5838, lng: -46.7027 }, // Baixo Direita
                { lat: -23.5838, lng: -46.8828 }, // Baixo Esquerda
            ],

            center: { lat: -23.5284, lng: -46.7925 },
        },

        {
            name: "Campinas",

            polygonCoordinates: [
                { lat: -22.8919, lng: -47.0798 }, // Topo Esquerda
                { lat: -22.8919, lng: -47.0348 }, // Topo Direita
                { lat: -22.9197, lng: -47.0348 }, // Baixo Direita
                { lat: -22.9197, lng: -47.0798 }, // Baixo Esquerda
            ],

            center: { lat: -22.9058, lng: -47.0573 },
        },
        {
            name: "São José dos Campos",

            polygonCoordinates: [
                { lat: -23.1765, lng: -45.9058 }, // Topo Esquerda
                { lat: -22.8919, lng: -45.8665 }, // Topo Direita
                { lat: -23.1975, lng: -45.8665 }, // Baixo Direita
                { lat: -23.1975, lng: -45.9058 }, // Baixo Esquerda
            ],

            center: { lat: -23.087, lng: -45.8862 },
        },
        {
            name: "Guarujá",

            polygonCoordinates: [
                { lat: -23.1968, lng: -45.9017 }, // Topo Esquerda
                { lat: -23.1968, lng: -45.8919 }, // Topo Direita
                { lat: -23.202, lng: -45.8919 }, // Baixo Direita
                { lat: -23.202, lng: -45.9017 }, // Baixo Esquerda
            ],

            center: { lat: -23.1994, lng: -45.8968 },
        },
        {
            name: "São Bernardo do Campo",

            polygonCoordinates: [
                { lat: -23.6827, lng: -46.5899 }, // Topo Esquerda
                { lat: -23.6827, lng: -46.4587 }, // Topo Direita
                { lat: -23.7522, lng: -46.4587 }, // Baixo Direita
                { lat: -23.7522, lng: -46.5899 }, // Baixo Esquerda
            ],

            center: { lat: -23.7175, lng: -46.5243 },
        },
        {
            name: "São Caetano do Sul",

            polygonCoordinates: [
                { lat: -23.6167, lng: -46.5726 }, // Topo Esquerda
                { lat: -23.6167, lng: -46.553 }, // Topo Direita
                { lat: -23.6271, lng: -46.553 }, // Baixo Direita
                { lat: -23.6271, lng: -46.5726 }, // Baixo Esquerda
            ],

            center: { lat: -23.6219, lng: -46.5628 },
        },
        {
            name: "Santo André",

            polygonCoordinates: [
                { lat: -23.6167, lng: -46.5726 }, // Topo Esquerda
                { lat: -23.6167, lng: -46.553 }, // Topo Direita
                { lat: -23.6271, lng: -46.553 }, // Baixo Direita
                { lat: -23.6271, lng: -46.5726 }, // Baixo Esquerda
            ],

            center: { lat: -23.6219, lng: -46.5628 },
        },
        {
            name: "Ribeirão Preto",

            polygonCoordinates: [
                { lat: -21.1072, lng: -47.9435 }, // Topo Esquerda
                { lat: -21.1072, lng: -47.681 }, // Topo Direita
                { lat: -21.2487, lng: -47.681 }, // Baixo Direita
                { lat: -21.2487, lng: -47.9435 }, // Baixo Esquerda
            ],

            center: { lat: -21.177, lng: -47.8122 },
        },

        {
            name: "Jundiaí",

            polygonCoordinates: [
                { lat: -21.13612, lng: -47.7729 }, // Topo Esquerda
                { lat: -21.13612, lng: -47.7565 }, // Topo Direita
                { lat: -21.14496, lng: -47.7565 }, // Baixo Direita
                { lat: -21.14496, lng: -47.7729 }, // Baixo Esquerda
            ],

            center: { lat: -21.14054, lng: -47.7647 },
        },

        {
            name: "Mauá",

            polygonCoordinates: [
                { lat: -23.6538, lng: -46.4816 }, // Topo Esquerda
                { lat: -23.6538, lng: -46.4159 }, // Topo Direita
                { lat: -23.6886, lng: -46.4159 }, // Baixo Direita
                { lat: -23.6886, lng: -46.4816 }, // Baixo Esquerda
            ],

            center: { lat: -21.14054, lng: -47.7647 },
        },

        {
            name: "Franco da Rocha",

            polygonCoordinates: [
                { lat: -23.3225, lng: -46.7374 }, // Topo Esquerda
                { lat: -23.3225, lng: -46.7046 }, // Topo Direita
                { lat: -23.3399, lng: -46.7046 }, // Baixo Direita
                { lat: -23.3399, lng: -46.7374 }, // Baixo Esquerda
            ],

            center: { lat: -21.14054, lng: -47.7647 },
        },
    ];

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-corSecudanria">
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{ width: "100%", height: "50%" }}
                    center={neighborhood[1].center}
                    zoom={15}
                >
                   <Polygon
                        paths={neighborhood[1].polygonCoordinates}
                        options={{
                            fillColor: "red",
                            fillOpacity: 0.4,
                            strokeColor: "red",
                            strokeOpacity: 0.8,
                            strokeWeight: 2,
                        }}
                    />
                </GoogleMap>
            ) : (
                <></>
            )}

            <div className="flex w-11/12 h-2/4 justify-center items-center gap-20 cursor-pointer">
                <div className="w-1/6 h-96 bg-corPrincipal flex flex-col justify-around items-center">
                    <h3 className="text-xl w-4/5 text-center font-bold text-white">
                        Probabilidade de alagamento
                    </h3>
                    <img src={casa} alt="" />
                    <h4 className="font-bold text-white text-3xl">96%</h4>
                </div>
                <div className="w-1/6 h-96 bg-corPrincipal flex flex-col justify-around items-center cursor-pointer">
                    <h3 className="text-xl w-4/5 text-center font-bold text-white">
                        Probabilidade de chuva
                    </h3>
                    <img src={casa} alt="" />
                    <h4 className="font-bold text-white text-3xl">78%</h4>
                </div>
                <div className="w-1/6 h-96 bg-corPrincipal flex flex-col justify-around items-center cursor-pointer">
                    <h3 className="text-xl w-4/5 text-center font-bold text-white">
                        Probabilidade de calor excessivo
                    </h3>
                    <img src={casa} alt="" />
                    <h4 className="font-bold text-white text-3xl">18%</h4>
                </div>
            </div>
            
        </div>
    );
};

export default Mapeamento;
