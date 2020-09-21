import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  public titulo: String;

  constructor() { 
    this.titulo = 'Aprende Desarrollo Web';
  }

  ngOnInit(): void {
    $('.slider').bxSlider({
      auto: true,
      autoControls: false,
      stopAutoOnClick: false,
      pager: false,
      slideWidth: 500
    });
  }

}
