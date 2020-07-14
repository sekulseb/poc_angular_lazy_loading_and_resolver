import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { App } from './app';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    App,
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule {
}
