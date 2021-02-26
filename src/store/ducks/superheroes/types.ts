export enum SuperTypes {
  GET_DATA_REQUEST = 'GET_DATA_REQUEST',
  GET_DATA_SUCCESS = 'GET_DATA_SUCCESS',
  GET_DATA_FAILURE = 'GET_DATA_FAILURE'
}

export interface SuperHero {
  id: string,
  name: string,
  biography: Biography,
  work: Work,
  connections: Connections,
  image: Image
}

export interface Biography {
  fullName: string,
  alterEgos: string,
  firstAppearance: string,
  publisher: string
}

export interface Work {
  occupation: string,
  base: string
}

export interface Connections {
  groupAffiliation: string,
  relatives: string
}

export interface Image {
  url: string
}