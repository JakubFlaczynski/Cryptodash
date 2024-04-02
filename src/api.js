export const fetchCoinData = async () => {
  try {
    const response = await fetch("https://api.coincap.io/v2/assets");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return [];
  }
};
