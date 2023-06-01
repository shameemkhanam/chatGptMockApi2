import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatGptMockService {

  private apiUrl = 'http://localhost:3000/chatbot';

  constructor(private http: HttpClient) { }

  getResponse(request: string): Observable<string> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((responses: any[]) => {
        const matchingResponse = responses.find(response => request.includes(response.request));
        return matchingResponse ? matchingResponse.response : "I'm sorry, I didn't understand your request.";
      })
    );
  }
}
