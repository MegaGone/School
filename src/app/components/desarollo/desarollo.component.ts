import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-desarollo',
  templateUrl: './desarollo.component.html',
  styleUrls: ['./desarollo.component.css']
})
export class DesarolloComponent implements OnInit {

  public titulo: string;

  constructor() { 
    this.titulo = '¿Que es el desarrollo Web?'
  }

  ngOnInit(): void {
    $('.slider').bxSlider({
      auto: true,
      autoControls: false,
      stopAutoOnClick: true,
      pager: false,
      slideWidth: 490
    });
  }

}
