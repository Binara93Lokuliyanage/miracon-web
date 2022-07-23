import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) { }
  title = 'miracon';
  windowHeight: number;
  ngOnInit(): void {
    // document.getElementById('confirmPay').style.display = "block";
    this.windowHeight = window.innerHeight;
    document.getElementById('modal-content').style.height = this.windowHeight + "px"
    document.getElementById('balancer').style.height = ((this.windowHeight/2) - 200) + "px"

  }
  openSite(){
    document.getElementById('modal-content').className = "modal-content-away";
    
    setTimeout(function() {document.getElementById('confirmPay').style.display = "none"}, 1000);
  }
  goHome(){
    this.router.navigate(['/home']);
  }
  goAbout(){
    this.router.navigate(['/about']);
  }
  goProj(){
    this.router.navigate(['/projects']);
  }
  goContact(){
    this.router.navigate(['/contact']);
  }
}
