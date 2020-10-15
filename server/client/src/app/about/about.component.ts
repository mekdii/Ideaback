import { Component, OnInit } from '@angular/core';

import {ConfigService} from '../config.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about = {
    image: '',
    heading: '',
    description: '',
    features: [{ icon: '', description: '' }],
    subdescription: '' };

  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.about = this.getAbout();
  }
getAbout(){
  return this.config.getConfig().about;
}
}
