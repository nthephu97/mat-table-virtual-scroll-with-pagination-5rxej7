import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TableModule } from 'mat-virtual-table';
import { MatPaginatorIntl } from '@angular/material';

class CustomMatPaginatorIntl extends MatPaginatorIntl {
  nextPageLabel = 'הבא';
  previousPageLabel = 'קודם';
  getRangeLabel = (page, pageSize, length) => {
    if (length === 0 || pageSize === 0) {
      return '0 מתוך ' + length;
    }
    length = Math.max(length, 0);
    const startIndex = page ;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex ;
    return startIndex + 0 + ' - ' + endIndex + ' מתוך ' + length;
  };
}
@NgModule({
  imports: [BrowserModule, FormsModule, TableModule, BrowserAnimationsModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl }],
})
export class AppModule {}
