import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment as ENV } from "../../environments/environment";
import { ContactModel } from '../model/contact-model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactList: ContactModel[]= [];
  constructor(private http: HttpClient) 
  { }

   getAll()
   {
   return this.http.get<ContactModel[]>(ENV.contactUrl)
   }

   getAllDetails(contactId:number)
  {
  return this.http.get<ContactModel>(`${ENV.contactUrl}/${contactId}`);
  }

 create(item: ContactModel) 
 { 
  var body=JSON.stringify(item);
  var url=`${ENV.contactUrl}`;
  var headers=new HttpHeaders({"content-Type":"application/json"})
  return this.http.post<ContactModel>(url,body,{headers:headers});

}

  update(item:ContactModel)
  {
 var body = JSON.stringify(item);      // sending/erxtracting the o/p in json format
 var url = `${ENV.contactUrl}/${item.ContactId}`;
 var headers = new HttpHeaders({
  "content-Type": "application/json"                  // setting the content type to json
 })
 return this.http.put<ContactModel>(url, body, {headers:headers});   // updating the values
 }

}
