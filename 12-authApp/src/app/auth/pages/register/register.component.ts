import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
	selector: "app-register",
	templateUrl: "./register.component.html",
	styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
	miFormulario: FormGroup = this.fb.group({
		email: ["", [Validators.required, Validators.email]],
		password: ["", [Validators.required, Validators.minLength(5)]],
		name: ["Carlos", [Validators.required]],
	});

	constructor(private fb: FormBuilder, private Router: Router) {}

	login() {
		console.log(this.miFormulario.value);
		this.Router.navigateByUrl("/dashboard");
	}
}
