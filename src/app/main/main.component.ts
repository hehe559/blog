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
    this.sugar();
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
    $('#header').jstars({
      image_path: '/assets/jquery-stars/imgs',
      style: 'white',     
      frequency: 19,
      delay: 300
    });      
  }

  sugar(){
    $('#content').jstars({
      image_path: '/assets/jquery-stars/imgs',
      image: 'candy-cane-stars.png',
      width: 34,
      height: 34,
      delay: 700,
      frequency: 5
    });      
  }

}
