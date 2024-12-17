import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film.model';
import { FILMS } from '../../constans/films.constans';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-film-page',
  standalone: false,

  templateUrl: './film-page.component.html',
  styleUrl: './film-page.component.css'
})
export class FilmPageComponent implements OnInit {
  public films: Film[] = []
  public film!: Film

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _filmsService: FilmsService
  ) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id')

    this.films = this._filmsService.getFullFilms

    this._initFilm(Number(id))
  }

  private _initFilm(id: number) {
    const findFilm = this.films.find(film => film.id === id)

    if (findFilm) {
      this.film = findFilm
    } else {
      this._router.navigate(['/'])
    }
  }
}
