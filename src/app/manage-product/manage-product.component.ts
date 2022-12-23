import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ArpanProductsService } from '../arpan-products.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductsComponent implements OnInit {

  constructor(private _manageProduct:ArpanProductsService) { };

  public dataTitle = "Your Selected Products are showing below";

  public fetching = false
  public editIndex: any;

  public products = [
    {
    id: '',
    name: '',
    price: ''
  }
  //   {
  //   id: 'p1',
  //   name: 'Laptop',
  //   price: 45000
  // },
  // {
  //   id: 'p2',
  //   name: 'LMobile',
  //   price: 10000
  // },
  // {
  //   id: 'p3',
  //   name: 'TV',
  //   price: 7000
  // },
  // {
  //   id: 'p4',
  //   name: 'Fridge',
  //   price: 25000
  // }
]

  ngOnInit(): void {
    this.onFetchProduct()
  }
  onAddProduct(id: { value: any; }, name: { value: any; }, price: { value: any; }){
    if(this.editmode){
      this.products[this.editIndex] ={
        id: id.value,
      name:name.value,
      price:price.value
      }
      this.id.nativeElement.value = '';
    this.name.nativeElement.value = '';
    this.price.nativeElement.value = '';
    }else{
    this.products.push({
      id: id.value,
      name:name.value,
      price:price.value
    })
  }
  }
  onSaveProduct(){
    this._manageProduct.saveProduct(this.products).subscribe(
      (response) => console.log(response)
    )
  }

  onFetchProduct(){
    this.fetching = true
    this._manageProduct.fetchProduct().subscribe(
      (response) => {
      // console.log(response))
      const data = JSON.stringify(response)
      console.log(data)
      this.products  = JSON.parse(data)
      this.fetching = false
    }
    )
  }

  onDeleteProduct(id: number){
    if(confirm("Do you really want to delete")){
      this.products.splice(id, 1)
    }
  }
  @ViewChild ('id') id:ElementRef | any;
  @ViewChild ('name') name:ElementRef | any;
  @ViewChild ('price') price:ElementRef | any;

  editmode:boolean = false;

  onEditProduct(index:number){
    this.editmode = true;
    this.editIndex = index;
    console.log(this.products[index]);
    this.id.nativeElement.value = this.products[index].id;
    this.name.nativeElement.value = this.products[index].name;
    this.price.nativeElement.value = this.products[index].price;
  }

}
