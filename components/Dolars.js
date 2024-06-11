import React, { useState, useEffect } from "react";
import { getDolares } from "../utils/api";
import Slider from "react-slick";

const Dolares = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDolares();
      setData(response);
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  // Configuración de react-slick
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // Velocidad de desplazamiento
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // No esperes entre deslizamientos
    cssEase: "linear", // Efecto de transición lineal para un deslizamiento continuo
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto py-8">
      <Slider {...settings}>
        {data.map((d, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex gap-1 items-center">
              <h2 className="text-lg font-bold mb-2">{d.moneda}</h2>
              <p className="mb-2">{d.nombre}</p>
            </div>
            <div className="flex gap-4 items-center justify-center">
              <div>
                <p className="mb-2">Compra</p>
                <p className="font-bold text-2xl">${d.compra}</p>
              </div>
              <div>
                <p className="mb-2">Venta</p>
                <p className="font-bold text-2xl">${d.venta}</p>
              </div>
            </div>
            {/* <p className="text-sm text-gray-500">
              Fecha de actualización: {d.fechaActualizacion}
            </p> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Dolares;
