import { Component, OnInit } from '@angular/core';
import { CompactType, DisplayGrid, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myApp';
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  flag: any = 1;

  constructor() {

  }


  ngOnInit() {
    this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      margin: 10,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      mobileBreakpoint: 640,
      minCols: 1,
      maxCols: 7,
      minRows: 1,
      maxRows: 7,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: { north: true, east: true, south: true, west: true },
      pushResizeItems: false,
      displayGrid: DisplayGrid.Always,
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: false,
    };
    // dsadsdsasdasd

    this.dashboard = [
    { cols: 2, rows: 1, y: 0, x: 0 },
    { cols: 2, rows: 2, y: 0, x: 2, hasContent: true },
    { cols: 1, rows: 1, y: 0, x: 4 },
    { cols: 1, rows: 1, y: 2, x: 5 },
    { cols: 1, rows: 1, y: 1, x: 0 },
    { cols: 1, rows: 1, y: 1, x: 0 },
    { cols: 2, rows: 2, y: 3, x: 5, minItemRows: 2, minItemCols: 2, label: 'Min rows & cols = 2' },
    { cols: 2, rows: 2, y: 2, x: 0, maxItemRows: 2, maxItemCols: 2, label: 'Max rows & cols = 2' },
    { cols: 2, rows: 1, y: 2, x: 2, dragEnabled: true, resizeEnabled: true, label: 'Drag&Resize Enabled' },
    { cols: 1, rows: 1, y: 2, x: 4, resizeEnabled: true, label: 'Drag&Resize Disabled' },
    { cols: 1, rows: 1, y: 2, x: 6 }
    ];
  }


  toggle() {
    if (this.flag === 1) {
      return true;
      this.flag = 0;


    } else {
      return true;
      this.flag = 0;


    }


  }


}
