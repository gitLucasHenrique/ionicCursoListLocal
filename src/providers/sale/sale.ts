import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from 'ionic-angular';

/*
  Generated class for the SaleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SaleProvider {

  //add at ionic.cofig.json "proxyUrl" : "http://localhost:8000/api/sales"
  url = "https://node-js-lucashrds.c9users.io/api/sales";
  loader;

  constructor(public http: HttpClient,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
     }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando.."
      });
    this.loader.present();
  }
  
  dismissLoading(){
    this.loader.dismissAll();
  }

  showTryAgainAlert(onTryAgainClick) {
    const confirm = this.alertCtrl.create({
      title: 'Erro',
      message: "Houve um erro, deseja tentar novamente?",
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Agree clicked');
            if (onTryAgainClick){
              onTryAgainClick();
            }
          }
        }
      ]
    });
    confirm.present();
  }

  getAll() {
    this.presentLoading();
    return this.http.get(this.url);
  }

  add(sale) {
    this.presentLoading();
    return this.http.post(this.url, sale);
  }

  getById(id) {
    this.presentLoading();
    return this.http.get(this.url + id);
  }
}
