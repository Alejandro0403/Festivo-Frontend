import { Component } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FormsModule} from '@angular/forms';
import { FestivoService } from '../../servicios/festivo.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-festivo',
  imports: [
    ReferenciasMaterialModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  templateUrl: './festivo.component.html',
  styleUrl: './festivo.component.css'
})
export class FestivoComponent {
  public Fecha: Date | undefined;
  public Resultado:String="";

  constructor(private festivoServicio: FestivoService ){
  }

  public verificarFecha(){
    if (this.Fecha) {
      const anno = this.Fecha.getFullYear();
      const mes = this.Fecha.getMonth() + 1;
      const dia = this.Fecha.getDate();
    this.festivoServicio.verificar(anno,mes,dia).subscribe({
      next: res => {
        this.Resultado = res;
        alert(this.Resultado);
        },
      error: error =>{
        window.alert (error.message);
        }
      });
    }
    else{
      alert ('Ingrese una fecha valida');
    }
  }
}
