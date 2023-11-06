import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaListagemComponent } from './tela-listagem.component';

describe('TelaListagemComponent', () => {
  let component: TelaListagemComponent;
  let fixture: ComponentFixture<TelaListagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaListagemComponent]
    });
    fixture = TestBed.createComponent(TelaListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
