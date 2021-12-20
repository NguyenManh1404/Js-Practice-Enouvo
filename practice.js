//Array default
const arrays = [
    {
        id: 1,
        name: "user 1",
        age: 22,
    },
    {
        id: 2,
        name: "user 2",
        age: 21,
    },
    {
        id: 3,
        name: "user 3",
        age: 23,
    },
    {
        id: 4,
        name: "user 4",
        age: 25,
    },
];


// task 1: Add mới 1 user vào đầu mảng(chúng ta dùng unshift)

function addFirst() {
    arrays.unshift({
        id: 0,
        name: "user 0",
        age: 20,
    });
    console.log(arrays);
}

// task 2: Add mới 1 user vào cuối mảng(chúng ta dùng push)

function addEnd() {
    arrays.push({
        id: 5,
        name: "user 5",
        age: 25,
    });
    console.log(arrays);
}

// task 3: add nhiều user vào mảng(chúng ta cũng dùng push)

function addEnds() {
    arrays.push(
        {
            id: 5,
            name: "user 5",
            age: 25,
        },
        {
            id: 6,
            name: "user 6",
            age: 26,
        }
    );
    console.log(arrays);
}


// task 4: xoá 1 user ra khỏi mảng(chúng ta dùng pop,shift,splice)
function deleteUser() {
    //Xóa user cuối cùng của mảng
    arrays.pop();
    console.log(arrays);
}

// task 5: lọc ra các user có age >= 22;
function filterArray() {
    let result = [];
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i].age >= 22) {
            // Thêm phần tử vào cuối mảng mới
            result.push(arrays[i]);
        }
    }
    console.log(result);
}


// task 6: Biến đổi mảng hiện tại thành một mảng mới với field mới là "class" kiểu string

function makeArray(){
    arrays.map(item => {
        item.class = "PNV22b"
    })

    console.log(arrays);
}



// task 7: Tìm ra 1 user có age = 23(chúng ta dùng search)
function searchUser() {
    let result = [];
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i].age == 23) {
            return console.log(arrays[i]);//Dùng return để lấy 1 phần tử tìm ra đầu tiên
        }
    }
}
// task 8: xử dụng vòng lặp for để lấy ra các user có age >= 23
function filterArrayNew() {
    let result = [];
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i].age >= 23) {
            // Thêm phần tử vào cuối mảng mới
            result.push(arrays[i]);
        }
    }
    console.log(result);
}

// task 9: Dựa vào mảng thông tin bên trên, và mảng ids bên dưới, lọc ra thông tin các user có id như mảng bên dưới.

function filterWithAnother() {

    let result = [];
    const arrayIds = [1, 3];
    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrayIds.length; j++) {
            if (arrays[i].id == arrayIds[j]) {
                // Thêm phần tử vào cuối mảng mới
                result.push(arrays[i]);
            }
        }
    }
    console.log(result);

}

// task 10: sắp xếp các user trong mảng trên theo thứ tự tuổi tăng dần

function sortUp() {
    var result = arrays.sort((prev,current)=>{
         return prev.age-current.age
        });
    console.log(result);
}

// task 11: cập nhật thông tin trong mảng trên với field "class" được biến đổi ở task 6 thành kiểu chữ in hoa (upCase)

function upCase(){
    arrays.map(item => {
        item.class = "pnv"
    })

    arrays.map(item => {
        item.class = item.class.toUpperCase();
    })
    console.log(arrays);
}

// task 12: lấy ra phần tử cuối cùng của mảng trên 
function getUserEnd(){
    console.log(arrays.pop());
}

// task 13: lấy ra phần tử đầu tiên của mảng trên
function getUserFirst(){
    console.log(arrays.shift());
}

// task 14: cho 2 mảng bên dưới, hợp nhất 2 mảng lại thành một và xoá các phần tử trùng lặp, result mong đợi => ["Gà", "vịt", "Chó"]

function midArray(){

        const giaCam = ["Gà", "vịt"];
        const dongVat = ["vịt", "Chó"];
        const array = [...new Set([...giaCam, ...dongVat])]
        console.log(array);

}

//Oject default
const person = {
    firstName: "John",
    lastName: "Doe",
  };




// task 15: từ object person trên lấy ra key của nó. result => ['firstName', 'lastName']
function displayAttributes(){
    const keys = Object.keys(person)
    console.log(keys);
}


// task 16: từ object person trên lấy ra value của nó. result => ['John', 'Doe']

function displayValue(){
    const values = Object.values(person)
    console.log(values);
}

// task 17: chuyển đổi object trên thành array. result mong đợi => [{firsName: 'John'}, {lastName: 'Doe'}]

function convertArray(){
    const result = [];
    const keys = Object.keys(person)
    const values = Object.values(person)
    keys.map((item, i) => {
        result.push({
            [item]: values[i]
        })
    })
    console.log(result);
}

// task 18: từ object person trên add thêm 1 field "age" vao object. kết qua mong đợi => { firstName: "John", lastName: "Doe", age: 100 };
function addAge(){
    person.age = 100;
    console.log(person);
}

// task 19: cho array string bên dưới, convert array này sang object. Result mong đợi => {0:"a", 1:"b", 2:"c"}
const arrString = ["a", "b", "c"];
function convertOject(){
    const object = {...arrString }
    console.log(object );
}
// task 20: cho array boolean bên dưới, kiểm tra output của array này là true hoặc false
const arrBoolean = [true, true, false];
function checkOutput(){
        var result = arrBoolean.some(function(value) {
            return value;
        });
        console.log(result);
}

// task 21: viết 1 object sử dụng setter & getter để thêm mới value và lấy ra value. key word (Getter, setter)
function makeOject(){
    class Car {
        name = ""
        price= 0
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }

        set setName(name) {
            this.name = name
        }

        set setPrice(price) {
            this.price = price
        }

        get getCar() {
            return `${this.name} - ${this.price}`;
        }
    }

    let car = new Car("Lambogini", 200000);
    console.log(car.getCar);
}
// task 22:
const newFunction = (user) => {
  // xử lý function này khi truyền params user vào là thông tin của user
  // kết quả return mong đợi là một string => "Hello User - age: 21"
    let info = ``
    const keys = Object.keys(user)
    const values = Object.values(user)
    keys.map((item, i) => {
        info += `${[item]}: ${values[i]}`;
        if (keys[keys.length - 1] !== item) {
            info += ` - `
        }
    })
    return `Hello ${info}`
    
};
// let user = newFunction(person)
// console.log(user);




// task 23:
// let numb = 1.4; // => làm tròn lên số bên.  result mong đợi = 2
// let numb = 1.4; // => làm tròn lên số bên.  result mong đợi = 1
function makeAround(){
    let numb1 = 1.4; // => làm tròn lên số bên.  result mong đợi = 2
    console.log(Math.ceil(numb1));

    let numb2 = 1.4; // => làm tròn lên số bên.  result mong đợi = 1
    console.log(Math.floor(numb2));
}
// task 24: Thực hiện nối chuỗi dữa vào các biến bên dưới. kết quả mong đợi. => 'name: user - age: 21 - class: classAbc'



function connectString(){
    let name = "user";
    let age = 21;
    let className = "classAbc";
    let output= `name: ${name} - age ${age} - class ${className} `;
    console.log(output);
}



// task 25: cho array number bên dưới, tính tổng array: result = 45;
function sumArray(){
    let sum = 0;
    const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < arrNumber.length; i++){
        sum += arrNumber[i];

    }
    console.log(sum);
}