import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { SimpleSocketClientComponent } from './simple-socket-client.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: SimpleSocketClientComponent }])],
  declarations: [SimpleSocketClientComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SimpleSocketClientModule {}
