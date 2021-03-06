import React, { useState, useEffect } from "react";
import { Cards, CountryPicker, Chart } from "./components/indexExport";
import { fetchData } from "../src/api/index";
import styles from "./App.module.css";
import image from "./image/image.png";

export default function App() {
  const initiaState = {
    data: {},
  };
  const [state, setState] = useState(initiaState);
  useEffect(() => {
    fetchData().then((res) => {
      const response = res;
      console.log(response);
      setState({ data: response });
    });
  }, []);

  const { data } = state;
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker />
      <Chart data={data} />
    </div>
  );
}
