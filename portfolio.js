
import { assets } from './assets.js';

export function calculatePortfolioValue() {
  return assets.reduce((total, asset) => total + asset.price * asset.quantity, 0);
}

export function getPortfolioAllocation() {
  const totalValue = calculatePortfolioValue();
  return assets.map(asset => ({
    id: asset.id,
    name: asset.name,
    type: asset.type,
    allocation: ((asset.price * asset.quantity) / totalValue) * 100
  }));
}

import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';

console.log("Total Portfolio Value:", calculatePortfolioValue());
console.log("Portfolio Allocation:", getPortfolioAllocation());
