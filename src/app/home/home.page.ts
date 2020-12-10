import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public listaFilmes = [];
  public pagina = 1; // ultima 498
  public total: number;
  public genres = {};

  constructor(public movieService: MovieService) {
    this.carregarFilmes();
  }

  proximo() {
    this.pagina++;
    this.carregarFilmes();
  }

  anterior() {
    this.pagina--;
    this.carregarFilmes();
  }

  formatUrl(backdropPath) {
    return `https://image.tmdb.org/t/p/w500/${backdropPath}`;
  }

  carregarFilmes() {
      this.movieService.getMovies(this.pagina).subscribe((sucess: any) => {
        console.log(sucess);
        this.listaFilmes = sucess.results.map(rs => {
          rs.release_date = new Date(rs.release_date).toLocaleDateString('pt-BR');
          return rs;
        });
        this.total = sucess.total_pages;
        document.querySelector('ion-content').scrollToTop(0);
      }, error => {
        console.log(error);
      });
    }
}
