import { TestBed } from '@angular/core/testing';

import { ChatGptMockService } from './chat-gpt-mock.service';

describe('ChatGptMockService', () => {
  let service: ChatGptMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatGptMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
