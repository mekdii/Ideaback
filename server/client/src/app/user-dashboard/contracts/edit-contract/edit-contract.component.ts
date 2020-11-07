import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from '../../templates/forms/form.service';
import { Rental } from '../../templates/forms/rental';

@Component({
  selector: 'app-edit-contract',
  templateUrl: './edit-contract.component.html',
  styleUrls: ['./edit-contract.component.css']
})
export class EditContractComponent implements OnInit {
  rentalForm: FormGroup;
  isLoadingResults = true;
  pPeriod = ['Every 15th of the month', 'Every End of the month'];
  pMethod =['Cash', 'Check','PayPal','CBE Birr']
  private sub: any;
   contract: Rental;
   id = '';
   periodHasError = true;
   methodHasError = true;
   points = [];
   signatureImage;
   signatureImages;
  
  constructor(private fs: FormService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) { }
    
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
  this.getContractData(this.route.snapshot.params.id);
  this.rentalForm = this.fb.group({
    lFirstName: ['', [Validators.required, Validators.minLength(3)]],
    lLastName: ['', [Validators.required, Validators.minLength(3)]],
    lemail: ['', [Validators.required, Validators.email]],
    lPhone: [null, [Validators.required]],

    tFirstName: ['', [Validators.required, Validators.minLength(3)]],
    tLastName: ['', [Validators.required, Validators.minLength(3)]],
    temail: ['', [Validators.required, Validators.email]],
    tPhone: [null, [Validators.required]],
    occupants: [null, [Validators.required]],
    country: ['', [Validators.required]],
    state: ['', [Validators.required]],
    city: ['', [Validators.required]],
    postal: ['', [Validators.required]],

    startDate: [''],
    endDate: [''],
    payPeriod: [''],
    rentAmount: ['', [Validators.required]],
    securityDeposit: ['', [Validators.required]],
    lateCharge: ['', [Validators.required]],
    collector: ['', [Validators.required]],
    paymentMethod: ['', [Validators.required]],
    terms: ['', [Validators.required]],/*
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




  getContractData(id: any): void {


        this.fs.getContract(id).subscribe(data => {
            this.id = data.id;
            this.contract = data;

            this.rentalForm.setValue({
              lFirstName: data.lFirstName,
              lLastName: data.lLastName,
              lemail: data.lemail,
              lPhone: data.lPhone,
              tFirstName: data.tFirstName,
              tLastName: data.tLastName,
              temail: data.temail,
              tPhone: data.tPhone,
              occupants: data.occupants,
              country: data.country,
              state: data.state,
              city: data.city,
              postal: data.postal,
              startDate: data.startDate,
              endDate: data.endDate,
              payPeriod: data.payPeriod,
              rentAmount: data.rentAmount,
              securityDeposit: data.securityDeposit,
              lateCharge: data.lateCharge,
              paymentMethod: data.paymentMethod,
              collector: data.collector,
              terms: data.terms,
             
        })

        });



}

 
/*
  getContract(id: any) {
    this.fs.getContract(id).subscribe((data: any) => {
      this.id = data.id;
      this.rentalForm.setValue({
        date: data.date,
        lFirstName: data.lFirstName,
        lLastName: data.lLastName,
        lemail: data.lemail,
        lPhone: data.lPhone,
        address: data.address,
        tFirstName: data.tFirstName,
        tLastName: data.tLastName,
        temail: data.temail,
        tPhone: data.tPhone,
        occupants: data.occupants,
        country: data.country,
        state: data.state,
        city: data.city,
        postal: data.postal,
        startDate: data.startDate,
        endDate: data.endDate,
        payPeriod: data.payPeriod,
        rentAmount: data.rentAmount,
        securityDeposit: data.securityDeposit,
        lateCharge: data.lateCharge,
        paymentMethod: data.paymentMethod,
        collector: data.collector,
        terms: data.terms,
        lSignature: data.lSignature,
        tSignature: data.tSignature
      });
    });
  }
*/





  
editContract(): void {

  this.isLoadingResults = true;
    this.fs.updateContract(this.id, this.rentalForm.value)
      .subscribe((res: any) => {
          const id = res._id;
          this.isLoadingResults = false;
          this.router.navigate(['../', id]);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );

}


}
