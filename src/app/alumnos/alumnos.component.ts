import { Component } from '@angular/core';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AlumnosServiciosService } from '../servicios/alumnos-servicios.service';
import { Observable } from 'rxjs';
import { TimeService, Time } from '../servicios/time.service';


export interface alumno{
  nombre: string;
  apellido: string;
  curso: number;
  carrera: string;
}



@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent {

    hora$: Observable<string>;


    dataSource = new MatTableDataSource<alumno>();

    displayedColumns: string[] = ['nombreCompleto','curso','carrera'];


constructor (private matDialog: MatDialog,
             private alumnosService: AlumnosServiciosService,
             private timeServicio: TimeService)
             {
               this.alumnosService.obtenerAlumno
               .subscribe((alumnos) => {this.dataSource.data=alumnos;
              })
              this.hora$ = this.timeServicio.reloj;
             };
 
 abrirAlumnos(): void{
   const dialog = this.matDialog.open(AbmAlumnosComponent)

   dialog.afterClosed().subscribe((valor) =>{
    if(valor){
      this.dataSource.data = [...this.dataSource.data,valor];
    }
   })
 }
}
