import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatPageComponent } from './pages/chat.page/chat.page.component';
import { AdminPageComponent } from './pages/admin.page/admin.page.component';
import { LandingPageComponent } from './pages/landing.page/landing.page.component';
import { PlayerPageComponent } from './pages/player.page/player.page.component';
import { UserPageComponent } from './pages/user.page/user.page.component';
import { ZombiePageComponent } from './pages/zombie.page/zombie.page.component';

@NgModule({
  declarations: [AppComponent, LandingPageComponent, AdminPageComponent, UserPageComponent, PlayerPageComponent, ZombiePageComponent, ChatPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
