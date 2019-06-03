import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLService } from '../services/sql.service';
@Component({
  selector: 'app-sqlite',
  templateUrl: './sqlite.page.html',
  styleUrls: ['./sqlite.page.scss'],
})
export class SqlitePage implements OnInit {
  public database:SQLiteObject;
  public dbName:string = 'user.db';
  public userList:any = {};
  constructor(private sqlite:SQLite,private SQLService:SQLService) { }

  ngOnInit() {
    let sqlStatements = 'CREATE TABLE IF NOT EXISTS users(Id int PRIMARY KEY, username VARCHAR(20) NOT NULL,  gender BOOLEAN, addtime Date, number BIGINT );'
   
    this.SQLService.initDataBase(this.dbName,sqlStatements);
  }

  setData(){
    let sqlStatements = 'INSERT INTO users (username,gender,addtime,number) VALUES(?,?,?,?)';
    this.SQLService.insertIntoItem(sqlStatements,['username',0,'2019-1-1',11111111111111111]);
  }

  GetData(){
    let sqlStatements = 'select * from users';
    this.SQLService.queryItem(sqlStatements,[])
    .then(res=>{
      this.userList = res;
    })
    .catch(err=>{
      alert(err);
    })
  }
  
}
