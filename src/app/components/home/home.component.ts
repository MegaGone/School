import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo: string;
  public sub: string;
  public desing: string;
  public autor: string;

  constructor(private _route: ActivatedRoute) {
    this.titulo = 'Bienvenidos';
    this.sub = 'Desarrollo Web';
    this.autor = 'Jimmy Martinez';
    this.desing = 'Desarrollador Web JR';

    console.log(_route.snapshot.paramMap);
  }

  ngOnInit(): void {
  }
}
