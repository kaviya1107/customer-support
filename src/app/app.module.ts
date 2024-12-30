import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import this module
import { AppComponent } from './app.component';
import { NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  // Add it to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
