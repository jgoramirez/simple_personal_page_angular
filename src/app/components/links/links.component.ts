import { Component, OnInit } from '@angular/core';
import { Links } from './links.interface';
import { LINKS } from './links-mock';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  links: Links[] = LINKS;

  constructor() { }

  ngOnInit(): void {
  }

}
