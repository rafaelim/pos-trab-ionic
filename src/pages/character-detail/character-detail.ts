import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Character } from "../../common/character";

@Component({
  selector: "page-character-detail",
  templateUrl: "character-detail.html"
})
export class CharacterDetailPage {
  public character: Character;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.character = this.navParams.get("character");
  }
}
