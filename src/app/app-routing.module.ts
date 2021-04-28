import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Import custom modules
import { HomeComponent} from './home/home.component';
import { RecordComponent} from './record/record.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'record',
    component: RecordComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
