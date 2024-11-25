
import { FestivoService } from './../../servicios/festivo.service';
import { Component } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FormsModule } from '@angular/forms';
import {ColumnMode, NgxDatatableModule, SelectionType} from '@swimlane/ngx-datatable';
import { diaFestivo } from '../../../core/entidades/festivo';

@Component({
  selector: 'app-lista-festivos',
  imports: [ReferenciasMaterialModule,
    FormsModule,
    NgxDatatableModule
  ],
  templateUrl: './lista-festivos.component.html',
  styleUrl: './lista-festivos.component.css'
})
export class ListaFestivosComponent {

  public Dato: number = 2024;
  public columnas=[
    {name: "Festivo", prop: "nombre"},
    {name: "Fecha", prop: "fecha"}
  ];
  public festivos: diaFestivo[]=[];
  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;

  constructor(private festivoServicio: FestivoService){}

  public listarFestivos(){
    if (this.Dato) {
    this.festivoServicio.obtener(this.Dato).subscribe({
      next: respuesta => {
        this.festivos = respuesta.map((festivo) => ({
          nombre: festivo.nombre,
          fecha: festivo.fecha,
        }));
      },
      error: error =>{
        window.alert(error.message);
      }
    })
    }
    else{
      alert("Ingrese un año")
    }
  }
}
