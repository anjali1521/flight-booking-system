const axios = require('axios');

// Amadeus API
async function fetchAmadeusFlights({ origin, destination, date }) {
  const auth = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', 
    `grant_type=client_credentials&client_id=${process.env.AMADEUS_API_KEY}&client_secret=${process.env.AMADEUS_API_SECRET}`
  );
  
  const response = await axios.get('https://test.api.amadeus.com/v2/shopping/flight-offers', {
    params: { originLocationCode: origin, destinationLocationCode: destination, departureDate: date },
    headers: { Authorization: `Bearer ${auth.data.access_token}` },
  });

  return response.data.data;
}

// Skyscanner API (via RapidAPI)
async function fetchSkyscannerFlights({ origin, destination, date }) {
  const response = await axios.get('https://skyscanner-api.p.rapidapi.com/v3/flights/live/search', {
    params: { fromId: `${origin}-sky`, toId: `${destination}-sky`, departDate: date },
    headers: { 'X-RapidAPI-Key': process.env.SKYSCANNER_API_KEY },
  });
  return response.data.itineraries;
}

module.exports = {
  fetchFlights: process.env.USE_AMADEUS ? fetchAmadeusFlights : fetchSkyscannerFlights,
};