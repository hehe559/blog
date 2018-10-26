import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
