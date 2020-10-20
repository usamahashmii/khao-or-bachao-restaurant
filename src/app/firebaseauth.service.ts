import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FirebaseauthService {

  constructor(public http: HttpClient) {
    console.log('Hello FirebaseauthProvider Provider');
  }

}
