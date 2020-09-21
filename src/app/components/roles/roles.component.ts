import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  public titulo: string;

  constructor() {
    this.titulo = 'Roles en el desarrollo web'
  }

  ngOnInit(): void {
    $('.slider').bxSlider({
      auto: true,
      autoControls: false,
      stopAutoOnClick: true,
      pager: false,
      slideWidth: 430
    });
  }

}
