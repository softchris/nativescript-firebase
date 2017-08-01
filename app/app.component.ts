import { Component } from "@angular/core";

var firebase = require("nativescript-plugin-firebase");

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="My App"></ActionBar>
    <StackLayout>
    <Button text="hi you"></Button>
    <Image src="~/images/apple.jpg"></Image>
    </StackLayout>
    <!-- Your UI components go here -->
  `
})
export class AppComponent {
  // Your TypeScript logic goes here

  constructor() {
      firebase.init({
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        iOSEmulatorFlush: true
        // Optionally pass in properties for database, authentication and cloud messaging,
        // see their respective docs.
      }).then(
          function (instance) {
            console.log("firebase.init done"); 
          },
          function (error) {
            console.log("firebase.init error: " + error);
          }
      );
    }
}
