import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { LogsListComponent } from './components/logs-list/logs-list.component';

export const firebaseConfig = {
    apiKey: 'AIzaSyC6Dc7-ozf-QBUkHT57KPcEfzwskcF5xQs',
    authDomain: 'studymeter-41c04.firebaseapp.com',
    databaseURL: 'https://studymeter-41c04.firebaseio.com',
    storageBucket: 'studymeter-41c04.appspot.com',
    messagingSenderId: '33830952165'
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}

@NgModule({
    declarations: [
        AppComponent,
        LogsListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
