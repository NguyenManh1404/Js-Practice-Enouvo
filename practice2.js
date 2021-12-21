// task 1: Cho một chuỗi, Viết hàm đảo ngược từng từ trong câu
function reverseString(){
    var string="I love Program";
    var temp = string.split(" ");
    temp.reverse();
    console.log(temp.toString().replaceAll(",", " "));
}
// task 2: Viết hàm đệ quy đảo ngược chuỗi.


const reverseString2 = (input, out) => {

  out = out.concat(input.at(input.length - 1));
  input = input.slice(0, input.length - 1);

  if (input.length > 0) {
    reverseString2(input, out);
  } else {
    console.log(out);
  }
  
};

function reverseStringCall(){
    reverseString2("HelloWord", "")
}

// task 3: Cho một mảng, Viết hàm đảo ngược các item trong array đó.
function reverseArray(){
      let array = ["Java","C#","JS","HTML", "Ruby"];
      let result = [];
      for (i = 0; i < array.length; i++) {
        result[i] = array[array.length - 1 - i];
      }
      console.log( result);
    };
   
// task 4: viết hàm đệ quy đảo ngược một mảng

const reverseArrayRecursive = (input, out) => {
  out.push(input[input.length - 1]);
  input.pop();
  if (input.length > 0) {
    reverseArrayRecursive(input, out);
  } else {
    console.log(out);
  }
  return;
};
function reverseArrayRecursiveCall(){
    reverseArrayRecursive(["Java","C#","JS","HTML", "Ruby"], []);
}


// task5: viết hàm đệ quy tính tổng

function sumArray(array,length){
    if (length == 1){
        return array[0];
    }
    return sumArray(array, length-1) + array[length-1];
}
console.log(sumArray([1,2,2,5],4));
// task 6: Viết hàm đệ quy để biết một số là số nguyên tố
function checkNumber(num,i=2){
    if(i>Math.sqrt(num)) return true
    if(num%i==0) return false
    return checkNumber(num,i+1)
}
console.log("Task 6 reusult",checkNumber(9));
// task 7: Viết một class bao gồm 4 methods: add, update, remove, so sánh 

class classUser {
    users = [{ id: 1, name: 'user 1' }, { id: 2, name: 'user 2' }];

    add(user) {
        const isNum = this.isExitUser(user.id);
        if (isNum) return this.users;
        this.users = [...this.users, user];
        return this.users;
    };

    remove(userId) {
        this.users = this.users.filter(f => f.id !== userId);
        return this.users;
    };

    updated(user) {
        const index = this.users.findIndex(t => t.id === user.id);
        this.users[index] = user;
        return this.users;
    };

    isExitUser(userId) {
        return this.users.some(s => s.id === userId);
    };
};

const useClassUser = new classUser();

useClassUser.add({id: 3, name: 'user 3'});
useClassUser.remove(1);
useClassUser.updated({id: 2, name: 'USER 2'});




