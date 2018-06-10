import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  formclick: boolean = false;
  constructor(private http: HttpClient, private router: Router) { }
  successmsg:boolean=false;
  fullname;
  email;
  password;
  rePassword;
  ngOnInit() {
  }
  submitRegister(formdata: NgForm) {
    this.formclick = true;
    this.fullname = formdata.value.fullname;
    this.email = formdata.value.email;
    this.password = formdata.value.password;
    this.rePassword=formdata.value.rePassword;
    if(this.rePassword.length <= 0){
      return null;
    }
    if (this.rePassword !==this.password) {
      return {
          doesMatchPassword: true
      };
  }

    const data = {
      crud: 'insert',
      Fullname: this.fullname,
      Email: this.email,
      Password: this.password
    };
    this.http.post("http://localhost/php_projects/sreepooja/sreepoojaservicecall.php",
      data)
      .subscribe(
        (res: Response) => {
          this.email = '';
          this.password = '';
          this.fullname = '';

          this.successmsg=true;
          // this.router.navigate(['/', 'login']);

        });
  }
}
