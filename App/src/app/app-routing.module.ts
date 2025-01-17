import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },

  {
    path: '',
    loadChildren: () => import('./all_tabs/tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: '',
    loadChildren: () => import('./all_tabs/tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: '',
    loadChildren: () => import('./all_tabs/tabs2/tabs2.module').then(m => m.Tabs2PageModule)
  },
  {
    path: '',
    loadChildren: () => import('./all_tabs/tabs3/tabs3.module').then(m => m.Tabs3PageModule)
  },

  {
    path: 'tab4',
    loadChildren: () => import('./all_tabs/tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./all_tabs/tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./all_tabs/tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'tab6',
    loadChildren: () => import('./all_tabs/tab6/tab6.module').then( m => m.Tab6PageModule)
  },
  {
    path: 'tab7',
    loadChildren: () => import('./all_tabs/tab7/tab7.module').then( m => m.Tab7PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'editar-noticia',
    loadChildren: () => import('./editar-noticia/editar-noticia.module').then( m => m.EditarNoticiaPageModule)
  },
  {
    path: 'nova-noticia',
    loadChildren: () => import('./nova-noticia/nova-noticia.module').then( m => m.NovaNoticiaPageModule)
  },
  {
    path: 'detalhes-informes',
    loadChildren: () => import('./detalhes-informes/detalhes-informes.module').then( m => m.DetalhesInformesPageModule)
  },
  {
    path: 'req-formulario',
    loadChildren: () => import('./req-formulario/req-formulario.module').then( m => m.ReqFormularioPageModule)
  },
  {
    path: 'req-pedidos',
    loadChildren: () => import('./req-pedidos/req-pedidos.module').then( m => m.ReqPedidosPageModule)
  },
  {
    path: 'env-mensagem',
    loadChildren: () => import('./env-mensagem/env-mensagem.module').then( m => m.EnvMensagemPageModule)
  },
  {
    path: 'detalhes-eventos',
    loadChildren: () => import('./detalhes-eventos/detalhes-eventos.module').then( m => m.DetalhesEventosPageModule)
  },
  {
    path: 'novos-eventos',
    loadChildren: () => import('./novos-eventos/novos-eventos.module').then( m => m.NovosEventosPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
