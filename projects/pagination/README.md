# Pagination

pagination library for angular

## Installation

Install via NPM...

```sh
$ npm i pagination-jnf
```

## Usage

set module in app.module or parent module 

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginationModule } from 'pagination-jnf';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginationModule // pagination module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Base Config

```html
<lib-pagination [configValue]="configValue"></lib-pagination>
```

```typescript
...
import { PaginationConfigValueModel } from 'pagination-jnf';
.
.
.
export class AppComponent {
  configValue: PaginationConfigValueModel; // for create pagination number list and get totalPages

  constructor() {
    this.configValue = {
      pageSize: 10,
      totalCount: 36
    };
  }

  getPageNumber(event: number): void{
    let pageNumber = event;
  }
}

```

## Individual Options


| Option            | Type                           | Default                        | Description                                                                             
| ----------------- | ------------------------------ | ------------------------------ | ------------------------------------------------- |
| rtlMode           | boolean                        | false                          | when tamplate direction is rtl set true           |
| parentClass       | string                         | 'pagination'                   | parent holder all box pagination                  |
| parentListClass   | string                         | 'pagination-list'              | parent list numbers pagination                    |
| itemClass         | string                         | 'pagination-item'              | class items paginagtion number,space, arrow       |
| itemSpaceClass    | string                         | 'space'                        | class for special style "..."                     |
| itemArrowClass    | string                         | 'pagination-arrow'             | class for special style arrows                    |
| next              | string                         | '<i class="arrow right"></i>'  | change arrow next page html                       |
| prev              | string                         | '<i class="arrow left"></i>'   | change arrow next page html                       |


#### Setting Individual Options

```html
<lib-pagination [configValue]="configValue"  [configIndividual]="configIndividual" (pageNumber)="getPageNumber($event)"></lib-pagination>
```

```typescript
  import { PaginationConfigIndividualModel } from 'pagination-jnf';


  configIndividual: PaginationConfigIndividualModel = {
    rtlMode: true, // for check design direction default is false
    classes: { // your className Individual 
        parentClass: 'your className for parent holder all box pagination ',
        parentListClass: 'your className for holder pagination numbers list',
        itemClass: 'your className for items pagination',
        itemSpaceClass: 'your className for "..."',
        itemArrowClass: 'your className for arrows',
    },
    arrow: { // your arrows html Individual
        next: '<i class="fa-regular fa-arrow-right"></i>',
        prev: '<i class="fa-regular fa-arrow-left"></i>',
    }
  };
```

---

> GitHub [@nasirfarhadi92](https://github.com/nasirfarhadi92) &nbsp;&middot;&nbsp;
>linkedin  [@nasir-farhadi](https://www.linkedin.com/in/nasir-farhadi/)