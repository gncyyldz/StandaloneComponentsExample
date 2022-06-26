import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "hello", loadComponent: () => import("./hello/hello.component")
      .then(component => component.HelloComponent)
  },
  {
    path: "example", loadChildren: () => import("./example/example.module")
      .then(module => module.ExampleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
