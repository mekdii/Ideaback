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
  contracts: Rental[] =[];
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
