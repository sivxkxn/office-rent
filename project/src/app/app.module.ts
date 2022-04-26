import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DealsPageComponent } from './components/deals-page/deals-page.component';
import { FavoritePageComponent } from './components/favorite-page/favorite-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ListPageComponent } from './components/list-page/list-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { NoResultPageComponent } from './components/no-result-page/no-result-page.component';
import { OfficeCardComponent } from './components/office-card/office-card.component';
import { OfficePageComponent } from './components/office-page/office-page.component';
import { OwnsOfficesPageComponent } from './components/owns-offices-page/owns-offices-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';

// import { MatButtonModule } from '@angular/material/button';
// import { MatButtonToggleModule } from '@angular/material/button-toggle';
// import { MatCardModule } from '@angular/material/card';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatIconModule } from '@angular/material/icon';
// import { MatInputModule } from '@angular/material/input';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatTableModule } from '@angular/material/table';
// import { MatToolbarModule } from '@angular/material/toolbar'

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'registration', component: RegistrationPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'list', component: ListPageComponent },
  { path: 'office', component: OfficePageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'owns-offices', component: OwnsOfficesPageComponent },
  { path: 'favorite-offices', component: FavoritePageComponent },
  { path: 'promotion', component: ProfilePageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: '**', component: NoResultPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    ListPageComponent,
    OfficePageComponent,
    ProfilePageComponent,
    RegistrationPageComponent,
    NoResultPageComponent,
    OwnsOfficesPageComponent,
    FavoritePageComponent,
    DealsPageComponent,
    LoginPageComponent,
    OfficeCardComponent,
    MatFormFieldModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
