import axios from "axios";

export const getPlacesData = async (type, sw, ne) => { 
    try {
        const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': '31daef50d8msh8f18cf641c87e00p192609jsnf73883531a16',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });
        return data;
    } catch (error) {
        console.log(error);
    }
 }