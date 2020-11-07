import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from '../../templates/forms/form.service';
import { Rental } from '../../templates/forms/rental';
import * as  jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
@Component({
  selector: 'app-detail-contract',
  templateUrl: './detail-contract.component.html',
  styleUrls: ['./detail-contract.component.css']
})
export class DetailContractComponent implements OnInit {
   @ViewChild("comp")  comp: ElementRef;
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
  ngAfterViewInit() {
    console.log(this.comp.nativeElement);
    this.comp.nativeElement.click();
    setTimeout(() => {
        console.log(this.comp.nativeElement.id);
        this.comp.nativeElement.click();
      }, 50000);
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
  downloadPdf(){
    let comp = this.comp.nativeElement;
    const doc = new jsPDF('p','pt', 'a4');
   let specilElementHandlers = {
     '#comp': function(element, renderer){
          return true;
     }
   };
 
  
     doc.fromHTML(comp.innerHTML,15,15,{
      'width': 200,
      'elementHandlers': specilElementHandlers
    });
    doc.save('contract.pdf')

  }
}
