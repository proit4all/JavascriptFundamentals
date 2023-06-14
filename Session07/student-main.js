
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
    sum(){
        return (this.getPointHTML()+this.getPointJS());
    }
    avg(){
        return this.sum()/2;
    }
    getInformation(){
        return ("=> id: "+this.getId() + " name: "+this.getName() + " sum: " + this.sum() +" avg: "+this.avg()+" arrange: "+this.arrange());
    }
   //xếp loại sinh viên
    arrange(){
        let dtb = this.avg();
        let xepLoai = "";
        if (dtb >=9) {
            xepLoai = "XUAT SAC";
        }else if (dtb >= 8) {
            xepLoai = "GIOI";
        }else if (dtb >=6.5) {
            xepLoai = "KHA"
        }else if (dtb >= 5) {
            xepLoai = "TRUNG BINH";
        }else{
            xepLoai = "YEU";
        }
        return xepLoai;
    }
   
}
// const st = new Student("PD001", "NamNV", 7,8);
// console.log(st.getInformation());

class StudentWEB extends Student{
    //constructor
    constructor(id, name, pointJS, pointHTML, pointPHP){
        super(id, name, pointJS, pointHTML);
        this.pointPHP = pointPHP;
    }
    //setter
    setPointPHP(pointPHP){
        this.pointPHP = pointPHP;
    }
    getPointPHP(){
        return this.pointPHP;
    }
    sum(){
        return super.sum()+ this.getPointPHP();
    }
    avg(){
        return this.sum()/3;
    }
}

//
const stWeb = new StudentWEB("PD002", "NamWEB",7,8,9);
console.log(stWeb.getInformation());