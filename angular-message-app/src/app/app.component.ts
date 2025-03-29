import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = "Hello World";
  inputMessage: string = "";

  updateMessage() {
    this.message = this.inputMessage || "Hello World";
  }
}
