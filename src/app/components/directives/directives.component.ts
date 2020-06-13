import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  showtheconteent = false;
  showcontent = false;
  serverStatus: string;
  cities = [' 🚗 Bangalore', ' 💨 Bhuvaneshwar', '  🌊 Vishakapatnam'];
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }
  // here we are making the showthecontent to true to show the data inside p tag of thml
  showData() {
    this.showtheconteent = true;
  }

  makeTrue() {
    this.showcontent = true;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
