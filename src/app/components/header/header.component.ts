import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'My Task List'; // esto queda definido en el componente, entonces lo podemos usar en el header.component.html
  constructor() { }

  ngOnInit(): void {
  }

}
