import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AlumnosModule } from '../alumnos/alumnos.module';
import { DirectivasModule } from '../directivas/directivas.module';
import { AlumnosComponent } from '../alumnos/alumnos.component';



MatSidenavModule
@NgModule({
  declarations: [
  PanelComponent,
  
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule, 
    AlumnosModule,
    DirectivasModule
    
  ],
  exports: [
    PanelComponent,
    AlumnosComponent
  ]
})
export class PanelModule { 
  
}
