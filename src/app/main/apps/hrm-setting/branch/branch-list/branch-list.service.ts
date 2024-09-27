import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { environment } from "environments/environment";

import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class BranchListService implements Resolve<any> {
  public rows: any;
  public onBranchListChanged: BehaviorSubject<any>;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onBranchListChanged = new BehaviorSubject({});
  }

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return new Promise<void>((resolve, reject) => {
      Promise.all([this.getDataTableRows()]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get rows
   */
  getDataTableRows(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._httpClient
        .get(`${environment.apiUrl}/branch`)
        .subscribe((response: any) => {
          this.rows = response.data;
          console.log("response", response.data);
          this.onBranchListChanged.next(this.rows);
          resolve(this.rows);
        }, reject);
    });
  }

  /**
   * Create new branch (POST request to API)
   * @param branchData - Data of the new branch to be created
   */
  createBranch(branchData: any): Observable<any> {
    return this._httpClient.post(`${environment.apiUrl}/branch`, branchData);
  }
}
