import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../shared/admin/admin.service';
import { Iuser } from '../../tools/Iuser';
import { Icard } from '../../tools/Icard';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  thedata: Iuser[];
  constructor(private adminf: AdminService) { }

  ngOnInit() {
    this.adminf.getallusers().subscribe(data =>{
      console.log(data);
      this.thedata=data;
    });
  }
}
