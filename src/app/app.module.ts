import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent
  ],
  imports: [
    RouterModule.forRoot([{ path: 'first-page', component: FirstPageComponent }]),
    BrowserModule.withServerTransition({ appId: 'serverApp' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
