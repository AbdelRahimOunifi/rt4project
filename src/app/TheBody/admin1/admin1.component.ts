import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../shared/admin/admin.service';
import { Icard } from '../../tools/Icard';

@Component({
  selector: 'app-admin1',
  templateUrl: './admin1.component.html',
  styleUrls: ['./admin1.component.css']
})
export class Admin1Component implements OnInit {
  thedata2: Icard[];
  constructor(private adminf: AdminService) { }

  ngOnInit() {
    this.adminf.getallcards().subscribe(data =>{
      console.log(data);
      this.thedata2=data;
    });
  }

}
