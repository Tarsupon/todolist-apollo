import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist.component';
import { TodolistRoutingModule } from './todolist-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryCache } from 'apollo-cache-inmemory';

@NgModule({
  declarations: [TodolistComponent],
  imports: [
    CommonModule,
    SharedModule,
    TodolistRoutingModule,
    ApolloModule,
    HttpLinkModule,
    HttpClientModule,
    ]
})
export class TodolistModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({uri: 'http://localhost:3000'}),
      cache: new InMemoryCache()
    });
  }
}
