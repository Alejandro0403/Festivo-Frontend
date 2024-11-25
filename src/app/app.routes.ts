import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { FestivoComponent } from './features/componentes/festivo/festivo.component';
import { ListaFestivosComponent } from './features/componentes/lista-festivos/lista-festivos.component';

export const routes: Routes = [
  {path: "festivo", component: FestivoComponent},
  {path: "listarfestivo", component: ListaFestivosComponent }
];
