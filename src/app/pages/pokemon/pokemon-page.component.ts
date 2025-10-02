import { ApplicationRef, ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { PokemonListComponent } from "../../pokemon/components/pokemon-list/pokemon-list.component";
import { PokemonListSkeletonComponent } from "./ui/pokemon-list-skeleton/pokemon-list-skeleton.component";
import { PokemonService } from '../../pokemon/services/pokemon.service';
import { SimplePokemon } from '../../pokemon/interfaces';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-pokemon-page',
  imports: [PokemonListComponent, PokemonListSkeletonComponent],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonPageComponent implements OnInit {

  private pokemonService = inject(PokemonService);
  public pokemons = signal<SimplePokemon[]>([]);

  private route = inject(ActivatedRoute);

  public currentPage = toSignal(
    this.route.queryParamMap.pipe(
      map(params => params.get('page') ?? 1),
      map(page => ( isNaN(+page) ? 1 : +page)),
      map(page => Math.max(1, page))
    )
  )
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
    const currentPage = this.currentPage()! + page;
    this.pokemonService.loadPage(currentPage).subscribe(pokemons => {
      this.pokemons.set(pokemons);
      //console.log('onInit');
    })
  }

  // ngOnDestroy() {
  //   this.$appstate.unsubscribe();
  // }
}
