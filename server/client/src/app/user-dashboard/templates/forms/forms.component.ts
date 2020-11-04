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

  rentalForm: FormGroup;
  points = [];
  signatureImage;
  signatureImages;

  constructor(private fb: FormBuilder, private fs: FormService, private router: Router,) { }

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
      startDate:['', [Validators.required]],
      endDate:['', [Validators.required]],
      payPeriod :['', [Validators.required]],
      rentAmount:['', [Validators.required]],
securityDeposit:['', [Validators.required]],
lateCharge:['', [Validators.required]],
paymentMethod:['', [Validators.required]],
collector:['', [Validators.required]],
terms:['', [Validators.required]],
lSignature:['', [Validators.required]],
tSignature:['', [Validators.required]],

    })
  }


  onRentalSubmit() {
    this.fs.submitForm(this.rentalForm.value)
      .subscribe(
        response => {
          if (response.success) {
            console.log('Success!', response),
              this.router.navigate(['/contracts']);
          } else {
            console.log('Failed');
          }
        }
      );
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
 
}

