import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {

  public texto : String = "Olaaa";
  public numero : number;
  public qualquerCoisa : any;
  
  public testeDeFuncaoVoid():void {
    alert("Trouxão " + this.texto);
  }

  public testeDeFuncaoParam(a:number, b:number):number {
    return (a + b);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //this.testeDeFuncaoVoid();
    //alert("Resultado = " + this.testeDeFuncaoParam(2,2))
    console.log('ionViewDidLoad NoticiasPage');
  }

}
