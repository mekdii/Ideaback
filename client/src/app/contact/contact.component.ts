import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service'
import { from } from 'rxjs';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


contact ={
  heading: '',
  title: '',
  info: [],
  
}
  constructor(private config: ConfigService,
    private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.contact = this.getContact();
  
  }
getContact(){
  return this.config.getConfig().contact
}

}
