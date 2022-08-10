import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@monorepo-github-actions/api-interfaces';

@Component({
  selector: 'monorepo-github-actions-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = "https://europe-west1-monorepo-github-actions-frbs.cloudfunctions.net";
  hello$ = this.http.get<Message>(`${this.url}/api/hello`);
  constructor(private http: HttpClient) {}
}
