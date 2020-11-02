import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from './form.service';
import {Rental} from './rental'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  rental: Rental = new Rental();
 
  rentalForm : FormGroup;

  constructor( private fb: FormBuilder, private fs: FormService,  private router: Router,) { }

  ngOnInit(): void {
    this.rentalForm = this.fb.group({
      lFirstName: ['', [Validators.required, Validators.minLength(3)]],
      lLastName: ['', [Validators.required, Validators.minLength(3)]],
      lemail: ['', [Validators.required, Validators.email]],
      lPhone: ['', [Validators.required]],
      address:['', [Validators.required]],
      tFirstName: ['', [Validators.required, Validators.minLength(3)]],
      tLastName: ['', [Validators.required, Validators.minLength(3)]],
      temail: ['', [Validators.required, Validators.email]],
      tPhone: ['', [Validators.required]],
    occupants: [''],
      city: ['', [Validators.required]],
      state: [''],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
     
      payPeriod: ['', [Validators.required]],
      rentAmount: ['', [Validators.required]],
      lateCharge: ['', [Validators.required]],
      paymentMethod: ['', [Validators.required]],
      terms:['', [Validators.required, Validators.minLength(500)]],
    })
  }
  
    get lFirstName(){
      return this.rentalForm.get('lFirstName');
    }
    get lLastName(){
      return this.rentalForm.get('lLastName');
    }
    get lemail(){
      return this.rentalForm.get('lemail');
    }
    get lPhone(){
      return this.rentalForm.get('lPhone');
    }
    get address(){
      return this.rentalForm.get('address');
    }
    get tFirstName(){
      return this.rentalForm.get('tFirstName');
    }
    get tLastName(){
      return this.rentalForm.get('tLastName');
    }
    get temail(){
      return this.rentalForm.get('temail');
    }
    get tPhone(){
      return this.rentalForm.get('tPhone');
    }
    get occupants(){
      return this.rentalForm.get('occupants');
    }
    get state(){
      return this.rentalForm.get('state');
    }
    get country(){
      return this.rentalForm.get('country');
    }
    get city(){
      return this.rentalForm.get('city');
    }
    get startDate(){
      return this.rentalForm.get('startDate');
    }
    get endDate(){
      return this.rentalForm.get('endDate');
    }
    get payPeriod(){
      return this.rentalForm.get('payPeriod');
    }
    get rentAmount(){
      return this.rentalForm.get('rentAmount');
    }
    get paymentMethod(){
     
      return this.rentalForm.get('paymentMethod');
    }
    get lateCharge(){
      return this.rentalForm.get('lateCharge');
    }
    
    get terms(){
      return this.rentalForm.get('terms');
    }

    onRentalSubmit(){
      this.fs.submitForm(this.rentalForm.value)
      .subscribe(
        response =>
        { if (response.success) {
          console.log('Success!', response),
          this.router.navigate(['/Login']);
        } else {
          console.log('Failed');
        } 
      }
      );
    }

  }

