import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './containers/root/root.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { RichLinkGridComponent } from './shared/components/rich-link-grid/rich-link-grid.component';

@NgModule({
  declarations: [ RootComponent, RichLinkGridComponent ],
  imports: [ BrowserModule, AppRoutingModule ],
  providers: [],
  bootstrap: [ RootComponent ],
})
export class AppModule {}
