import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss']
})
export class ServerErrorComponent implements OnInit {
  error: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.error = navigation?.extras?.state?.error;
    // syntax above is 'optional chaining', instead of using the previous syntaxt below
    // this.error = navigation && navigation.extras && navigation.extras.state && navigation.extras.state.error;
   }

  ngOnInit(): void {
  }

}
