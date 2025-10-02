import { Component, CUSTOM_ELEMENTS_SCHEMA, provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideRouter } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let compiled: HTMLElement;
  let component: App;

  @Component({
    selector: 'app-navbar',
    standalone: true,
    template: `<h1>Hola Mundo</h1>`,
  })
  class NavbarComponentMock {}

  beforeEach(async () => {

    TestBed.overrideComponent(App, {
      set: {
        imports: [NavbarComponentMock],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      },
    });
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    })
    .overrideComponent(App, {
         add: {
           imports: [NavbarComponentMock],
         },
         remove: {
           imports: [NavbarComponent],
         },
       })
    .compileComponents();



    fixture = TestBed.createComponent(App);
    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should render the navbar and router-outlet`, () => {
    expect(compiled.querySelector('app-navbar')).toBeTruthy();
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });

});
