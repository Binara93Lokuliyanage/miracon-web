import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById('first').style.display = "none"
    document.getElementById('second').style.display = "none"
    document.getElementById('thired').style.display = "none"

    setTimeout(() => {
      document.getElementById('first').style.display = "block"
    }, 1)
    setTimeout(() => {
      document.getElementById('second').style.display = "block"
    }, 750)
    setTimeout(() => {
      document.getElementById('thired').style.display = "block"
    }, 1500)
  }
  

}
