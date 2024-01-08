import { Component, OnInit } from '@angular/core';
import{ Router } from "@angular/router";
import { RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-iniciar-sessio-ramos',
  templateUrl: './iniciar-sessio-ramos.component.html',
  styleUrls: ['./iniciar-sessio-ramos.component.css'],
})
export class IniciarSessioRamosComponent implements OnInit {
  jugador:string = ''
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.jugador.trim() !== '') {
      this.router.navigate(['/home']);
    } else {
      // Mostrar un mensaje de error si algún campo está vacío
      alert("Siusplau, emplena tots els camps");
    }
  }
}
