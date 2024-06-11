import { useState, useEffect } from "react";
import { getDolarBlue, getReservas } from "../utils/api";

const DataBcra = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getReservas();
      
      setData(response);
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-center border border-gray-300 p-4 rounded-lg">
      <h2>Reservas</h2>
      {data}
    </div>
  );
};

export default DataBcra;
