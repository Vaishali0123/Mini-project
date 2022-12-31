import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-update-hospital',
  templateUrl: './update-hospital.component.html',
  styleUrls: ['./update-hospital.component.css']
})
export class UpdateHospitalComponent implements OnInit {
  updatehospital=new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    contact: new FormControl('')
  })
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
