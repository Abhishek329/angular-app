import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-vendor-management',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './vendor-management.component.html',
  styleUrl: './vendor-management.component.scss'
})
export class VendorManagementComponent {

}
