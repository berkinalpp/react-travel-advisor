import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: {data},
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key":
            "4e6f74a51emsh9d4417b8bff8833p154bf7jsne8d13e60f22d",
        },
      }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
