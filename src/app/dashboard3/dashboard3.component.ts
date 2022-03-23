import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard3',
  templateUrl: './dashboard3.component.html',
  styleUrls: ['./dashboard3.component.css']
})
export class Dashboard3Component implements OnInit {

 
  myScriptElement:HTMLScriptElement;


  constructor() { 
this.myScriptElement=document.createElement("script");
this.myScriptElement.src="../../assets/js/script.js";
document.body.appendChild(this.myScriptElement);

  }

  ngOnInit(): void {
  }


  
}
