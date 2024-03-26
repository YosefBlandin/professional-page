import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterLink } from '@angular/router';
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ButtonComponent, InputComponent } from '@shared/components';
import { MatButton } from '@angular/material/button';

@Component({
	selector: 'professional-page-home',
	standalone: true,
	imports: [
		RouterLink,
		ReactiveFormsModule,
		InputComponent,
		ButtonComponent,
		MatFormFieldModule,
		MatInputModule,
		MatDatepickerModule,
		MatButton,
		MatProgressSpinnerModule
	],
	providers: [provideNativeDateAdapter()],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	constructor(
	) { }


}
