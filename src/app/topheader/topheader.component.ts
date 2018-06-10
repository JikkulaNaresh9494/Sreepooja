import { Component, OnInit } from '@angular/core';
import {ObservableserviceService} from '../observableservice.service';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.css']
})
export class TopheaderComponent implements OnInit {

  constructor(private obsserv:ObservableserviceService,private router:Router,private http: HttpClient) { }
  recId
 
  isuservalid=false;
  userdetails;
  ngOnInit() {
    this.obsserv.mysubobs.subscribe(res=>{
      this.isuservalid=true;
    });
    this.recId=this.obsserv.getUserId();
    const data = {
      crud: 'fetchname',
      recId:this.recId,
    
    };
    this.http.post("http://localhost/php_projects/sreepooja/sreepoojaservicecall.php",
      data)
      .subscribe(
        (res: any) => {
          alert('okk');
          console.log(res);
          if(res){
          this.userdetails=res;
          alert(this.userdetails.Fullname);
          }
          else{
            alert("Faill");
          }
        });
  }
  logout(){
    this.isuservalid=false;
    this.router.navigate(['/','login']);
  }

}
