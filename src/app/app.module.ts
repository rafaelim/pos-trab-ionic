import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { AboutPage } from "../pages/about/about";
import { TabsPage } from "../pages/tabs/tabs";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { CharactersPage } from "../pages/characters/characters";
import { StarshipPage } from "../pages/starship/starship";
import { CharacterDetailPage } from "../pages/character-detail/character-detail";
import { StarshipDetailPage } from "../pages/starship-detail/starship-detail";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    CharactersPage,
    TabsPage,
    StarshipPage,
    CharacterDetailPage,
    StarshipDetailPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    CharactersPage,
    TabsPage,
    StarshipPage,
    CharacterDetailPage,
    StarshipDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
