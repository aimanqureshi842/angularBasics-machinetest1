import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './shared/component/table/table.component';
import { ListsComponent } from './shared/component/lists/lists.component';
import { CardsComponent } from './shared/component/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ListsComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
