import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmartComponent } from './smart.component';
import { DumbComponent } from './dumb.component';
import { IsVisibleDirective } from './is-visible.directive';
import { MultiPipe } from './multi.pipe';
import { MakeBiggerDirective } from './make-bigger.directive';

@NgModule({
  declarations: [
    AppComponent,
    SmartComponent,
    DumbComponent,
    IsVisibleDirective,
    MultiPipe,
    MakeBiggerDirective
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
