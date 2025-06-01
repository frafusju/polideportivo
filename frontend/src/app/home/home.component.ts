import { Component, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent/*  implements OnDestroy */ {

  constructor(private renderer: Renderer2) { 
    this.renderer.setStyle(document.body, 'background-image', 'url("/assets/home/home.jpg")');
    this.renderer.setStyle(document.body, 'background-position', 'center center');
    this.renderer.setStyle(document.body, 'background-repeat', 'no-repeat');    
    this.renderer.setStyle(document.body, 'background-size', 'cover');
    this.renderer.setStyle(document.body, 'background-color', 'white');
  }

  ngOnDestroy() {
    this.renderer.removeStyle(document.body, 'background-image');
    this.renderer.removeStyle(document.body, 'background-position');
    this.renderer.removeStyle(document.body, 'background-repeat');
    this.renderer.removeStyle(document.body, 'background-size');
    this.renderer.removeStyle(document.body, 'background-color');    
  }
}