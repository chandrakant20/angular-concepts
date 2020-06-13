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
  buttonStatus = 'Not Clicked';
  inputTextValue = '';
  inputTextusingTwoWay = '';
  constructor() {
    // This is es6 arrow function which will execute after 2 seconds
    setTimeout(() => {
      this.enableButton = true;
    }, 2000);
  }

  // Interpolation with the function
  getServerStatus() {
    return this.serverStatus;
  }

  ngOnInit(): void {
  }

  // button click event
  onClick() {
    this.buttonStatus = 'Clicked !';
  }

  onInputKeyUp(event: any) {
    // either one can be used
    this.inputTextValue = event.target.value;
    // this.inputTextValue = (event.target as HTMLInputElement).value;
  }
}
