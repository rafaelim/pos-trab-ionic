import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Starship } from "../../common/starship";

/**
 * Generated class for the StarshipDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-starship-detail",
  templateUrl: "starship-detail.html"
})
export class StarshipDetailPage {
  public starship: Starship;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.starship = this.navParams.get("starship");
  }
}
