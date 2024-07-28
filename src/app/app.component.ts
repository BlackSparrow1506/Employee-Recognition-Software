import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Recognition Software';
  displayedColumns: string[] = ['column1', 'column2', 'column3', 'actions'];
  dataSource = <any>([
    { column1: '1336', column2: 'PLOA018', column3: 'PEUGEOT PERSPECTIVES: 24 et 36 mois' },
    { column1: '1337', column2: 'PLOA018', column3: 'PEUGEOT PERSPECTIVES : 46 mois' },
    { column1: '1469', column2: 'PLOA022', column3: 'PACKGARANTIE ODL' }
  ]);
}
