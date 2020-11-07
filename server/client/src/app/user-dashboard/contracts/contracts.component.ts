import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../forms/form.service';
import {Rental} from '../forms/rental'
@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {
data: Rental[] = [];
isLoadingResults = true;
  constructor(private fs: FormService, private route: Router) { }

  ngOnInit(): void {
    this.fs.getForm()
      .subscribe((res: any) => {
        this.data = res;
        console.log(this.data);
       
      }, err => {
        console.log(err);
        
      });
  }

  deleteList(id: any) {
    this.isLoadingResults = true;
    this.fs.deleteContract(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          alert('You have deleted')
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
