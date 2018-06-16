import { Component } from "@angular/core";
import { NavController, LoadingController } from "ionic-angular";
import { CHARACTERS } from "../../db/characters.db";
import { CharacterDetailPage } from "../character-detail/character-detail";
import { Character } from "../../common/character";

@Component({
  selector: "page-characters",
  templateUrl: "characters.html"
})
export class CharactersPage {
  public characters: Array<Character> = CHARACTERS;

  constructor(
    public navCtrl: NavController,
    private loadingCtrl: LoadingController
  ) {}

  search(evt) {
    const text = evt.target.value;
    this.characters = CHARACTERS;
    this.characters = this.characters.filter(
      char => char.name.toLowerCase().indexOf(text) > -1
    );
  }

  navigate(character) {
    this.loadingCtrl
      .create({
        content: "Carregando...",
        duration: 2000
      })
      .present();
    setTimeout(
      () => this.navCtrl.push(CharacterDetailPage, { character: character }),
      2000
    );
  }
}
