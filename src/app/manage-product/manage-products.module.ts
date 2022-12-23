
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArpanProductsService } from '../arpan-products.service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ArpanProductsService]
})
export class ManageProductsModule {

  constructor(){}
}
