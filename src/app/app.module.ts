import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'
import { AdminGuard } from './seguranca/admin.guard'
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ElementDialogComponent } from './shared/element-dialog/element-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ElementDialogDeleteComponent } from './shared/element-dialog-delete/element-dialog-delete.component';

registerLocaleData(ptBr);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ElementDialogComponent,
    ElementDialogDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  providers: [ AdminGuard , { provide: LOCALE_ID, useValue: 'pt'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
