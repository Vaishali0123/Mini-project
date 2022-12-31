import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms'
import {HospitalService} from '../hospital.service'
@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.css']
})
export class AddHospitalComponent implements OnInit {
  alert:boolean=false
 addhospital=new FormGroup({
  name: new FormControl(''),
  address: new FormControl(''),
  contact: new FormControl('')
 })
  constructor(private hospital:HospitalService) { }

  ngOnInit(): void {
  }
collecthospital()
{
  // console.warn(this.addhospital.value)
  return this.hospital.savehospital(this.addhospital.value).subscribe((result:any)=>{
  this.alert=true
  this.addhospital.reset({})
  })
}
closeAlert(): void
{
  this.alert=false
}
}
