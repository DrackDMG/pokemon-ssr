import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-pages',
  imports: [],
  templateUrl: './pricing-pages.component.html',
  styleUrl: './pricing-pages.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPagesComponent implements OnInit {

  private title = inject(Title);
  private meta= inject(Meta);

  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    //document.title = 'Pricing';
    // console.log(this.platform);
    // console.log(isPlatformBrowser(this.platform));
    // console.log(isPlatformServer(this.platform));
    // if (isPlatformBrowser(this.platform)) {
    //   document.title = 'Pricing';//este ya no da error pero no se actualiza
    // }
     this.title.setTitle('Pricing'); //este es el que funciona
     this.meta.updateTag({ name: 'description', content: 'Pricing' });
     this.meta.updateTag({ name: 'og:title', content: 'Pricing' });
     this.meta.updateTag({ name: 'keywords', content: 'Pricing' });
  }
}
