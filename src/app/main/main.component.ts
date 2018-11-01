import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  iconStatus = false;
  constructor() { }

  ngOnInit() {
  }

  iconClick(){
    if (this.iconStatus) return;
    this.iconStatus = true;
    setTimeout(()=>{
      this.iconStatus = false;
    },2200)
  }

}
