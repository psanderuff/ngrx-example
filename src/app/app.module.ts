import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './components/details/details.component';
import { TodoComponent } from './components/todo/todo.component';
import { appReducer } from './store/app.state';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffectService } from './services/todo.effect.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({app: appReducer}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([TodoEffectService])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
