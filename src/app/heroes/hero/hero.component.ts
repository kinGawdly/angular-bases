import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName(): string { // propiedad/metodo que tambien se puede usar en las interpolacioness
    return this.name.toUpperCase()
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age} `
  }

  changeHeroName(): string {
    return this.name = 'Spiderman'
  }

  changeHeroAge(): number {
    return this.age = 32
  }

  resetForm(): void {
    this.name = 'ironman'
    this.age = 45
  }


}
