export interface Product {
  title?: string,
  description?: string,
  programType?: string,
  images?: PosterArt,
  releaseYear?: number
}

export interface PosterArt {
  url: string,
  width: number,
  height: number,
}