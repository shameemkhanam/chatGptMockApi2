import { Component } from '@angular/core';
import { ChatGptMockService } from '../chat-gpt-mock.service';
import { ChatConversation, ChatMessage } from '../model/datatypes';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent{
  

  userInput!: string;  
  // chatbotResponse!: string;
  chatMessages: { text: string; sender: string }[] = [];


  constructor(private chatbotService: ChatGptMockService) { }

  sendMessage() {
    if (this.userInput.trim() === '') {
      return;
    }

    const userMessage = { text: this.userInput, sender: 'user' };
    this.chatMessages.push(userMessage);

    this.chatbotService.getResponse(this.userInput).subscribe(response => {
      const chatbotMessage = { text: response, sender: 'chatbot' };
      this.chatMessages.push(chatbotMessage);
    });

    this.userInput = '';
  }
  
}
