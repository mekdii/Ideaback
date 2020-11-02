import { Component, OnInit } from '@angular/core';
import { FormService } from '../templates/forms/form.service';
import {Rental} from '../templates/forms/rental'
@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {
data: Rental[] = [];
  constructor(private fs: FormService) { }

  ngOnInit(): void {
    this.fs.getForm()
      .subscribe((res: any) => {
        this.data = res;
        console.log(this.data);
       
      }, err => {
        console.log(err);
        
      });
  }

  

}
