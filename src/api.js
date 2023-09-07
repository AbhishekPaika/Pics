import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 9m3pMMxVw2390tsjm8nZtOk8_rordsRGDau1EZTZL1M",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
