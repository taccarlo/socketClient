import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedSimpleSocketClient } from '@demo/shared';
import {} from '@gtsa/simple-socket-client';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedSimpleSocketClient {}
