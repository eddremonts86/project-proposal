import { readFileSync, writeFileSync } from 'fs'

const loadJSON = (path) =>
  JSON.parse(readFileSync(new URL(path, import.meta.url)).toString())

const formAdvanced = loadJSON('./formAdvanced.json')
const formExample = loadJSON('./formExample.json')

const json = () => ({
  advanced: formAdvanced,
  basic: formExample,
})

const data = JSON.stringify(json(), null, 2)
const path = './src/jServer/Forms.json'
writeFileSync(path, data, function (err) {
  if (err) throw err
  console.log('complete')
})
