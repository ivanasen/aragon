import { Client, LoomProvider, CryptoUtils } from 'loom-js'

const privateKey = CryptoUtils.generatePrivateKey()
// const publicKey = CryptoUtils.publicKeyFromPrivateKey(privateKey)

// Create the client
const client = new Client(
  'default',
  'ws://127.0.0.1:46658/websocket',
  'ws://127.0.0.1:46658/queryws'
)

// The address for the caller of the function
// const from = LocalAddress.fromPublicKey(publicKey).toString()

// Instantiate web3 client using LoomProvider
const provider = new LoomProvider(client, privateKey)

export default provider
