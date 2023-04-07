export interface Dataset {
  name: string
  description: string
  variations: Variation[]
  data: string[][]
}

export interface Variation {
  name: string
  key: string
  locale: string
  index: number
}
