export interface Royalty {
  id: string
  email: string
  firstName: string
  lastName: string
  identificationNumber: string
  userName: string
  userType: UserType
  portal: Portal
  address: Address
  roles: Roles
  royaltyRecipient: RoyaltyRecipient
  paymentInfo: PaymentInfo
}
export enum UserType {
  LegalPerson = 'legal_person',
  NaturalPerson = 'natural_person',
}
export interface PaymentInfo {
  id: string
  paymentMethod: string
  swift: number
  iban: string
}
export interface RoyaltyRecipient {
  id: string
  recipientType: RecipientType
  birthDate: string
  deceasedDate: string
  nationality: string
  workCountry: string
  taxIdentificationNumber: string
  accounting: string
  vatLiability: boolean
  socialChargeLiability: boolean
  taxClassification: string
  taxDeductionClassification: string
  settLementLayout: string
  transferPayments: boolean
  payNegative: boolean
}
export interface Roles {
  id: string
  royaltyRecipient: string
  heir: Heir
}
export interface Address {
  id: string
  streetAddress: string
  city: string
  postalCode: string
  country: string
  latitude?: number
  longitude?: number
  addressLine2: string
  streetNumber: string
  streetSuffix: string
}
export interface Portal {
  id: string
  name: string
}
export enum Heir {
  Active = 'active',
  Living = 'living',
}
export enum RecipientType {
  Domestic = 'domestic',
  Foreign = 'foreign',
}
