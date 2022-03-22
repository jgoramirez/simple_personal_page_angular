import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  urlImage: string = "https://avatars.githubusercontent.com/u/30025235";

  constructor() { }

  ngOnInit(): void {
  }

}
