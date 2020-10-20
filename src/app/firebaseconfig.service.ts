import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FirebaseconfigService {

  constructor() { }
  firebaseConfiguration(){
    var firebaseConfig = {
      apiKey: "AIzaSyCLNGs4cMWaP7oh97peA7iWHh--qjYK-tw",
      authDomain: "khaobachaorestaurant.firebaseapp.com",
      databaseURL: "https://khaobachaorestaurant.firebaseio.com",
      projectId: "khaobachaorestaurant",
      storageBucket: "khaobachaorestaurant.appspot.com",
      messagingSenderId: "343591894427",
      appId: "1:343591894427:web:ed505a0fc9ceacab31f53e",
      measurementId: "G-R79Q9JSLQF"
    };
    // Initialize Firebase
 //   return firebase.initializeApp(firebaseConfig);
  }
}
