#!/usr/bin/env node

import { execSync } from 'child_process'

const appName = process.argv[2]

if (appName.length === 0) {
    console.error('Please provide a name for the application')
    process.exit(1)
}
const gitCheckoutCommand = `git clone --depth 1 https://github.com/yoadazani/node-ts-api-app.git ${appName}`
const installDependencies = `cd ${appName} && npm install`

const runCommand = (command) => {
    try {
        execSync(`${command}`, { stdio: 'inherit' })
    } catch (error) {
        console.error(`Failed to execute ${command}`, error)
        return false
    }
    return true
}

const clone = runCommand(gitCheckoutCommand)
if (!clone) process.exit(1)

console.log(`Clone application from registry...`)

const install = runCommand(installDependencies)
if (!install) process.exit(1)

console.log(`Application ${appName} created successfully`)
console.log(`Run 'cd ${appName} && npm start' to start the application`)
process.exit(0)