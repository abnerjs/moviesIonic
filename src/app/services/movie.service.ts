import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseURI = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  public getMovies(page: number) {
    return this.http.get(`${this.baseURI}/movie/popular?api_key=${environment.movies}&language=pt-BR&page=${page}`);
  }

  public getGenresForMovies() {
    return this.http.get(`${this.baseURI}/genre/movie/list?api_key=${environment.movies}`);
  }

}
