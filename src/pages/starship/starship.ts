import { Component } from "@angular/core";
import { NavController, LoadingController } from "ionic-angular";
import { STARSHIPS } from "../../db/starships.db";
import { StarshipDetailPage } from "../starship-detail/starship-detail";
import { Starship } from "../../common/starship";

@Component({
  selector: "page-starship",
  templateUrl: "starship.html"
})
export class StarshipPage {
  public starships: Array<Starship> = STARSHIPS;

  constructor(
    public navCtrl: NavController,
    private loadingCtrl: LoadingController
  ) {}

  search(evt) {
    const text = evt.target.value;
    this.starships = STARSHIPS;
    this.starships = this.starships.filter(
      starship => starship.name.toLowerCase().indexOf(text) > -1
    );
  }

  navigate(starship) {
    this.loadingCtrl
      .create({
        content: "Carregando...",
        duration: 2000
      })
      .present();
    setTimeout(
      () => this.navCtrl.push(StarshipDetailPage, { starship: starship }),
      2000
    );
  }
}
