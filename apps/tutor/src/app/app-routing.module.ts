import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './presentation/routes';

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    // useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
