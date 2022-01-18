import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import Swal from "sweetalert2";
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

	constructor(private fb: FormBuilder, private Router: Router, private authService: AuthService) {}

	login() {
		if (this.miFormulario.valid) {
			const { email, name, password } = this.miFormulario.value;
			this.authService.registro(email, password, name).subscribe((resp) => {
				if (resp === true) {
					console.log(this.miFormulario.value);
					this.Router.navigateByUrl("/dashboard");
				} else {
					Swal.fire("Error", resp, "error");
				}
			});
		}
	}
}
