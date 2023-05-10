const { Blockchain, Transaction } = require("./blockchain.js");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "0453cdbc2ff2ac5ead916e70f4fadd8acfccb20fbe6e14625fc03c6decfb13f1da0a19e6e2cabc7ced97d72cb344b1c9c0a626e0f151075b787d54bd72ba269d97"
);
const myWalletAddress = myKey.getPublic("hex");

let my_blockchain = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "examplePublicKey", 10);
tx1.signTransaction(myKey);
my_blockchain.addTransaction(tx1);

console.log("\n Starting the miner...");
my_blockchain.minePendingTransactions(myWalletAddress);

console.log(
  "\nBalance of adam is",
  my_blockchain.getBalanceOfAddress(myWalletAddress)
);

console.log("Is chain valid?", my_blockchain.isChainValid());
