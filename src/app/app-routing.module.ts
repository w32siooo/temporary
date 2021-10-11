import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './pages/admin.page/admin.page.component';
import { ChatPageComponent } from './pages/chat.page/chat.page.component';
import { LandingPageComponent } from './pages/landing.page/landing.page.component';
import { PlayerPageComponent } from './pages/player.page/player.page.component';
import { UserPageComponent } from './pages/user.page/user.page.component';
import { ZombiePageComponent } from './pages/zombie.page/zombie.page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'chat', component: ChatPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'player', component: PlayerPageComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'zombie', component: ZombiePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
