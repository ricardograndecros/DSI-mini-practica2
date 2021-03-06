import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTableComponent } from './main-table/main-table.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainTableComponent,
    SearchBarComponent,
    SearchfilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
