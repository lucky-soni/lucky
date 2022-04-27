import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen8',
  templateUrl: './screen8.component.html',
  styleUrls: ['./screen8.component.scss']
})
export class Screen8Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  this.showImages()
  }

  showImages() {
    setTimeout(() => {
      document.getElementById('third')!.style.opacity='1';
    }, 1000);
    setTimeout(() => {
      document.getElementById('second')!.style.opacity='1';
    }, 3000);
    setTimeout(() => {
      document.getElementById('fourth')!.style.opacity='1';
    }, 5000);
    setTimeout(() => {
      document.getElementById('fifth')!.style.opacity='1';
    }, 7000);
    setTimeout(() => {
      document.getElementById('sixth')!.style.opacity='1';
    }, 9000);
  }

}
