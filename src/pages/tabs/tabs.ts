import { Component } from "@angular/core";

import { AboutPage } from "../about/about";
import { CharactersPage } from "../characters/characters";
import { StarshipPage } from "../starship/starship";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  starships = StarshipPage;
  about = AboutPage;
  characters = CharactersPage;

  constructor() {}
}
