import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from './form.service';
import { Rental } from './rental'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  rental: Rental = new Rental();
    pPeriod = ['Every 15th of the month', 'Every End of the month'];
    pMethod =['Cash', 'Check','PayPal','CBE Birr']
  rentalForm: FormGroup;
  periodHasError = true;
  methodHasError = true;
  points = [];
  signatureImage;
  signatureImages;
 
  constructor(private fb: FormBuilder, private fs: FormService, private router: Router,) { }

  validatePeriod(value) {
    if (value === 'default') {
      this.periodHasError = true;
    } else {
      this.periodHasError = false;
    }
  }
  validateMethod(value) {
    if (value === 'default') {
      this.methodHasError = true;
    } else {
      this.methodHasError = false;
    }
  }
  ngOnInit(): void {
    this.rentalForm = this.fb.group({
      lFirstName: ['', [Validators.required, Validators.minLength(3)]],
      lLastName: ['', [Validators.required, Validators.minLength(3)]],
      lemail: ['', [Validators.required, Validators.email]],
      lPhone: [null, [Validators.required]],
      address: ['', [Validators.required]],
      tFirstName: ['', [Validators.required, Validators.minLength(3)]],
      tLastName: ['', [Validators.required, Validators.minLength(3)]],
      temail: ['', [Validators.required, Validators.email]],
      tPhone: [null, [Validators.required]],
      occupants: [null, [Validators.required]],
      country:['', [Validators.required]],
       state:['', [Validators.required]],
        city:['', [Validators.required]],
        postal:['', [Validators.required]],
        
      startDate:[''],
      endDate:[''],
      payPeriod :[''],
      rentAmount:['', [Validators.required]],
securityDeposit:['', [Validators.required]],
lateCharge:['', [Validators.required]],
collector:['', [Validators.required]],
paymentMethod:['', [Validators.required]],
terms:['', [Validators.required]],/*
lSignature:['', [Validators.required]],
tSignature:['', [Validators.required]],
*/
    })
  }


 
  get lFirstName() {
    return this.rentalForm.get('lFirstName');
  }
  get lLastName() {
    return this.rentalForm.get('lLastName');
  }
  get lemail() {
    return this.rentalForm.get('lemail');
  }
  get lPhone() {
    return this.rentalForm.get('lPhone');
  }
  get address() {
    return this.rentalForm.get('address');
  }
  get tFirstName() {
    return this.rentalForm.get('tFirstName');
  }
  get tLastName() {
    return this.rentalForm.get('tLastName');
  }
  get temail() {
    return this.rentalForm.get('temail');
  }
  get tPhone() {
    return this.rentalForm.get('tPhone');
  }
  get occupants() {
    return this.rentalForm.get('occupants');
  }

  get country() {
    return this.rentalForm.get('country');
  }
  get city() {
    return this.rentalForm.get('city');
  }
  get state() {
    return this.rentalForm.get('state');
  }
  get postal() {
    return this.rentalForm.get('postal');
  }
  
  get startDate() {
    return this.rentalForm.get('startDate');
  }
  get endDate() {
    return this.rentalForm.get('endDate');
  }
  get payPeriod() {
    return this.rentalForm.get('payPeriod');
  }
  get rentAmount() {
    return this.rentalForm.get('rentAmount');
  }
  get paymentMethod() {

    return this.rentalForm.get('paymentMethod');
  }
  get lateCharge() {
    return this.rentalForm.get('lateCharge');
  }
  get securityDeposit() {
    return this.rentalForm.get('securityDeposit');
  }
  get terms() {
    return this.rentalForm.get('terms');
  }


  showTImage(data) {
    this.signatureImages = data;
  }

  showImage(data) {
    this.signatureImage = data;
  }
  loadAPIData() {
    this.rentalForm.patchValue({
      lFirstName: 'Bruce',
      lLastName: 'Willis',
      lemail: 'will@gmail.com',
      lPhone: 1234567,
      address:'aa',
      tFirstName: 'Alex',
      tLastName: 'Rover',
      temail: 'alex@mail.com',
       occupants: 3,
       country:'Ethiopia',
       state:'Addis Ababa',
       city:'Addis Ababa',
       postal: 123,
       rentAmount:3000,
securityDeposit:2000,
lateCharge:300,

collector:'sis',
terms:'fdsdfghbjnkm,.,lkjhygtfrde bdxsdfghjmk, vcsdfgtyuio'
     
    });
  }
  onRentalSubmit() {
   
    this.fs.submitForm(this.rentalForm.value)
      .subscribe(
        response => {
          if (response.success) {
            console.log('Success!', response),
            
              this.router.navigate(['/contract']);

          } else {
            console.log('Failed');
          }
        }
      );
  }

}