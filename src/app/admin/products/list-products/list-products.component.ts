import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy, HostListener } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { PeriodicElement } from 'src/app/core/shared/models/element.model';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  displayedColumns: string[] = ['position', 'name', 'description', 'price', 'quantity', 'state', 'platform', 'category', 'image', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    console.log("Destroy List Products Component")
  }

  updateProduct(){

  }

  deleteProduct(){

  }

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Juego 1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 2, name: 'Juego 2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 3, name: 'Juego 3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 4, name: 'Juego 4', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 5, name: 'Juego 5', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 6, name: 'Juego 6', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 7, name: 'Juego 7', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 8, name: 'Juego 8', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 9, name: 'Juego 9', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 10, name: 'Juego 10', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 11, name: 'Juego 11', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 12, name: 'Juego 12', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 13, name: 'Juego 13', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 14, name: 'Juego 14', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 15, name: 'Juego 15', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 16, name: 'Juego 16', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 17, name: 'Juego 17', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 18, name: 'Juego 18', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 19, name: 'Juego 19', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 20, name: 'Juego 20', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 21, name: 'Juego 21', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 22, name: 'Juego 22', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 23, name: 'Juego 23', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 24, name: 'Juego 24', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 25, name: 'Juego 25', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 26, name: 'Juego 26', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 27, name: 'Juego 27', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 28, name: 'Juego 28', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 29, name: 'Juego 29', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 30, name: 'Juego 30', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 31, name: 'Juego 31', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
  {position: 32, name: 'Juego 32', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quasi possimus explicabo non magni sunt corporis libero blanditiis velit!', price: 1299, quantity: 5, state:'OnSale', platform: 'Xbox', category: 'Games', image: 'https://picsum.photos/1500/1500'},
];
