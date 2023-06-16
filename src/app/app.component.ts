import { Component } from '@angular/core';
import { ColumnDef } from 'mat-virtual-table';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  rows = Array(500)
    .fill(0)
    .map((x, i) => {
      return { name: 'name' + i, id: i, age: 27 };
    });
  columns: ColumnDef[] = [
    { field: 'name', title: 'name' },
    { field: 'id', title: 'id' },
    { field: 'age', title: 'age' },
  ];
}
