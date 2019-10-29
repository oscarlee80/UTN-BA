import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  modificado = false;

  cambiar_title() {
    if (this.title != "angular") {
    this.title = "MODIFICADO";
    this.modificado = true;
    } else {
    this.title = "angular";
    this.modificado = false;
    }
  }
  resultado = 5;
  intentos = 5;
  numero;
  mensaje;
  perdiste = false;
  estado;
  adivinar () {
    if (this.resultado == this.numero) {
      this.perdiste = true;
      this.mensaje = "Acertaste!";
      this.estado = "ok";
    } else {
      if (this.intentos == 1) {
        this.perdiste = true;
        this.mensaje = "PERDISTE";
        this.estado = "error";
        } else {
          if (this.resultado > this.numero) {
            this.intentos = this.intentos - 1;
            this.mensaje = "El número que ingresaste es menor. Te quedan "+this.intentos+" intentos.";
          } else if (this.resultado < this.numero) {
            this.intentos = this.intentos - 1;
            this.mensaje = "El número que ingresaste es mayor. Te quedan "+this.intentos+" intentos.";
          }
        }   
    }
  }

  numero1;
  numero2;
  respuesta;
  positivo;
  negativo;
  rPositivo = false;
  rNegativo = true;

  multiplicar () {
    this.respuesta = this.numero1 * this.numero2;
    if  (this.respuesta > 0) {
      this.rPositivo = true;
      this.rNegativo = false;
    }
  }
  dividir () {
    this.respuesta = this.numero1 / this.numero2;
    if  (this.respuesta > 0) {
      this.rPositivo = true;
      this.rNegativo = false;
    }
  }
  sumar () {
    this.respuesta = this.numero1 + this.numero2;
    if  (this.respuesta > 0) {
      this.rPositivo = true;
      this.rNegativo = false;
    }
  }
  restar () {
    this.respuesta = this.numero1 - this.numero2;
    if  (this.respuesta > 0) {
      this.rPositivo = true;
      this.rNegativo = false;
    }
  }
}