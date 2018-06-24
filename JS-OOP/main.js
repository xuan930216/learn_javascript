// create object, duplicate functions 
// const circle = {
//     radius : 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function(){
//         console.log("draws");
//     }
// };

// let x = {}
// let x = new Object();

// circle.draw();

// factories or constructor function
function createCircle(radius){
    return  {
        radius,
        draw: function(){
            console.log("draws");
        }
    };
}

const circle = createCircle(1);
circle.draw();

//constrcutor, Cirle is an object, its constructor is function
function Circle(radius){
    this.radius = radius;

    // private variable in the object
    let defaultLocation = {x: 0, y: 0};
    // let computeOptimumLocation = function(factor){
    //     //...
    // }
    this.draw = function(){
        // computeOptimumLocation(0.1);
        console.log("draw");
    };
    this.getDefaultLocation = function(){
        return defaultLocation;
    };

    Object.defineProperty(this, 'defaultLocation',
        {get: function(){
            return defaultLocation;
        },
        set: function(value){
            if(!value.x || !value.y){
                throw new Error('Invalid Location');
            }
            defaultLocation = value;
        }
    });
}

// const Circle1 = new Function('radius', `
//     this.radius = radius;
//     this.draw = function(){
//         console.log("draw");
//     }
// `);

const another = new Circle(1);


// Circle.call({}, 1)
// Circle.apply({}, [1,2,3])

// literate object
for(let key in another){
    if(typeof another[key] != 'function'){
        console.log(key, another[key]);
    }
}

//get all keys of the onject 
const keys = Object.keys(another);
console.log(keys);

//check if property exist

if('radius' in another){
    console.log('Circle has a radius.')
}