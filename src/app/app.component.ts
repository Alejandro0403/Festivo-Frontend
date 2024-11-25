import { Component } from '@angular/core';
import { ReferenciasMaterialModule } from './shared/modulos/referencias-material.module';
import { Router, RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [
    ReferenciasMaterialModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Festivos';

  public mostrarInicio=true;

  constructor (public router: Router){}

  public verificarFestivo(){
    this.router.navigate(['/festivo'])
  }

  public listarFestivos(){
    this.router.navigate(['/listarfestivo'])
  }

}
