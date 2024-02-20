
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ece864edddmsh5dcae587fc1ab20p11d986jsn00085470bb28',
		'X-RapidAPI-Host': 'asos-data-feed.p.rapidapi.com'
	}
};

export const getItemData = async (searchItem) => {
  const url = `https://asos-data-feed.p.rapidapi.com/search?q=${searchItem}&country=US&brand=nike`;
  
  let result; 

  try {
    const response = await fetch(url, options);
    result = await response.text();
    
  } catch (error) {
    console.error(error);
  }
  
  return JSON.parse(result);
}
