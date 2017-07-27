import { Component, OnInit } from '@angular/core';

// Import bootstrap locally, you can also import it globally at main.ts
import 'bootstrap/dist/js/bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = `App works !`;

  constructor() { }

  ngOnInit() {
  }

}
