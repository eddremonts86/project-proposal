import { readFileSync, writeFileSync } from 'fs'

const loadJSON = (path) =>
  JSON.parse(readFileSync(new URL(path, import.meta.url)).toString())

const address = loadJSON('./AddressMock.json')
const paymentInfo = loadJSON('./PaymentInfoMock.json')
const portal = loadJSON('./PortalMock.json')
const roles = loadJSON('./RolesMock.json')
const royalty = loadJSON('./RoyaltyMock.json')
const recipient = loadJSON('./RoyaltyRecipientMock.json')

const json = () => ({
  address: address,
  paymentInfo: paymentInfo,
  portal: portal,
  roles: roles,
  royalty: royalty,
  recipient: recipient,
})

const data = JSON.stringify(json(), null, 2)
const path = './src/jServer/Api.json'
writeFileSync(path, data, function (err) {
  if (err) throw err
  console.log('complete')
})
