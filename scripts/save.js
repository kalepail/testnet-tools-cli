'use strict'

const chalk = require('chalk')
const minimist = require('minimist')
const StellarSdk = require('stellar-sdk')
const axios = require('axios')

console.log(chalk.green('-----------------------------------------------'))
console.log(chalk.green('Testnet Tools'), chalk.yellow('Save Key'))
console.log(chalk.green('-----------------------------------------------'), '\n')

try {
  const argv = minimist(process.argv.slice(3))
  const keypair = StellarSdk.Keypair.fromSecret(argv.secret)

  axios.post('https://testnet.tools/save', {
    secret: keypair.secret()
  })
  .then(() => console.log(chalk.green('✔︎ Key successfully saved', '\n')))
  .catch((err) => fail(err.response.data.message))
} 

catch(err) {
  fail(err)
}

function fail(message) {
  console.error(chalk.red(message), '\n')
  process.exit(1)
}