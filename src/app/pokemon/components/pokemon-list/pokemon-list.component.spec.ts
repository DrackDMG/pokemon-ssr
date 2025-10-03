import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PokemonListComponent } from './pokemon-list.component';
import { SimplePokemon } from '../../interfaces';

describe('PokemonListComponent', () => {
  let fixture: ComponentFixture<PokemonListComponent>;
  let compiled: HTMLElement;
  let component: PokemonListComponent;

  const mockPokemons: SimplePokemon[] = [
    { id: '1', name: 'bulbasaur' },
    { id: '2', name: 'ivysaur' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonListComponent],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    }).compileComponents();
    fixture = TestBed.createComponent(PokemonListComponent);
    compiled = fixture.nativeElement as HTMLElement;
    fixture.componentRef.setInput('pokemons', []);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render the pokemon list with 2 app-pokemon-card', () => {
    fixture.componentRef.setInput('pokemons', mockPokemons);
    fixture.detectChanges();
    expect(compiled.querySelectorAll('app-pokemon-card').length).toBe(
      mockPokemons.length
    );
  });

  it('should render "No hay pokémons"', () => {
    fixture.componentRef.setInput('pokemons', []);
    fixture.detectChanges();

    expect(compiled.querySelector('div')?.textContent).toContain(
      ' No hay pokemons'
    );
  });

});
