import { Url } from 'url';

export class Movie {
  public title: string;
  public year: number;
  public rating: number;
  public url: Url;
  public id?: number;
}
