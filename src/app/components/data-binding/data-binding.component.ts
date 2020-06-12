import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  serverId = 10;
  serverStatus = 'Offline';
  enableButton = false;

  constructor() {
    // This is es6 arrow function which will execute after 2 seconds
    setTimeout(() => {
      this.enableButton = true;
    }, 2000);
  }

  getServerStatus() {
    return this.serverStatus;
  }
  ngOnInit(): void {
  }

}
