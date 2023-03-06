class Circle {

    private color : String = "red";
    private radius : Number = 1.0;

    public constructor();
    public constructor(radius : Number);
    public constructor(radius : Number, color:String);
    
    public constructor(...myarray: any[]) {

            if (myarray.length === 2) {
                console.log("arugument length is :: " + myarray.length)
                console.log('two argument constructor called here !!');
                this.radius = Number(myarray[0]);
                this.color = myarray[1];
                return;
            }
            if (myarray.length === 1) {
                console.log('one argument constructor called here !!');
                this.radius = Number(myarray[0]);
                return;
            }
            if (myarray.length === 0) {
                console.log('one argument constructor called here !!');
                return;
            }
    }

    public getRadius() {
        return this.radius;
    }

    public setRadius(radius: Number) {
        this.radius = radius;
      }   

      public getColor() {
         return this.color;
     }
 
    public setColor(color: String) {
         this.color = color;
    }   

    public toString(){
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }

    public getArea(){
        let r: number = this.radius.valueOf();
        //Area = PI*r*r;
        let area = (Math.PI*r*r).toFixed(2);
        return area;
    }

    
    public getCircumference(){

        let circumference = 0.0;
        let r:number  = this.radius.valueOf();
        circumference =  Number((2*Math.PI*r).toFixed(2));
        return circumference;

    }



}

const circleObj1 = new Circle(6);
const circleObj2 = new Circle(8,"greenapple");

console.log("Circle1", circleObj1);
console.log("Area1",circleObj1.getArea());
console.log("Circumference1",circleObj1.getCircumference());
console.log("Circle2",circleObj2);
console.log("Area2",circleObj2.getArea());
console.log("Circumference2",circleObj2.getCircumference());


