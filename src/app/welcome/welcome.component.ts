import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HelloWorldServiceService} from "../service/data/hello-world-service.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = "";
  welcomeMessageFromBackend: string;

  constructor(
    private route: ActivatedRoute,
    private service: HelloWorldServiceService) {
  }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(): void {
    this.service.executeHelloWorldService().subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleError(error));
  }

  getWelcomeMessageWithName(): void {
    this.service.executeHelloWorldServiceWithName(this.name).subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleError(error));
  }

  handleSuccessResponse(response): void {
    this.welcomeMessageFromBackend = response.message;
  }

  private handleError(error: any): void {
    this.welcomeMessageFromBackend = error.error.message;
  }
}
