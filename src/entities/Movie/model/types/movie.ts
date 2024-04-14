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

interface MovieSimilar {
  id: number
  name: string
  poster: MoviePoster
  rating: MovieRating
  year?: number | undefined
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

interface MovieReview {
  id: number
  movieId: number
  title: string
  type: string
  review: string
  date: string
  author: string
  userRating: number
  authorId: number
  updatedAt: string
  createdAt: string
}

interface MovieCountry {
  name: string
}

export interface MovieType {
  id: number
  name: string
  type: string
  alternativeName: string
  year?: number | undefined
  description: string
  rating: MovieRating
  poster: MoviePoster
  persons: MoviePerson[]
  sequelsAndPrequels: MovieSequelsAndPrequels[]
  seasonsInfo?: MovieSeasonInfo[]
  review?: MovieReview[]
  countries: MovieCountry[]
  ageRating: number
  movieLength: string
  slogan: string | null
  similarMovies: MovieSimilar[]
}
