import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Pokemon } from '../../pokemon/interfaces';
import { PokemonService } from '../../pokemon/services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-page',
  imports: [],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonPageComponent implements OnInit {
  public pokemon = signal<Pokemon | null>(null);
  private pokemonService = inject(PokemonService);
  private route = inject(ActivatedRoute);


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(!id) {
      return;
    }
    this.pokemonService.loasPokemon(id)
    .subscribe(pokemon => this.pokemon.set(pokemon))
  }
}

