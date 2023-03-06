class Movie {

    constructor (title, studio, rating = "PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getPG(movies){

        let pgMovies = [];
        
        for(const movie of movies){
            if(movie['rating'] == "PG") pgMovies.push(movie);
        }
        return pgMovies;
    }

    
}

const movieObject = new Movie("Casino Royale","Eon Productions","PG13");

console.log(movieObject);
console.log(typeof movieObject);
console.log(movieObject instanceof Movie);


class JSCircle {

    constructor(radius = 1.0 , color = "red"){
        this.radius = radius;
        this.color = color;
    }

    getRadius(){
        return this.radius;
    }

    setRadius(radius){
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }
    
    toString() {
        return `JSCircle[radius=${this.radius}, color=${this.color}]`;
    }

    getArea() {
        let r = parseFloat(this.radius);
        //Area = PI*r*r;
        let area = (Math.PI*r*r).toFixed(2);
        return area;
    }

    getCircumference(){
        let circumference = 0.0;
        let r = parseFloat(this.radius);
        circumference = (2*Math.PI*r).toFixed(2);
        return circumference;
    }


}


const circleObject = new JSCircle(2, "green");

console.log(circleObject);
console.log(circleObject.getArea());
console.log(circleObject.getCircumference());
circleObject.setColor("blue");
circleObject.setRadius(5.0);
console.log(circleObject);
console.log(circleObject.getArea());
console.log(circleObject.getCircumference());