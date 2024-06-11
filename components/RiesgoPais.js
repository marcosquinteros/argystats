import { useState, useEffect } from "react";
import { getDolarBlue, getDolarOficial, getRiesgoPais } from "../utils/api";

const RiesgoPais = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getRiesgoPais();
      setData(response);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-center flex flex-col items-center border border-gray-300 p-4 rounded-lg">
      <h2>Riesgo Pais</h2>
      <div className="flex gap-10">
        <div>
          <h2 className="font-bold text-3xl">{data.ultimo}</h2>
          <p className={data.variacion < 0 ? "text-red-500 font-bold" : "text-green-500 font-bold"}>
          {data.variacion < 0 ? "-" : "+"}
            {data.variacion}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RiesgoPais;
