import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPage } from './dados.page';

describe('DadosPage', () => {
  let component: DadosPage;
  let fixture: ComponentFixture<DadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DadosPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
