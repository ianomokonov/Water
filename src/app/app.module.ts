import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Формы
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

//Модальные окна
import { ModalModule, BsModalService } from 'ngx-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './services/modal.service';

//HTTP запросы
import { HttpClientModule, HttpClient } from '@angular/common/http';

//Компоненты
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LoadService } from './services/load.service';
import { LoadComponent } from './load/load.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FullInfoComponent } from './full-info/full-info.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientRatesComponent } from './client-rates/client-rates.component';
import { InfoComponent } from './info/info.component';
import { BusinessComponent } from './business/business.component';
import { ReferenceBookComponent } from './reference-book/reference-book.component';
import { BuisenessRatesComponent } from './buiseness-rates/buiseness-rates.component';
import { ClientsServicesComponent } from './clients-services/clients-services.component';
import { BusinessServicesComponent } from './business-services/business-services.component';
import { WaterServicesComponent } from './water-services/water-services.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ModalComponent,
    LoadComponent,
    ContactsComponent,
    FullInfoComponent,
    AboutComponent,
    HomeComponent,
    ClientsComponent,
    ClientRatesComponent,
    InfoComponent,
    BusinessComponent,
    ReferenceBookComponent,
    BuisenessRatesComponent,
    ClientsServicesComponent,
    BusinessServicesComponent,
    WaterServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FormBuilder, HttpClient, ModalService, BsModalService, LoadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
