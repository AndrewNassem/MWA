import { Component } from '@angular/core';
import { OnlineDataService } from './online-data.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 


@Component({
  selector: 'app-root',
  template: '<router-outlet> </router-outlet>',
  styles: ['']
})
export class AppComponent {
}