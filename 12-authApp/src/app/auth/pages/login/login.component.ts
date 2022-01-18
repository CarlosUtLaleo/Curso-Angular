import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

import Swal from "sweetalert2";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"],
})
export class LoginComponent {
	miFormulario: FormGroup = this.fb.group({
		email: ["test3@test.com", [Validators.required, Validators.email]],
		password: ["123456", [Validators.required, Validators.minLength(5)]],
	});

	constructor(private fb: FormBuilder, private Router: Router, private authService: AuthService) {}

	login() {
		const { email, password } = this.miFormulario.value;
		this.authService.login(email, password).subscribe((ok) => {
			if (ok === true) {
				this.Router.navigateByUrl("/dashboard");
			} else {
				Swal.fire("Error", ok, "error");
			}
		});
	}
}
