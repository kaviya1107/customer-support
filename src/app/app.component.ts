import { Component } from '@angular/core';
import { ChatbotService } from './chatbot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userMessage = '';  // User's input message
  botResponse = '';  // Bot's response
  messages: { text: string, type: string }[] = [];  // Array to hold chat history

  constructor(private chatbotService: ChatbotService) {}

  sendMessage() {
    if (this.userMessage.trim()) {
      // Add the user's message to the messages array
      this.messages.push({ text: this.userMessage, type: 'user' });
      
      // Send the message via the service
      this.chatbotService.sendMessage(this.userMessage).subscribe(
        (response) => {
          this.botResponse = response.reply;  // Store the bot's response
          // Add the bot's response to the messages array
          this.messages.push({ text: this.botResponse, type: 'bot' });
        },
        (error) => {
          console.error('Error sending message:', error);
        }
      );
      
      this.userMessage = '';  // Clear the input after sending the message
    }
  }
}
