import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { PageModulesComponent } from './page-modules/page-modules.component';
import { NavbarPrivateComponent } from '../navbar-private/navbar-private.component';
import { ModuleSecurityComponent } from './module-security/module-security.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ModuleUseComponent } from './module-use/module-use.component';
import { ModuleMantenimientoComponent } from './module-mantenimiento/module-mantenimiento.component';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    PageModulesComponent,
    NavbarPrivateComponent,
    ModuleSecurityComponent,
    ChatbotComponent,
    ModuleUseComponent,
    ModuleMantenimientoComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    YouTubePlayerModule,
    FormsModule,
    MatGridListModule,
  ],
  exports: [ChatbotComponent],
})
export class PrivateModule {}
