import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css']
})
export class CtaComponent implements OnInit {
cta ={
title:'',
description:'',
linkText: '',
link:''
}
  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.cta = this.getCta();
  }
getCta(){
  return this.config.getConfig().cta;
}
}
