import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FeatureBResolverData } from './feature-b.resolver.service';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'feature-b',
  templateUrl: './feature-b.html',
  styleUrls: ['./feature-b.css']
})
export class FeatureB implements OnInit, OnDestroy {

  private _subscription: Subscription;

  public resolverData: FeatureBResolverData;

  constructor(private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._subscription = this._route.data.subscribe((routerData: Data) => {
      this.resolverData = routerData.dataFromFeatureBResolver;
    });
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

}
