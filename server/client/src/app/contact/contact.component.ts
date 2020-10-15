import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';
import {ContactModel} from '../models/contact.model'
import { from } from 'rxjs';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: ContactModel = new ContactModel();
  contactForm: FormGroup;
  returnUrl: String;

contacts ={
  heading: '',
  title: '',
  info: [],
  
}
  constructor(private config: ConfigService,
    private fb: FormBuilder,) { }

    ngOnInit(): void {
      this.contacts = this.getContacts();
      this.contactForm = this.fb.group({
        'name': [this.contact.name, [
          Validators.required
        ]],
        'email': [this.contact.email, [
          Validators.required,
          Validators.email
        ]],
        'subject': [this.contact.subject, [
          Validators.required
          
        ]],
        'message': [this.contact.message, [
          Validators.required
        ]]
      });
    }
    onContactSubmit() {
      alert(this.contact.name + ' ' + this.contact.email + ' ' + this.contact.subject + ' ' + this.contact.message);
    }
    getContacts(){
      return this.config.getConfig().contacts;
    }
}
