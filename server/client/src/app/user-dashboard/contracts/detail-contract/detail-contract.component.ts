import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from '../../templates/forms/form.service';
import { Rental } from '../../templates/forms/rental';

@Component({
  selector: 'app-detail-contract',
  templateUrl: './detail-contract.component.html',
  styleUrls: ['./detail-contract.component.css']
})
export class DetailContractComponent implements OnInit {
  contracts: Rental = {
    id: '',
    lFirstName:' ',
    lLastName:' ',
    lemail:' ',
    lPhone:null,
    date:null,

    //tenat information
    tFirstName:' ',
    tLastName:' ',
    temail:' ',
    tPhone: null,
    occupants:null,
    
    //Rental Information//
    
    //House Rental Address
    country:' ',
    state:' ',
    city:' ',
    postal:null,
    //Dates
    startDate:null,
    endDate:null,
    payPeriod :' ',
    
    //financial
    rentAmount:null,
    securityDeposit:null,
    lateCharge:null,
    paymentMethod:' ',
    collector:' ',
    terms:' ',
    lSignature:' ',
    tSignature:' ',
  };
  isLoadingResults = true;
  constructor(private route: ActivatedRoute, private fs: FormService, private router: Router) { }

  ngOnInit(): void {
    this.getContractDetails(this.route.snapshot.params.id);
  }

  getContractDetails(id: any){
    this.fs.getContract(id)
    .subscribe((data: any) => {
      this.contracts = data;
      this.contracts.id = data._id;
      console.log(this.contracts);
      this.isLoadingResults = false;
    });
  }

}
