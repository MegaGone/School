import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  public titulo: string;

  constructor() { 
    this.titulo = 'Informacion';
  }

  ngOnInit(): void {
  }

}