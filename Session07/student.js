
class Student {
    constructor(id, name, pointJS, pointHTML){
        this.id = id || "PD000";
        this.name = name || "No Name";
        this.pointJS = pointJS || 0.0;
        this.pointHTML = pointHTML || 0.0;
    }
    //getter
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getPointJS(){
        return this.pointJS;
    }
    getPointHTML(){
        return this.pointHTML;
    }
    //setter
    setId(id){
        this.id = id;
    }
    setName(name){
        this.name = name;
    }
    setPointJS(pointJS){
        this.pointJS = pointJS;
    }
    setPointHTML(pointHTML){
        this.pointHTML = pointHTML;
    }
    //khai bao cac phuong thuc
    output(){
        console.log("in ra thong tin");
        console.log(this.getId()+"-"+this.getName()+"-"+this.getPointHTML()+"-"+this.getPointJS());
    }
    sum(){
        console.log("in diem tong sinh vien");
    }
    avg(){
        console.log("in diem trung binh");
    }
    getInformation(){
        return "=>id:"+this.getId()+"name:"+this.getName()+"Point JS:"+this.getPointJS()+"Point HTML:"+this.getPointHTML();
    }
    static getInfor(){
        console.log("this is static method");

    }
}//ket thuc class student

class StudentWEB extends Student{
    constructor(id, name, pointJS,pointHTML,pointPHP){
        super(id, name,pointJS,pointHTML);
        this.pointPHP = pointPHP;
    }
    getInformation(){
        return super.getInformation()+" Point PHP:"+this.pointPHP;
    }
}


// let student1 = new Student("1", "NamNV", 9, 9);
// console.log(student1);
// student1.output();
// student1.sum();
// student1.avg();
// let student2 = new Student("PD002", "AnhNN", 9,9);
// console.log(student2);

// let st1 = new Student("PD001", "NamNV",9,9);
// let st2 = new Student("PD002", "NamNV2");
// let st3 = new Student();
// console.log(st1);
// console.log(st2);
// console.log(JSON.stringify(st1));
// console.log(st3);
// st3.id = "PD003";
// st3.name = "AnhNN";
// console.log(st3);

// let student4 = new Student();
// student4.setId("PD555");
// student4.setName("NamNV3");
// console.log(student4);

// console.log(student4.getId());
// console.log(student4.getName());

// student4.output();
// // student4.getInfor();//gọi thông qua đối tượng student4
// Student.getInfor();

let studentWeb = new StudentWEB("PD111","NamNV",7,8,9);
console.log(studentWeb);
console.log(studentWeb.getInformation());