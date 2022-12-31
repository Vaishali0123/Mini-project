import { Component, OnInit } from '@angular/core';
import {HospitalService} from '../hospital.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private hospital:HospitalService) { }
collection:any=[];
  ngOnInit(): void {
    this.hospital.getList().subscribe((result)=>{
      console.warn(result)
      this.collection=result
    })
  }
  deleteHospital(item: any)
{
  this.collection.splice(item-1,1)
  this.hospital.deleteHospital(item).subscribe((result)=>
  {
    console.warn("result",result)
  })
}
}
