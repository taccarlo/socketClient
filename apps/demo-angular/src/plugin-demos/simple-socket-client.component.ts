import { Component, NgZone } from '@angular/core';
import { DemoSharedSimpleSocketClient } from '@demo/shared';
import {} from '@gtsa/simple-socket-client';

@Component({
  selector: 'demo-simple-socket-client',
  templateUrl: 'simple-socket-client.component.html',
})
export class SimpleSocketClientComponent {
  demoShared: DemoSharedSimpleSocketClient;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedSimpleSocketClient();
  }
}
