import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public resultado: String = 'resultado';
  public precoAlcool: string = '';
  public precoGasolina: string = '';
  constructor() {}

  calcular() {
    //Validar se os campos fora preenchidos
    if (this.precoAlcool && this.precoGasolina) {
      var pAlcool = parseFloat(this.precoAlcool);
      var pGasolina = parseFloat(this.precoGasolina);

      /*
        Faz cálculo (precoAlcool / precoGasolina)
        se: resultado >= 0.7 melhor utilizar gasolina
        senão: melhor utilizar álcool
      */
      var res = pAlcool / pGasolina;
      if (res >= 0.7) {
        this.resultado = 'Melhor utilizar Gasolina';
      } else {
        this.resultado = 'melhor ultilizar Álcool';
      }
    } else {
      this.resultado = 'Preencha corretamente os campos!';
    }
  }
}
