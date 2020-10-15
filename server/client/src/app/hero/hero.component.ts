import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service'
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

hero = {
  heading: '',
  subheading: '',

}


  constructor(private config : ConfigService) { }

  ngOnInit(): void {
    this.hero = this.getHero();
  }
  getHero(){
    return this.config.getConfig().hero;
  }
}
