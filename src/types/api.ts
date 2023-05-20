/**
 * @prettier
 */



// common types.
export enum ResponseKind {
  ERROR = 'ERROR',
  OK = 'OK',
  UNAUTHORIZED = 'UNAUTHORIZED',
}
export interface SuccessCommon {
  kind: ResponseKind.OK;
}
export interface ErrorCommon {
  kind: ResponseKind.ERROR | ResponseKind.UNAUTHORIZED;
  error: string;
}

export type movieType ='popular'|'top_rated'|'upcoming';


// generate deduction slices.
export interface DeductionSlice {
  id: string;
  days?: number;
  deductions: number;
  from?: number;
  to?: number;
}
interface IGetDeductionSlices extends SuccessCommon {
  deductionSlices: DeductionSlice[];
}
export type GetDeductionSlices = IGetDeductionSlices | ErrorCommon;

interface IGety extends SuccessCommon {

}
export type Gety = IGety | ErrorCommon;


export interface Movie {
  id: number;
  posterPath: string;
  title: string;
  overview: string
  genres: Genres[];
  popularity: number;
  releaseDate: string;
  voteAverage: string;
}


interface IGetMoviesByType extends SuccessCommon {
  movies: Movie[];
  isLastPage: boolean;
}
export type GetMoviesByType = IGetMoviesByType | ErrorCommon;

//
interface Genres {
  id: number,
  name: string
}


interface IGetMoviesDetails extends SuccessCommon {
  movie: Movie;
}
export type GetMoviesDetails = IGetMoviesDetails | ErrorCommon;


interface ILogin extends SuccessCommon {
  guestSessionId: string;
}
export type Login  = ILogin | ErrorCommon;


export interface Credit {
  uri: string,
  name: string
}


interface IGetCreditsByMoviesId extends SuccessCommon {
  credits: Credit[];
}
export type GetCreditsByMoviesId = IGetCreditsByMoviesId| ErrorCommon;



