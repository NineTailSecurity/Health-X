import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent {
  welcome = 'Hello and Welcome to X Health'
  showFiller = false;
  
}

