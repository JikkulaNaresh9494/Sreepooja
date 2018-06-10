import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PoojasComponent } from './home/poojas/poojas.component';
import { PoojasdescriptionComponent } from './home/poojas/poojasdescription/poojasdescription.component';
import { PoojasiteamsComponent } from './home/poojas/poojasiteams/poojasiteams.component';
import { PoojasiteamComponent } from './home/poojas/poojasiteams/poojasiteam/poojasiteam.component';
import { PunyakeshtramsComponent } from './home/punyakeshtrams/punyakeshtrams.component';
import { PunyakeshtramdescriptionComponent } from './home/punyakeshtrams/punyakeshtramdescription/punyakeshtramdescription.component';
import { PunyakeshtramiteamsComponent } from './home/punyakeshtrams/punyakeshtramiteams/punyakeshtramiteams.component';
import { PunyakeshtramiteamComponent } from './home/punyakeshtrams/punyakeshtramiteams/punyakeshtramiteam/punyakeshtramiteam.component';

import { RegisterformComponent } from './registerform/registerform.component';
import { RouterModule, Routes } from '@angular/router';
import { SliderModule } from 'angular-image-slider';
import { TopheaderComponent } from './topheader/topheader.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ContactimageComponent } from './contactus/contactimage/contactimage.component';
import { ContactoptionsComponent } from './contactus/contactoptions/contactoptions.component';
import { ContactlocationComponent } from './contactus/Contactlocation/contactlocation.component';
import { RegisterpurohithComponent } from './registerpurohith/registerpurohith.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { UpdateprofileComponent } from './myprofile/updateprofile/updateprofile.component';
import { MyorderComponent } from './myprofile/myorder/myorder.component';
import { ChangepasswordComponent } from './myprofile/changepassword/changepassword.component';
import { BottomfooterComponent } from './bottomfooter/bottomfooter.component';
import { SliderComponent } from './home/slider/slider.component';
import{PoojasCategoriesComponent} from './poojas-categories/poojas-categories.component';
import {PoojaCategoryItemComponent} from './poojas-categories/pooja-category-item/pooja-category-item.component';
import { PoojadetailsComponent } from './poojadetails/poojadetails.component';
import { PunyakshetramdetailsComponent } from './punyakshetramdetails/punyakshetramdetails.component';
import { ContacttouchComponent } from './contactus/contacttouch/contacttouch.component';
import { BooknowComponent } from './booknow/booknow.component';

import { PunyakshetramCategoriesComponent } from './punyakshetram-categories/punyakshetram-categories.component';
import { AllPunyakshetramCategoriesComponent } from './punyakshetram-categories/all-punyakshetram-categories/all-punyakshetram-categories.component';
import { AllPunyakshetramCategoryItemsComponent } from './punyakshetram-categories/all-punyakshetram-categories/all-punyakshetram-category-items/all-punyakshetram-category-items.component';
import { AllPunyakshetramCategoryItemComponent } from './punyakshetram-categories/all-punyakshetram-categories/all-punyakshetram-category-items/all-punyakshetram-category-item/all-punyakshetram-category-item.component';
import { RiverItemsComponent } from './punyakshetram-categories/all-punyakshetram-categories/river-items/river-items.component';
import { RiverItemComponent } from './punyakshetram-categories/all-punyakshetram-categories/river-items/river-item/river-item.component';
import { ShaktipeetamsItemsComponent } from './punyakshetram-categories/all-punyakshetram-categories/shaktipeetams-items/shaktipeetams-items.component';
import { ShaktipeetamItemComponent } from './punyakshetram-categories/all-punyakshetram-categories/shaktipeetams-items/shaktipeetam-item/shaktipeetam-item.component';
import { SmallDescPipe } from './small-desc.pipe';

const approute: Routes=[
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
{path:"login",component:LoginformComponent},
{path:"register",component:RegisterformComponent},
{path:"registerpurohith",component:RegisterpurohithComponent},
{path:"updateprofile",component:UpdateprofileComponent},
{path:"myorder",component:MyorderComponent},
{path:"changepassword",component:ChangepasswordComponent},
{path:"poojadetails/:poojaid",component:PoojadetailsComponent},
{path:"punyakeshtramdetails",component:PunyakshetramdetailsComponent},
{path:"contact",component:ContactusComponent},
{path:"booknow",component:BooknowComponent},
  {path:'allpunyakshetrams',component:AllPunyakshetramCategoryItemsComponent},
  {path:'riverpunyakshetrams',component:RiverItemsComponent},
  {path:'shaktipeetams',component:ShaktipeetamsItemsComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginformComponent,
    RegisterformComponent,
   
    TopheaderComponent,
    ContactusComponent,
    ContactimageComponent,
    ContactoptionsComponent,
    ContactlocationComponent,
    RegisterpurohithComponent,
    MyprofileComponent,
    UpdateprofileComponent,
    MyorderComponent,
    ChangepasswordComponent,
    BottomfooterComponent,
    PoojasCategoriesComponent,
    PoojaCategoryItemComponent,
    HomeComponent,
    PoojasComponent,
    PoojasdescriptionComponent,
    PoojasiteamsComponent,
    PoojasiteamComponent,
    PunyakeshtramsComponent,
    PunyakeshtramdescriptionComponent,
    PunyakeshtramiteamComponent,
    PunyakeshtramiteamsComponent,
    SliderComponent,   
    PoojadetailsComponent,
    PunyakshetramdetailsComponent,
    ContacttouchComponent,
    BooknowComponent,
    PunyakshetramCategoriesComponent,
    AllPunyakshetramCategoriesComponent,
    AllPunyakshetramCategoryItemsComponent,
    AllPunyakshetramCategoryItemComponent,
    RiverItemsComponent,
    RiverItemComponent,
    ShaktipeetamsItemsComponent,
    ShaktipeetamItemComponent,
    SmallDescPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(approute,{useHash:true}),
    BrowserAnimationsModule,
    SliderModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
