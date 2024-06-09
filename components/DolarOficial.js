import { useState, useEffect } from "react";
import { getDolarOficial } from "../utils/api";

const DolarOficial = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDolarOficial();
      setData(response);
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="text-center border border-gray-300 p-4 rounded-lg">
      <h2>Dólar Oficial</h2>
      <div className="flex gap-10">
        <div>
          <p>Compra</p>
          <h1 className="font-bold text-3xl">${data.compra}</h1>
        </div>
        <div>
          <p>Venta</p>
          <h1 className="font-bold text-3xl">${data.venta}</h1>
        </div>
      </div>
    </div>
  );
};

export default DolarOficial;
