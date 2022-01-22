import { Component } from '@angular/core';
import { faStackOverflow, faGithub, faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { TranslationService } from 'src/Services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'MyPortFolio';
  faFacebookSquare = faFacebookSquare;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faStackOverflow = faStackOverflow;

  active = 1;

  constructor(public translate: TranslationService)
  {
  }
}
