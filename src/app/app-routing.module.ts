import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Import custom modules
import { HomeComponent} from './home/home.component';
import { RecordComponent} from './record/record.component';
import { VelivertComponent} from './velivert/velivert.component';
import { HeroesComponent} from './heroes/heroes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'record',
    component: RecordComponent,
  },
  {
    path: 'velivert',
    component: VelivertComponent,
  },
  {
    path: 'heroes',
    component: HeroesComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
