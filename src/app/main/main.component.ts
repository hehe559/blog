import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare let $:any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  iconStatus = false;
  constructor(private router:Router) { }

  ngOnInit() {
    this.start(); 
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

  start(){
    $('body').jstars({
      image_path: '/assets/jquery-stars/imgs',
      style: 'blue',     
      frequency: 19,
      delay: 300
    });      
  }

}
