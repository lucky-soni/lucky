import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.scss']
})
export class Screen2Component implements OnInit {

  level:any=[]

  batterypercent='30%'

  constructor() { }

  ngOnInit(): void {
    this.level=[1,2,3,1,2,3,1,2,3,1,2,3]
  }

}
