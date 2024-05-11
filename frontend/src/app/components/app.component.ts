import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmpleadosComponent } from './empleados/empleados.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmpleadosComponent, FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
