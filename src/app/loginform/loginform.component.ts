import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ObservableserviceService } from '../observableservice.service';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private http: HttpClient,
    private router: Router, private obsserv: ObservableserviceService) { }

  ngOnInit() {
  }
  submitClick: boolean = false;
  successmsg: boolean = false;
  errormsg: boolean = false;
  email;
  password;
  
  submitLogin(formdata: NgForm) {
    this.successmsg=false;
    this.errormsg=false;


    if (formdata.valid) {
      this.email = formdata.value.email;
      this.password = formdata.value.password;
      if (this.email && this.password) {
        
      }
      else {
        // this.submitClick = true;
      }


    }
    else {
      this.submitClick = true;
    }
    const data = {
      crud: 'login',
      Email: this.email,
      Password: this.password
    };
    this.http.post("http://localhost/php_projects/sreepooja/sreepoojaservicecall.php",
      data)
      .subscribe(
        (res: any) => {
          if (res) {
            this.successmsg=true;
            this.obsserv.updateuservaild();
            this.obsserv.setuserId(res.recId);
            setTimeout(() => {
              this.router.navigate(['/', 'home']);
            }, 3000);
          }
          else {
            this.router.navigate(['/', 'login']);
          }
        },
        (err) => {
          this.errormsg=true;
          this.router.navigate(['/', 'login']);
        }
      );

  }
}
