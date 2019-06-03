import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject, SQLiteTransaction } from '@ionic-native/sqlite/ngx';


;
@Injectable({
  providedIn: 'root'
})
export class SQLService {
  public dataBase: SQLiteObject;
  public userList: any[] = [];
  constructor(public sqlite: SQLite) { }

  initDataBase(dbName, sqlStatements) {
    this.sqlite.create({
      name: dbName,
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql(sqlStatements, [])
          .then(() => {
            var msg = '创建数据库成功';
            alert(`提示${msg}`);
            this.dataBase = db;
          })
          .catch(err => {
            alert(`错误  ${JSON.stringify(err)}`);
          })
      })
  }

  insertIntoItem(sqlStatements, val) {
    this.dataBase.executeSql(sqlStatements, val)
      .then(res => {
        var str = JSON.stringify(res);
        alert(`新增数据成功:${str}`);
      })
      .catch(err => {
        alert(`错误   ${JSON.stringify(err)}`);
      })
  }

  queryItem(sqlStatements, val) {

    return new Promise((resolve, reject) => {

      this.dataBase.executeSql(sqlStatements, val)

        .then(

          (res) => {

            var arrList = [];

            var len = res.rows.length;

            if (len > 0) {

              for (var i = 0; i < len; i++) {

                var item = res.rows.item(i);

                arrList.push(item);

              };

              resolve(arrList);

            } else {

              var msg = "无相应数据";

              alert(`成功${msg}`);

            }

          })

        .catch(err => {

          alert(`错误${err}`);

          reject(err);

        });

    })

  }


  deleteItem(sqlStatements,val){
    this.dataBase.executeSql(sqlStatements,val)
    .then((res)=>{
      var str = JSON.stringify(res);
      alert(`删除成功${str}`);
    })
    .catch(err=>{
      alert(`删除失败${JSON.stringify(err)}`);
    })
  }




}

