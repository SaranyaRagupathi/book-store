import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PublicModule } from './public/public.module';
import { UserModule } from './user/user.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    UserModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
