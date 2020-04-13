import { Component } from '@angular/core';
import { RestApiService } from '../../shared/rest-api.service'
import { FormBuilder } from '@angular/forms';
import {searchInput} from '../../shared/SearchInput';

@Component({
  selector: 'app-result-grid',
  templateUrl: './result-grid.component.html',
  styleUrls: ['./result-grid.component.css']
})
export class ResultGridComponent{
  IntoxavisorSearchResults: any = [];
  dataSource: any;
  searchForm;


  constructor(
    private formBuilder: FormBuilder,
    public restApi: RestApiService
    ){ 
      this.searchForm = this.formBuilder.group({
        firstName: '',
        lastName: '',
        customerID: ''
      });
  }

  //  ngOnInit() {
  //   this.getIntoxavisorSearchResultsByCriteria()
  // }

  getIntoxavisorSearchResults() {
    return this.restApi.getIntoxavisorSearchResults().subscribe((data: any) => {
      this.IntoxavisorSearchResults = data.IntoxavisorScoreManagerScores;
      this.dataSource = this.IntoxavisorSearchResults;
    })
  }

  getIntoxavisorSearchResultsByCriteria(searchInput:searchInput) {
    return this.restApi.getIntoxavisorSearchResultsByCriteria(searchInput).subscribe((data: any) => {
      this.IntoxavisorSearchResults = data.IntoxavisorScoreManagerScores;
      this.dataSource = this.IntoxavisorSearchResults;
    })
  }

  onSubmit(searchData) {
    // Process checkout data here
    const criteria1 = new searchInput(searchData.firstName,searchData.lastName,searchData.customerID,5908073,2,1,'11-01-2019','01-01-2020');
    this.getIntoxavisorSearchResultsByCriteria(criteria1);
    // const criteria = {firstName:searchData.FirstName,lastName:searchData.LastName,customerID:searchData.CustomerID};
     
   console.log('Your order has been submitted', searchData);
  }

   displayedColumns: string[] = ['CustomerID', 'DeviceUsageID', 'FirstName', 'LastName','LogEntryTime', 'FormatStr','ModifyDate','ModifyUserName'];
}







// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
