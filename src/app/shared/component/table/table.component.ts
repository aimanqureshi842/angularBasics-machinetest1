import { Component, OnInit } from "@angular/core";
import { Ibook, Icourses, Icustomer, IempArr, Imovies, Iorders, Iproducts, Istudents, Iteachers, Ivehicles } from "../../models/table";
import { bookArr, courseArr, customerArr, empArr, movieArr, orderArr, productArr, studentArr, teacherArr, vehicleArr } from "../../const/tableConst";

@Component({
    selector:'app-table',
    templateUrl:'./table.component.html',
    styleUrls:['./table.component.scss']
})
export class TableComponent implements OnInit{
    isProductAvailable:boolean=false;
    employeeArr:IempArr[]=empArr;
    studentsArr:Istudents[]=studentArr;
    productsArr:Iproducts[]=productArr;
    courseArr:Icourses[]=courseArr;
    booksArr:Ibook[]=bookArr
    customerArr:Icustomer[]=customerArr
    orderArr:Iorders[]=orderArr
    movieArr:Imovies[]=movieArr
    teacherArr:Iteachers[]=teacherArr
    vehicleArr:Ivehicles[]=vehicleArr
constructor(){}
ngOnInit():void{
setTimeout(()=>{
    this.isProductAvailable=true;
},4000)
}
}






