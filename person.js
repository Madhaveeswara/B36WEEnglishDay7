class Person {

    constructor(name,age,gender,job,salary,adhaarNo){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.job = job;
        this.salary = salary;
        this.adhaarNo = adhaarNo;
    }

    getAdhaarNo() {
        return this.adhaarNo;
    }

    setAdhaarNo(adhaarNo) {
        this.adhaarNo = adhaarNo;
    }

    getAge(){
        return this.age;
    }

    setAge(age){
        this.age = age;
    }

    getJob() {
        return this.job;
    }

    setJob(job) {
        this.job = job;
    }

    getGender() {
        return this.gender;
    }

    setGender(gender){
        this.gender = gender;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getSalary() {
        return this.salary;
    }

    setSalary(salary) {
        this.salary = salary;
    } 
    
    toString() {
        return `Person[ name=${this.name}, salary=${this.salary}, job=${this.job}, age=${this.age}, gender=${this.gender}, Adhaar No=${this.adhaarNo}]`;
    }

   
}


const pObject1 = new Person("RajniKanth","55","male","Actor","2Lakh",123456923);
const pObject2 = new Person("Kamal Hassan","50","male","Actor","1Lakh",9876574321);
console.log(pObject1);
console.log(pObject2);

console.log(pObject1.toString());
console.log(pObject2.toString());
