
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

console.log("Initial Portfolio Value:", calculatePortfolioValue());
console.log("Initial Portfolio Allocation:", getPortfolioAllocation());

try {
  const buyTransaction1 = new Transaction(1, "purchase", 10);
  console.log("Transaction:", { assetId: buyTransaction1.assetId, type: buyTransaction1.type, quantity: buyTransaction1.quantity });

  const sellTransaction1 = new Transaction(2, "sell", 5);
  console.log("Transaction:", { assetId: sellTransaction1.assetId, type: sellTransaction1.type, quantity: sellTransaction1.quantity });

  const buyTransaction2 = new Transaction(3, "purchase", 2);
  console.log("Transaction:", { assetId: buyTransaction2.assetId, type: buyTransaction2.type, quantity: buyTransaction2.quantity });

  const sellTransaction2 = new Transaction(4, "sell", 3);
  console.log("Transaction:", { assetId: sellTransaction2.assetId, type: sellTransaction2.type, quantity: sellTransaction2.quantity });

} catch (error) {
  console.error(error.message);
}

console.log("Updated Portfolio Value:", calculatePortfolioValue());
console.log("Updated Portfolio Allocation:", getPortfolioAllocation());
