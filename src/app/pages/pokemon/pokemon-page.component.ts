import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PokemonListComponent } from "../../pokemon/components/pokemon-list/pokemon-list.component";

@Component({
  selector: 'app-pokemon-page',
  imports: [PokemonListComponent],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonPageComponent { }
