import { ApplicationRef, ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { PokemonListComponent } from "../../pokemon/components/pokemon-list/pokemon-list.component";
import { PokemonListSkeletonComponent } from "./ui/pokemon-list-skeleton/pokemon-list-skeleton.component";
import { PokemonService } from '../../pokemon/services/pokemon.service';

@Component({
  selector: 'app-pokemon-page',
  imports: [PokemonListComponent, PokemonListSkeletonComponent],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonPageComponent implements OnInit {

  private pokemonService = inject(PokemonService);

  // public isLoading = signal(true);

  // private appRef = inject(ApplicationRef);

  // private $appstate = this.appRef.isStable.subscribe((isStable) => {
  //   console.log('isStable', isStable);
  // })

  ngOnInit() {
    // setTimeout(() => {
    //   this.isLoading.set(false);
    // }, 3000);

    this.loadPage();
  }

  public loadPage(page: number = 0) {
    this.pokemonService.loadPage(page).subscribe(pokemons => {
      console.log('onInit');
    })
  }

  // ngOnDestroy() {
  //   this.$appstate.unsubscribe();
  // }
}
