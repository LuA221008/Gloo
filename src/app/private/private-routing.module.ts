import { ModuleMantenimientoComponent } from './module-mantenimiento/module-mantenimiento.component';
import { ModuleUseComponent } from './module-use/module-use.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ModuleSecurityComponent } from './module-security/module-security.component';
import { PageModulesComponent } from './page-modules/page-modules.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'modules',
    component: PageModulesComponent,
  },
  {
    path: 'security',
    component: ModuleSecurityComponent,
  },
  {
    path: 'chatboot',
    component: ChatbotComponent,
  },
  {
    path: 'use',
    component: ModuleUseComponent,
  },
  {
    path: 'mantenimiento',
    component: ModuleMantenimientoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
