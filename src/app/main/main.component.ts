import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  iconStatus = false;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  iconClick(){
    if (this.iconStatus) return;
    this.iconStatus = true;
    setTimeout(()=>{
      this.iconStatus = false;
    },2200)
  }

  go(key){
    this.router.navigateByUrl(key);
  }

}
