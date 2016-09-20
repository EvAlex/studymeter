import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LogsListComponent } from './components/logs-list/logs-list.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';

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
        LogsListComponent,
        CoursesListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
        routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
