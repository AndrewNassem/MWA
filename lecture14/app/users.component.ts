import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OnlineDataService } from './online-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  template: `
    <p>
      users works!
    </p>
  `,
  styles: []
})
export class UsersComponent  {

  private subscription: Subscription;

  id: number;

  constructor(private activatedRoute: ActivatedRoute , private onlineData: OnlineDataService) {
    console.log("Here")
    this.subscription = activatedRoute.params.subscribe(
      (params: any) => {
        this.id = params['uiid']
        console.log(this.id)
        console.log("results is "+JSON.stringify(onlineData.getItemById(this.id)));
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
