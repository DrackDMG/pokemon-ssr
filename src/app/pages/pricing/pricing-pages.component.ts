import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.title.setTitle('Pricing');
    this.meta.updateTag({ name: 'description', content: 'Pricing' });
    this.meta.updateTag({ name: 'og:title', content: 'Pricing' });
    this.meta.updateTag({ name: 'keywords', content: 'Pricing' });
  }
}
