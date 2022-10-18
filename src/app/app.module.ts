import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingHomeComponent } from './shopping-home/shopping-home.component';
import { VegetableItemsComponent } from './vegetable-items/vegetable-items.component';
import { FruitItemsComponent } from './fruit-items/fruit-items.component';
import { MeatItemsComponent } from './meat-items/meat-items.component';
import { SpiceItemsComponent } from './spice-items/spice-items.component';
import { DairyItemsComponent } from './dairy-items/dairy-items.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ShipOutComponent } from './ship-out/ship-out.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingHomeComponent,
    VegetableItemsComponent,
    FruitItemsComponent,
    MeatItemsComponent,
    SpiceItemsComponent,
    DairyItemsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    ShipOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
