import { SaleLocalProvider } from './../../providers/sale-local/sale-local';
import { SaleProvider } from './../../providers/sale/sale';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  list = [];
  showLocalData = true;

  constructor(
    public saleLocalProvider: SaleLocalProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public saleProvider: SaleProvider,
    public alertCtrl: AlertController) {
    // If we navigated to this page, we will have an item available as a nav param
  }

  ionViewDidEnter(){
    this.getData();
  }

  getData(){
    this.getLocalData().then((data) =>{
        this.list = data;
    })
  }

  getLocalData(){
    return this.saleLocalProvider.getAll().then((data) =>{
      return data;
    })
  }

  getDataFromAPI(){
    this.saleProvider.getAll().subscribe((data: any) =>{
      this.saleProvider.dismissLoading();
      this.list = data;
      this.saleLocalProvider.addList(this.list).then((data) =>{

      })
    }, (error) => {
      this.saleProvider.showTryAgainAlert(() =>{
        this.saleProvider.dismissLoading();
        this.getData();
      });
    })
  }

  doRefresh(refresher){
    refresher.complete();
    this.getData();
  }
  
  onClick(clickedSale){
    this.navCtrl.push("DetailsPage", {sale: clickedSale});
  }

  add(){
    this.navCtrl.push("AddEditPage");
  }
}
