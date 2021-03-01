import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";

import { fatchDailyData } from "../../api/";

import styles from "./Chart.module.css";
export default function Chart() {
  const [dailyData, setDailyData] = useState({});
  useEffect(() => {
    const fetcMyIPI = async () => {
      const initialDailyData = await fatchDailyData();
      setDailyData(initialDailyData);
    };
    fetcMyIPI();
  }, []);

  return <div className={styles.container}>Chart</div>;
}
