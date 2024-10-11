import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { FormsModule } from '@angular/forms';
import { ContainsPipe } from './contains.pipe';
import { HighlightDirective } from './highlight.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsQpCategoryComponent } from './products-qp-category/products-qp-category.component';

@NgModule({
  declarations: [ //liste des composant attacher à ce module 
    // des pipes et des directives que nous avons crées
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent,
    ContainsPipe,
    HighlightDirective,
    NotFoundComponent,
    ProductsCategoryComponent,
    ProductsQpCategoryComponent
  ],
  imports: [ //liste des modules à utiliser
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], //service à utiliser
  bootstrap: [AppComponent] //les composant à appeler 
})
export class AppModule { }
