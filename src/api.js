


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ece864edddmsh5dcae587fc1ab20p11d986jsn00085470bb28',
		'X-RapidAPI-Host': 'asos10.p.rapidapi.com'
	}
};

export const getProductData = async (productName) => {
  const url = `https://asos10.p.rapidapi.com/api/v1/getProductListBySearchTerm?searchTerm=${productName}&currency=USD&country=US&store=US&languageShort=en&sizeSchema=US&limit=50&offset=0`;

  let result; 

  try {
    const response = await fetch(url, options);
    result = await response.text();
    
  } catch (error) {
    console.error(error);
  }
  
  return JSON.parse(result);
}

