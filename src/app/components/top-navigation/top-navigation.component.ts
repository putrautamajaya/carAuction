import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {

  signedIn: boolean
  activeMenu: 'auction' | 'sell-a-car' | 'about' | 'email'
  display: {
    expand: boolean,
    popUp: boolean,
  }

  constructor() {
    this.display = {
      expand: false,
      popUp: false,
    }
    this.signedIn = false
    this.activeMenu = 'auction'
  }

  ngOnInit(): void {
  }

  toggleDisplay(key: 'expand' | 'popUp') {
    this.display[key] = !this.display[key]
  }

  onMenu(s: 'auction' | 'sell-a-car' | 'about' | 'email') {
    this.activeMenu = s
  }

}
