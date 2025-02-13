import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Hulk', 'Ironman', 'She hulk', 'Thor']
  public deletedHero?: string;

  removeLastHero(): void {

    this.deletedHero = this.heroNames.pop(); // cuando tenga un valor. entonces quiere decir que hay un heroe que borré
  }


}
