import { Component, OnInit } from '@angular/core';
import{ Router } from "@angular/router";
import { RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { UsuariService } from "../../usuari.service";


@Component({
  selector: 'app-iniciar-sessio-ramos',
  templateUrl: './iniciar-sessio-ramos.component.html',
  styleUrls: ['./iniciar-sessio-ramos.component.css'],
})
export class IniciarSessioRamosComponent implements OnInit {
  jugador:string = ''
  score:number = 0
  constructor(private router: Router, public usuariService: UsuariService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.jugador.trim() !== '') {
      localStorage.setItem(this.jugador, String(this.score));
      this.router.navigate(['/home']);
    }
  }
}
