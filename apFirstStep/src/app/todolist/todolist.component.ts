import { Component, OnInit } from '@angular/core';
import { ITodo, IQuery } from '../shared/models';
import { Apollo } from 'apollo-angular';

import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  todos: Observable<ITodo[]>;
  constructor(private apollo: Apollo) {
    this.todos = this.apollo.watchQuery<IQuery>({
      query: gql`
        query todos{
          todos {
            id
            taskName
          }
        }
      `
    })
      .valueChanges
      .pipe(
        map(result => result.data.todos)
      );
  }

  ngOnInit() {
  }
  }


