import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interface/interface';
import { CompletatiComponent } from '../completati/completati.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
