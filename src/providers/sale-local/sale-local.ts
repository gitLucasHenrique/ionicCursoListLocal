import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';


/*
  Generated class for the SaleLocalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SaleLocalProvider {
 
  db;

  constructor(public http: HttpClient) {
    console.log('Hello SaleOrmProvider Provider');
    PouchDB.plugin(cordovaSqlitePlugin);
    this.db = new PouchDB('sales', {adapter: 'cordova-sqlite'});
  }


  getAll() {
    return this.db.allDocs({ include_docs: true })
      .then(docs => {

        let objects = docs.rows.map(row => {
          return row.doc;
        });

        return objects;
      });
  }

  add(sale) {
    return this.db.post(sale);
  }

  edit(sale) {
    return this.db.put(sale);
  }

  getById(sale) {
    return this.db.get(sale.id);
  }

  addList(list) {

    return this.db.allDocs({include_docs: true}).then(allDocs => {
      return allDocs.rows.map(row => {
        return {_id: row.id, _rev: row.doc._rev, _deleted: true};
      });
    }).then(deleteDocs => {
      return this.db.bulkDocs(deleteDocs).then(allDocs => {

        return this.db.bulkDocs(list).then(function (result) {
          return true;
        }).catch(function (err) {
          return false;
        });

      });
    });
}
}