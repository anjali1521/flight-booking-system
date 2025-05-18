const { fetchFlights } = require('../services/flightService');

exports.searchFlights = async (req, res) => {
  try {
    const { origin, destination, date, sortBy = 'price' } = req.query;
    const flights = await fetchFlights({ origin, destination, date });
    
    // Sort flights (or use C++ for large datasets)
    const sortedFlights = flights.sort((a, b) => 
      sortBy === 'price' ? a.price.total - b.price.total : 0
    );

    res.json(sortedFlights);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};