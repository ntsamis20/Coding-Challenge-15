
export const assets = [
    { id: 1, name: "Tesla.", type: "stock", price: 320, quantity: 10 },
    { id: 2, name: "Voo", type: "stock", price: 550, quantity: 15 },
    { id: 3, name: "InvescoQQQ", type: "bond", price: 515, quantity: 5 },
    { id: 4, name: "Nvidia", type: "stock", price: 150, quantity: 7 },
    { id: 5, name: "Gamestop", type: "bond", price: 25, quantity: 20 }
  ];
  
  export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
  }
  
  import { assets, getAssetById } from './assets.js';

console.log(getAssetById(3)); 
