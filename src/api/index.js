import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);
    const modifienData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    return modifienData;
  } catch (error) {
    return error;
  }
};

export const fatchDailyData = async () => {
  try {
    const { data } = await axios.get(
      "https://api.covidtracking.com/v1/us/daily.json"
    );
    return data.map(({ positive, recovered, death, dateChecked: date }) => ({
      confirmed: positive,
      recovered,
      deaths: death,
      date,
    }));
  } catch (error) {
    return error;
  }
};
