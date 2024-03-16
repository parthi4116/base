import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_Services/authservice';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  fname: any = "";
  lname: any = "";
  email: any = "";
  password: any = "";
  submitted: boolean = false;
  constructor(private cdr: ChangeDetectorRef, private auth: AuthService) { }

  ngOnInit(): void {
  }
  submit() {
    this.submitted = true;
    this.cdr.detectChanges();
    let sendparam = {
      email: this.email,
      password: this.password,
      fname: this.fname,
      lname: this.lname
    }
    if (this.email == "" || this.fname == "" || this.lname == "" || this.password == "") {
      alert("Please Enter The value")

    } else {
      this.auth.createUser(sendparam);

    }
  }
}
