import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"],
})
export class LoginComponent {
	miFormulario: FormGroup = this.fb.group({
		email: ["", [Validators.required, Validators.email]],
		password: ["", [Validators.required, Validators.minLength(5)]],
	});

	constructor(private fb: FormBuilder, private Router: Router) {}

	login() {
		console.log(this.miFormulario.value);
		this.Router.navigateByUrl("/dashboard");
	}
}
