import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Organization, OrganizationGroup, Query } from '../models/organizationsDbModel';

@Injectable({
  providedIn: 'root'
})
export class OrganizationsDbService {
  private jsonUrl = "./../../../../assets/json-db/cozumyollari.json"
  organizations: any

  organizationsDbLoaded = new BehaviorSubject(false)

  constructor(
    private http: HttpClient
  ) { 
    
  }

  public getJSON(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
  // like crud begins
  startOrganizationDb(){
    this.getJSON().
    subscribe(data => {
      console.log(data);
      this.organizations = data

      this.organizationsDbLoaded.next(true)
     });
  }

  getOrganizationsWithQuery(query: Query): OrganizationGroup{
    console.log("org", this.organizations["i"]);
    
    return this.organizations[query.Location][query.Group][query.Suspect][query.Protection]
  }
}
