// constants.js
// const prices = {
//     photography: {
//       silver: 3000,
//       gold: 5000,
//       platinum: 7000,
//     },
//     makeup: {
//       silver: 4000,
//       gold: 6000,
//       platinum: 8000,
//     },
//     decoration: {
//       silver: 2000,
//       gold: 3000,
//       platinum: 4000,
//     },
//   };
  
//   module.exports = { prices };
  

let prices = {};

function setPrices(newPrices) {
  prices = newPrices;
}

function getPrices() {
  return prices || {}; // Ensure prices is defined
}

module.exports = { setPrices, getPrices };
