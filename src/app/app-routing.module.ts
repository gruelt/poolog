import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Import custom modules
import { HomeComponent} from './home/home.component';
import { RecordComponent} from './record/record.component';
import { VelivertComponent} from './velivert/velivert.component';
import { HeroesComponent} from './heroes/heroes.component';
import { ViewheroComponent} from './heroes/viewhero/viewhero.component';
import {GymnastesAllComponent} from './gymnastes/gymnastes-all/gymnastes-all.component';
import {LoginComponent} from './auth/login/login.component';
import {PoollogComponent} from './poollog/poollog.component';

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
  },
  {
    path: 'heroes/:id',
    component: ViewheroComponent,
  },
  {
    path: 'gymnastes',
    component: GymnastesAllComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'pool',
    component: PoollogComponent,
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
