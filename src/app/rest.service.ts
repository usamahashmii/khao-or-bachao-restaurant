import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  createAccountUrl = 'http://dev.khaoaurbachao.com/Webservices/signup';
  UpdateProfileUrl = 'http://dev.khaoaurbachao.com/Webservices/update_user';
  getAllRestaurantsUrl = 'http://dev.khaoaurbachao.com/Webservices/get_restaurants';//get all retaurants , top restaurrants,new restaurants
  getSingleCategoryRestauranyUrl = 'http://dev.khaoaurbachao.com/Webservices/get_restaurants';
  filtersUrl = 'http://dev.khaoaurbachao.com/Webservices/filters';
  singleRestaurantDetailUrl = 'http://dev.khaoaurbachao.com/Webservices/restaurant_details';
  getAboutDataUrl = 'http://dev.khaoaurbachao.com/Webservices/restaurant_details';
  getRestaurantReviewsUrl = 'http://dev.khaoaurbachao.com/Webservices/restaurant_details';
  sendRestaurantReviewsUrl = 'http://dev.khaoaurbachao.com/Webservices/save_review';
  confirmReservationForUserUrl = 'http://dev.khaoaurbachao.com/Webservices/reservations';
  favouriteRestaurantUrl = 'https://dev.khaoaurbachao.com/Webservices/fav_restaurants';
  allhereRestaurantsUrl = 'https://dev.khaoaurbachao.com/Webservices/get_restaurants';
  restaurant_data = 'https://dev.khaoaurbachao.com/Webservices/restaurant_data';
  menu_categories = 'http://dev.khaoaurbachao.com/webservices/get_categories';//https://dev.khaoaurbachao.com/Webservices/item_categories
  getReservationURL =  'https://dev.khaoaurbachao.com/Webservices/reservations';
  getItemsURL =  'https://dev.khaoaurbachao.com/Webservices/items';
  postdiscountURL = 'https://dev.khaoaurbachao.com/Webservices/discounts';
  checkStatusUrl = 'https://dev.khaoaurbachao.com/Webservices/check_status_rest';
  discountShowUrl = 'https://dev.khaoaurbachao.com/Webservices/discounts';
  saveitemUrl = 'https://dev.khaoaurbachao.com/Webservices/discounts';
  singleItemSave = 'https://dev.khaoaurbachao.com/Webservices/save_item';
  reservationsURL = 'https://dev.khaoaurbachao.com/Webservices/reservations';

  loginURl = 'https://dev.khaoaurbachao.com/Webservices/login';
  getUserDataURl ="https://dev.khaoaurbachao.com/Webservices/get_user_data";
  updateProfiledataURL = "https://dev.khaoaurbachao.com/Webservices/update_restaurant_profile";
  deleteitemURL="https://dev.khaoaurbachao.com/Webservices/items";
  updateRestaurantSetting = "https://dev.khaoaurbachao.com/Webservices/restaurant_settings";
  updateDayDiscount ="https://dev.khaoaurbachao.com/Webservices/discounts";
  addSingleitem ="https://dev.khaoaurbachao.com/Webservices/items";
  forgotPasswordUrl="https://dev.khaoaurbachao.com/Webservices/forgot_password";
  discountdeleteUrl="https://dev.khaoaurbachao.com/Webservices/discounts";
  getSettingsUrl="https://dev.khaoaurbachao.com/Webservices/restaurant_settings";
  getNotificationURL="https://dev.khaoaurbachao.com/Webservices/notifications";  
  getTopRestaurantsUrl = '';
  getNewRestaurantsUrl = '';
  getAZRestaurantsUrl = '';
  getReservationDetailsUrl = '';
  getFavoritesUrl = '';
  getpreviousReservationsUrl = '';
  getupcomingReservationsUrl = '';
  getNotificationsUrl = '';
  
  constructor(public http: Http) {
    console.log('Hello RestProvider Provider');
  }
  //get notifications
  getNotifications(data){
    console.log(data);
    return this.http.post(this.getNotificationURL , data);
  }
  //send discount delete data
  setting(data){
    console.log(data);
    return this.http.post(this.getSettingsUrl , data);
  }
  //send discount delete data
  discountDelete(data){
    console.log(data);
    return this.http.post(this.discountdeleteUrl , data);
  }
  //send resturant data
  createRestaurantCall(data){
    console.log(data);
    return this.http.post(this.restaurant_data , data);
  }
  //get menu categories
  getMenuCategories(){
    return this.http.get(this.menu_categories);
  }
  //getReservation
  getReservation(data){
    console.log(data);
    return this.http.post(this.getReservationURL , data);
  }
  savemultipleItems(data){
    return this.http.post(this.singleItemSave , data);
  }
  //postOnDaysDiscount
  postOnDaysDiscount(data){
    console.log(data);
    return this.http.post(this.postdiscountURL , data);
  }
  
  //getitems
  getItems(data){
    console.log(data);
    return this.http.post(this.getItemsURL , data);
  }

   //getitems
   saveItems(data){
    console.log(data);
    return this.http.post(this.saveitemUrl , data);
  }
  //create user account
  createAccountCall(data){
    console.log(data);
    return this.http.post(this.createAccountUrl , data);
  }
  //update user data
  updateUserData(data){
    console.log(data);
    return this.http.post(this.UpdateProfileUrl , data);
  }
  //get all restaurants data
  getAllRestaurants(data){
    return this.http.post(this.getAllRestaurantsUrl , data);
  }
  //notifications
  getSingleCategoryRestaurant(data){
    console.log(data);
    return this.http.post(this.getSingleCategoryRestauranyUrl , data);
  }
  //single restaurant details
  getSingleRestaurantDetails(data){
    console.log(data);
    return this.http.post(this.singleRestaurantDetailUrl , data);
  }
  //single restaurant details
  getAboutSection(data){
    console.log(data);
    return this.http.post(this.getAboutDataUrl , data);
  }
  //single restaurant details
  getReviewSection(data){
    console.log(data);
    return this.http.post(this.getRestaurantReviewsUrl , data);
  }
  //single restaurant details
  sendReviewSection(data){
    console.log(data);
    return this.http.post(this.sendRestaurantReviewsUrl , data);
  }
  //single restaurant details
  confirmReservationForUser(data){
    console.log(data);
    return this.http.post(this.confirmReservationForUserUrl , data);
  }
   //favourite restaurant details
   favouriteRestaurant(data){
    console.log(data);
    return this.http.post(this.favouriteRestaurantUrl , data);
  }
   //get all here restaurant details
   getHereRestaurants(data){
    console.log(data);
    return this.http.post(this.allhereRestaurantsUrl , data);
  }
  //notifications
  getFiltersRestaurant(data){
    console.log(data);
    return this.http.post(this.filtersUrl , data);
  }
   //get all restaurants data
   getTopRestaurants(){
    return this.http.get(this.getTopRestaurantsUrl);
  }
   //get all restaurants data
   getNewRestaurants(){
    return this.http.get(this.getNewRestaurantsUrl);
  }
  //get az restaurants data
  getAZRestaurants(){
    return this.http.get(this.getAZRestaurantsUrl);
  }
  //reservations details
  reservations(data){
    return this.http.post(this.getReservationDetailsUrl , data);
  }
  //reservations details
  favorites(data){
    return this.http.post(this.getFavoritesUrl , data);
  }
  //reservations
  previousReservations(data){
    return this.http.post(this.getpreviousReservationsUrl , data);
  }
  upcomingReservations(data){
    return this.http.post(this.getupcomingReservationsUrl , data);
  }
  //notifications
  notifications(data){
    return this.http.post(this.getNotificationsUrl , data);
  }
  //check status of user
  checkStatus(data){
    return this.http.post(this.checkStatusUrl , data);
  }
   //check status of user
   discountShow(data){
    return this.http.post(this.discountShowUrl , data);
  }
  getDiscounts(data){
    return this.http.post(this.discountShowUrl , data);
  }
  timePeriod(data){
    console.log(data);
    return this.http.post(this.reservationsURL , data);
  }
  forgotPassword(data){
    return this.http.post(this.forgotPasswordUrl , data); 
  }
  authentication(data){
    console.log(data);
    return this.http.post(this.loginURl , data);
  }
  getUserData(data){
    console.log(data);
    return this.http.post(this.getUserDataURl , data);
  }
  updateProfileData(data){
    return this.http.post(this.updateProfiledataURL , data);
  }
  deleteItemURL(data){
    return this.http.post(this.deleteitemURL , data);
  }
  updateRestaurantSettings(data){
    return this.http.post(this.updateRestaurantSetting , data); 
  }
  updateOnDaysDiscount(data){
    return this.http.post(this.updateDayDiscount , data); 
  }
  saveSingleItem(data){
    return this.http.post(this.addSingleitem , data); 
  }
 
  
}
