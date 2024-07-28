import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface GeminiResponse {
  contents: Array<{ text: string }>;
}

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private readonly apiUrl = 'https://your-gemini-api-endpoint.com';
  private readonly apiKey = 'YOUR_API_KEY';

  constructor(private httpClient: HttpClient) {}

  generateText(prompt: string): Observable<GeminiResponse> {
    return this.httpClient.post<GeminiResponse>(
      this.apiUrl,
      {
        contents: [{ text: prompt }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.apiKey}`,
        },
      }
    );
  }
}

