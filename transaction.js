
import { assets, getAssetById } from './assets.js';

export class Transaction {
  constructor(assetId, type, quantity) {
    this.assetId = assetId;
    this.type = type;
    this.quantity = quantity;

    this.asset = getAssetById(assetId);
    if (!this.asset) {
      throw new Error(`Asset with ID ${assetId} not found`);
    }

    this.processTransaction();
  }

  processTransaction() {
    if (this.type === "purchase") {
      this.asset.quantity += this.quantity;
    } else if (this.type === "sell") {
      if (this.asset.quantity < this.quantity) {
        throw new Error(`Insufficient quantity for sale of ${this.asset.name}`);
      }
      this.asset.quantity -= this.quantity;
    } else {
      throw new Error("Transaction type must be 'purchase' or 'sell'");
    }
  }
}

import { Transaction } from './transaction.js';

try {
  const buyTransaction = new Transaction(1, "purchase", 5);
  console.log("Purchase transaction processed successfully.");

  const sellTransaction = new Transaction(1, "sell", 3);
  console.log("Sell transaction processed successfully.");

  const invalidSellTransaction = new Transaction(1, "sell", 100); 
} catch (error) {
  console.error(error.message);
}
