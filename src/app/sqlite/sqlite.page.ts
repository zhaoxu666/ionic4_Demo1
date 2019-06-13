import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLService } from '../services/sql.service';
import { HttpServiceService } from '../services/http-service.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-sqlite',
  templateUrl: './sqlite.page.html',
  styleUrls: ['./sqlite.page.scss'],
})
export class SqlitePage implements OnInit {
  public database:SQLiteObject;
  public dbName:string = 'user.db';
  public userList:any = {};
  public dataList:any[] = [];
  constructor(private sqlite:SQLite,private SQLService:SQLService,private httpService:HttpServiceService,private httpClient:HttpClient) { }

  ngOnInit() {
    let sqlStatements = 'CREATE TABLE IF NOT EXISTS users(Id int PRIMARY KEY, username VARCHAR(20) NOT NULL,  gender BOOLEAN, addtime Date, number BIGINT);'
   
    this.SQLService.initDataBase(this.dbName,sqlStatements);
  }

  setData(){
    let sqlStatements = 'INSERT INTO users (username,gender,addtime,number) VALUES(?,?,?,?)';
    this.SQLService.insertIntoItem(sqlStatements,['username',0,'2019-1-1',11111111111111111]);
  }

  setDataTwo(value){
    let sqlStatements = 'INSERT INTO users (username,gender,addtime,number) VALUES(?,?,?,?)';
    for(let i = 0; i<value.length;i++){
      let arr = [];
      for(let j in value[i]){
        arr.push(value[i][j]);
      }
      this.SQLService.insertIntoItem(sqlStatements,arr);
    }
    /*
      [
        {
          username:'username1',
          gender:0,
          addtime:2019-06-12,
          number:111
        },
          {
          username:'username2',
          gender:0,
          addtime:2019-06-12,
          number:111
        }

      ]  
    
    */
    
      /*
      [
        INSERT INTO users (username,gender,addtime,number) VALUES(username1,0,2019-06-12,111),
        INSERT INTO users (username,gender,addtime,number) VALUES(username2,0,2019-06-12,111),
      ]
      
      
      
      
      */

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

 
  
  Refresh(){
    this.httpClient.get('http://10.255.52.5:8081/getList').subscribe((data:any[])=>{
      alert(JSON.stringify(data));
      this.dataList = data;
      let sqlStatements = 'delete  from users';
      this.SQLService.deleteItem(sqlStatements,[]).then(result=>{
        this.setDataTwo(this.dataList);
      },err=>{
        console.log('删除失败');
      })
      
    },err=>{
      alert(`请求失败${err}`);
    });
  }




  getList(){
    this.httpClient.get('http://10.255.52.5:8081/getList').subscribe(res=>{
      var  response = JSON.stringify(res);
      alert(`请求成功${response}`);
    },err=>{
      let error = JSON.stringify(err);
      alert(`请求失败${error}`);
    })
  }

  getDRSList(){
    var params = new HttpParams();
    var time  = '2019-06-12';
    params = params.set("time", time);
    let options: {} = { params: params };
    this.httpClient.get('http://www.drs-org.com:90/api/news/hasLatest',options).subscribe(res=>{
      console.log(res);
      alert(JSON.stringify(res));
    },err=>{
      let error = JSON.stringify(err);
      alert(`请求失败${error}`);
    })
  }

  addBatch(){
    this.httpClient.get('http://10.255.52.5:8081/getList').subscribe((data:any[])=>{
      alert(JSON.stringify(data));
      this.dataList = data;
      let sqlStatements = 'delete  from users';
      this.SQLService.deleteItem(sqlStatements,[]).then(result=>{
        this.setDataThree(this.dataList);
      },err=>{
        console.log('删除失败');
      })
      
    },err=>{
      alert(`请求失败${err}`);
    });
  }

  setDataThree(value){
    let sqlStatements = [];
    let arr = [];
    //let sqlStatements = 'INSERT INTO users (username,gender,addtime,number) VALUES(?,?,?,?)';
    for(let i = 0; i<value.length;i++){
      
      let sqlStatement = [`INSERT INTO users (username,gender,addtime,number) VALUES(?,?,?,?)`,[value[i].username,value[i].gender,value[i].addtime,value[i].number]];
      sqlStatements.push(sqlStatement);
    } 
    this.SQLService.sqlBatch(sqlStatements);
      /*
      sqlBatch参数：
      [
        [INSERT INTO users (username,gender,addtime,number) VALUES(?,?,?,?),[username1,0,2019-06-12,111]],
        [INSERT INTO users (username,gender,addtime,number) VALUES(?,?,?,?),[username2,0,2019-06-12,111]],
      ]
      
      
      
      
      */

  }


}
