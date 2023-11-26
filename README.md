
### What is ASC-20?
The ASC-20 inscription standard is unique to the Avalanche blockchain which standardizes the token protocol for inscriptions. On the Avalanche blockchain, anyone has the ability to deploy, mint, and trade ASC-20 inscriptions.

### Links

Market: https://avaxmarket.xyz \
Docs: https://docs.avaxmarket.xyz


### Indexer
An indexer for a blockchain is a software tool that arranges and indexes the data stored on the blockchain to enhance search-ability and accessibility. When a transaction is confirmed and added to the blockchain, it contains various details like sender, receiver, timestamp, and transaction specifics. However, retrieving specific information from the blockchain can be challenging due to its decentralized and distributed nature. An indexer addresses this challenge by extracting and organizing the relevant data from the blockchain into a searchable format. It creates an index or database that enables users or applications to swiftly query and retrieve specific information. This includes searching for particular transactions, addresses, blocks, or other data elements stored on the blockchain. In our case, we utilize a JSON-format ASC-20 Indexer.


### Transaction Model
Avax Inscription

The following rules are tentatively decided

In the case of transfer, we are faced with a choice problem. Let’s talk about the difference between the two

Transfer Account

In the above Account model, the explanation of Nonce is

It must be an integer starting from 0, and it cannot jump. It must strictly adhere to the rules of self-increment.

This is to deal with the data security issues that current indexes often face, and it will verify the security of transactions to a certain extent.

For example, for the block height between 1 and 200, Alice has three pieces of data, and the nonces are 1, 2, and 3 respectively.

A transaction with a Nonce of 1 is on a block with a height of 5, a transaction with a Nonce of 2 is on a block with a height of 15, and a transaction with a Nonce of 3 is on a block with a height of 200.

When the data cannot be processed normally due to irresistible reasons, the block height of 14-15, then, if there is no Nonce, the third transaction will be regarded as valid data, then an abnormality will occur, affecting the security of funds.

Transfer UTXO

The security of the trading model depends on each fund itself, and the source of the previous transaction must be clear

So, we will see the refund to ourselves operation

In Bitcoin, transactions are processed by OP encoding. In order to express it more clearly on Avax, we use the inscription format JSON. The transaction data should be the same as that of BTC, but in order to save gas, some keys will have some differences.

The difference between the transaction mode and Account mode Json is that the "to" field is changed to "vin" and "vout". They clearly specify the details of the transaction, and "txid" and "vout" need to be used for each input.

The difference between this processing and Account is that the data verification on the block this time is more clear.
