import { ComponentModule } from './../../component/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatasPageRoutingModule } from './datas-routing.module';

import { DatasPage } from './datas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatasPageRoutingModule,
    ComponentModule
  ],
  declarations: [DatasPage]
})
export class DatasPageModule {}
