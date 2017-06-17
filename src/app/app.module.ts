import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {FirstpagePage} from "../pages/firstpage/firstpage";
import {SecondPage} from "../pages/second/second";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FirstpagePage,
    SecondPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'bottom',
      platforms: {
        android: {
          tabsPlacement: 'bottom',
          tabsHideOnSubPages: true,
          iconMode:"ios",
          pageTransitionDelay:'16',
          activator:"highlight",
          pageTransition:"ios-transition"
        },
        ios: {
          tabsPlacement: 'bottom',
          tabsHideOnSubPages: true,
          showCancelButton:true,
          pageTransitionDelay:'16',
          activator:"highlight",
          pageTransition:"ios-transition"
        },
        windows:
          {
            tabsPlacement: 'bottom',
            tabsHideOnSubPages: true,
            pageTransitionDelay:'16',
            activator:"highlight",
            pageTransition:"ios-transition"
          }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FirstpagePage,
    SecondPage
  ],
  providers: []
})
export class AppModule {}
