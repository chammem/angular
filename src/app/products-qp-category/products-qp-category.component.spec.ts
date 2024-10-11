import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsQpCategoryComponent } from './products-qp-category.component';

describe('ProductsQpCategoryComponent', () => {
  let component: ProductsQpCategoryComponent;
  let fixture: ComponentFixture<ProductsQpCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsQpCategoryComponent]
    });
    fixture = TestBed.createComponent(ProductsQpCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
