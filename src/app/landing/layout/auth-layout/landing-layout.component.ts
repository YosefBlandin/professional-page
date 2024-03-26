import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'professional-page-landing-layout',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './landing-layout.component.html',
	styleUrl: './landing-layout.component.scss'
})
export class LandingLayoutComponent { }
