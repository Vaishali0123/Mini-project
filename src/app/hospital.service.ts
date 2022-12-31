import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HospitalService {
url="http://localhost:3000/hospitals"
  constructor(private http:HttpClient) { }
  getList()
  {
   return this.http.get(this.url);
  }
  
  savehospital(data:any)
{
  console.warn("service",data)
  return this.http.post(this.url,data)
  }
  deleteHospital(id:any)
  {
    return this.http.delete('${this.url}/${id}')
  }
}
