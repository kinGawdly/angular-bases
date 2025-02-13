import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule // se importa el CommonModule, por que estamos usando modulos encapsulados, onda en ccada archivo y el appModule lo trae por defecto
  ]
})


export class HeroesModule {}
