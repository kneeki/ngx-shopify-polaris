import { Component, OnInit, Input } from '@angular/core';

export interface TableHeaderColumn {
  // The type: numeric, text, header
  type: string;
  // What is displayed in the column
  value: string;
  // Vertical text alignment. e.g. verticalAlignTop
  y_align: string;
}

export interface ColumnData {
  // The type: numeric, text, header
  type: string;
  // What is displayed in the column
  value: string;
  // Is this a router link?
  is_link: boolean;
  // Where should the router go? e.g. "['/link', link.deep_link]"
  location: Array<any>;
  // Which side should the content be set? e.g. left, right
  x_align: string;
  // Vertical text alignment. e.g. verticalAlignTop
  y_align: string;
}

export interface TableBodyRow {
  columns: Array<ColumnData>;
}

@Component({
  selector: 'polaris-data-table',
  templateUrl: './data-table.component.html',
})
export class DataTableComponent implements OnInit {
  @Input() header_columns: Array<TableHeaderColumn> = [];
  @Input() body_data: Array<TableBodyRow> = [];

  constructor() { }

  ngOnInit() {
  }

}
