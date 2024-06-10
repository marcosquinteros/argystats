import { useState, useEffect } from "react";
import { getDolares } from "../utils/api";
import { Skeleton } from "@/components/ui/skeleton";
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

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

      
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
            <p className="text-sm text-gray-500">
              Fecha de actualización: {d.fechaActualizacion}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dolares;
