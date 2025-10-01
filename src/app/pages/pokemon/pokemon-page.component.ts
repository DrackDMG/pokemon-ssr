import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { PokemonListComponent } from "../../pokemon/components/pokemon-list/pokemon-list.component";
import { PokemonListSkeletonComponent } from "./ui/pokemon-list-skeleton/pokemon-list-skeleton.component";

@Component({
  selector: 'app-pokemon-page',
  imports: [PokemonListComponent, PokemonListSkeletonComponent],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonPageComponent implements OnInit {

  public isLoading = signal(true);

  ngOnInit() {
    setTimeout(() => {
      this.isLoading.set(false);
    }, 3000);
  }
}
