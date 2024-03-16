import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_Services/authservice';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: any = "Parthi@nanonino.in";
  password: any = "Test1234";
  submitted: boolean = false;
  constructor(private cdr: ChangeDetectorRef, private auth: AuthService, private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.submit()


  }
  submit() {
    this.submitted = true;
    this.cdr.detectChanges();
    let sendparam = {
      email: this.email,
      password: this.password,
    }
    if (this.email == "" || this.password == "") {
      // alert("")
      this.toastr.error("Please Enter The value")
    } else {
      this.auth.login(this.email, this.password);

    }
  }
}
