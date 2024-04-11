// export enum MoviBlockType {
//   NAME = 'NAME',
//   POSTER = 'POSTER',
//   DESCRIPTION = 'DESCRIPTION',
//   RATING = 'RATING',
//   PERSONS = 'PERSONS',
//   SEASONS = 'SEASONS',
//   REVIEW = 'REVIEW',
// }

interface MovieRating {
  kp: number
  imdb: number
  tmdb: number
  filmCritics: number
  russianFilmCritics: number
  await: number
}

interface MoviePoster {
  url: string
  previewUrl: string
}

interface MoviePerson {
  id: number
  name: string
  enName: string
  photo: string
  description: string
  profession: string
  enProfession: string
}

interface MovieSeasonInfo {
  number: number
  episodesCount: number
}

interface MovieSequelsAndPrequels {
  id: number
  name: string
  alternativeName: string
  type: string
  poster: MoviePoster
  rating: MovieRating
  year: number
}

interface MovieReviewInfo {
  count: number
  positiveCount: number
  percentage: string
}

interface MovieCountry {
  name: string
}

export interface MovieType {
  id: number
  name: string
  type: string
  alternativeName: string
  year: number
  description: string
  rating: MovieRating
  poster: MoviePoster
  persons: MoviePerson[]
  sequelsAndPrequels: MovieSequelsAndPrequels[]
  seasonsInfo?: MovieSeasonInfo[]
  reviewInfo?: MovieReviewInfo
  countries: MovieCountry[]
  ageRating: number
  movieLength: string
  slogan: string
}
