
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundoffPipe } from './roundoff.pipe';
import { SetdatePipe } from './setdate.pipe';
import { SettimePipe } from './settime.pipe';

@NgModule({
declarations: [RoundoffPipe,SetdatePipe,SettimePipe,],
imports: [CommonModule],
exports: [RoundoffPipe,SetdatePipe,SettimePipe,],
})

export class PipesModule {}