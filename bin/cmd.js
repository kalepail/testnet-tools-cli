#! /usr/bin/env node

const chalk = require('chalk')

if (process.version.match(/v(\d+)\./)[1] < 6)
  console.error('testnet-tools: Node v6 or greater is required.')

else switch (process.argv[2]) {
  case 'save':
    require(`../scripts/${process.argv[2]}.js`)
    break
  default:
    console.log('\n ', 'Usage: ' + chalk.green('testnet-tools') + ' ' + chalk.yellow('[command]') + '', '\n')
    console.log('  Available commands:', '\n')
    console.log(chalk.yellow('  save'), '\t', 'to save a key to be watched and persisted across network resets', '\n')
    process.exit(-1)
    break
}