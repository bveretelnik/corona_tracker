import React, { useState, useEffect } from "react";
import { Cards, CountryPicker, Chart } from "./components/indexExport";
import { fetchData } from "../src/api/index";
import styles from "./App.module.css";

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
      <Cards data={data} />
      <CountryPicker />
      <Chart />
    </div>
  );
}
