import React, { useEffect } from "react";
import { Cards, CountryPicker, Chart } from "./components/indexExport";
import { fetchData } from "../src/api/index";
export default function App() {
  useEffect(() => {
    fetchData().then((res) => {
      const response = res.data;
      console.log(response);
    });
  }, []);

  return (
    <div>
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
}
