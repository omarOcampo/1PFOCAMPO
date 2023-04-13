import { Component } from '@angular/core';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

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

    estudiante: alumno[] = [
      {nombre: 'Omar',
      apellido:'Ocampo',
      curso: 4 , 
      carrera:'Chef internacional',
      },
      
      {nombre: 'Paola',
      apellido:'Perez',
      curso: 4 , 
      carrera:'Chef internacional',
      },
      {nombre: 'Leo',
      apellido:'Mendez',
      curso: 3 , 
      carrera:'Pasteleria profesional',
      }
    ];

    dataSource = new MatTableDataSource(this.estudiante);

    displayedColumns: string[] = ['nombreCompleto','curso','carrera'];


constructor (private matDialog: MatDialog){}

 abrirAlumnos(): void{
   const dialog = this.matDialog.open(AbmAlumnosComponent)

   dialog.afterClosed().subscribe((valor) =>{
    if(valor){
      this.dataSource.data = [...this.dataSource.data,valor];
    }
   })
 }
}
