import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { PaginationConfigIndividualModel, PaginationConfigValueModel } from './pagination.model';

@Component({
  selector: 'lib-pagination',
  templateUrl: './pagination.html',
  styleUrls: ['./pagination.css'],
  encapsulation: ViewEncapsulation.None
})
export class PaginationComponent implements OnInit, OnChanges {
  // Output
  @Output() pageNumber = new EventEmitter<number>();
  // Input
  @Input() configValue: PaginationConfigValueModel = {
    pageSize: 0,
    totalCount: 0
  };

  @Input() configIndividual: PaginationConfigIndividualModel = {} as PaginationConfigIndividualModel;
  // array
  paginationList: number[] = [];
  // number
  totalPages: number = 0;
  endPage: number = 0;
  startPage = 1;
  middlePage: number[] = [];
  currentPage = 1;
  rangePageInsideDown = 0; // for down number slice list paginationList
  rangePageInsideUp = 2; // for up number slice list paginationList
  // boolean
  hidePaginate = true;


  //#region config base
  rtlMode = false;
  parentClass: string = 'pagination';
  parentListClass: string = 'pagination-list';
  itemClass: string = 'pagination-item';
  itemSpaceClass: string = 'space';
  itemArrowClass: string = 'pagination-arrow';
  arrowNext: string = '<i class="arrow right"></i>';
  arrowPrev: string = '<i class="arrow left"></i>';
  //#region 
  constructor() { }

  //#region===================LIFE CYCLE HOOK======================
  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.setConfigIndividual();
    this.getPager();
  }
  //#endregion
  /*****************************************
  Private
  *****************************************/
  private setConfigIndividual(): void {
    if (typeof this.configIndividual === 'object' && Object.keys(this.configIndividual).length !== 0) {
      if (this.configIndividual.rtlMode) {
        this.rtlMode = this.configIndividual.rtlMode;
      }
      if (this.configIndividual.classes) {
        if (this.configIndividual.classes.parentClass) {
          this.parentClass = this.configIndividual.classes.parentClass;
        }
        if (this.configIndividual.classes.parentListClass) {
          this.parentListClass = this.configIndividual.classes.parentListClass;
        }
        if (this.configIndividual.classes.itemClass) {
          this.itemClass = this.configIndividual.classes.itemClass;
        }
        if (this.configIndividual.classes.itemSpaceClass) {
          this.itemSpaceClass = this.configIndividual.classes.itemSpaceClass;
        }
        if (this.configIndividual.classes.itemArrowClass) {
          this.itemArrowClass = this.configIndividual.classes.itemArrowClass;
        }
      }

      if (this.configIndividual.arrow) {
        if (this.configIndividual.arrow.next) {
          this.arrowNext = this.configIndividual.arrow.next;
        }
        if (this.configIndividual.arrow.prev) {
          this.arrowPrev = this.configIndividual.arrow.prev;
        }
      }

    }
  }

  private getPager(): void {
    // calculate total pages
    this.totalPages = Math.ceil(this.configValue.totalCount / this.configValue.pageSize);
    if (this.configValue.totalCount <= this.configValue.pageSize || this.totalPages <= 1) {
      this.hidePaginate = false;
    } else {
      this.startPage = 1;
      this.endPage = this.totalPages;
      this.hidePaginate = true;
    }
    // show pagination number for Smaller equals 6
    if (this.totalPages <= 6) {
      this.rangePageInsideDown = 0;
      this.rangePageInsideUp = 4;
    }

    // create an array of pages to ng-repeat in the pager control
    for (let i = this.startPage + 1; i < this.endPage; i++) {
      this.paginationList.push(i);
    }
  }
  /*****************************************
  Public
  *****************************************/
  selectPage(page: number): void {
    this.currentPage = page;
    this.pageNumber.emit(page);
    if (this.totalPages <= 6) {
      this.rangePageInsideDown = 0;
      this.rangePageInsideUp = 4;
    } else if (this.currentPage === 1) {
      this.rangePageInsideDown = 0;
      this.rangePageInsideUp = 2;
    } else if (this.currentPage === this.endPage - 1) {
      this.rangePageInsideDown = this.currentPage - 3;
      this.rangePageInsideUp = this.currentPage - 1;
    } else if (this.currentPage === this.endPage) {
      this.rangePageInsideDown = this.currentPage - 4;
      this.rangePageInsideUp = this.currentPage - 1;
    } else {
      this.rangePageInsideDown = this.currentPage - 2;
      this.rangePageInsideUp = this.currentPage;
    }
  }
}
