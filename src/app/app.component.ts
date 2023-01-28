import { Component, VERSION } from "@angular/core";
import { RandomService } from "./random-service";

@Component({
  selector: "my-app",
  providers: [],
  viewProviders: [],
  template: `
    <div class="box">
      <p>AppComponent => {{ randomNo }}</p>
      <my-child></my-child>
    </div>

    <br /><br /><br />
    Read More :
    <a
      href="https://www.tektutorialshub.com/angular/self-skipself-optional-decorators-angular/"
      >Self, Optional & SkipSelf</a
    >
  `
})
export class AppComponent {
  randomNo;
  constructor(private randomService: RandomService) {
    this.randomNo = randomService.RandomNo;
  }
}
