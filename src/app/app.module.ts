import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoService } from './service/todo.service';
import {Ng2Webstorage} from 'ngx-webstorage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2Webstorage
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
