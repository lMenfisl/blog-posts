var users = [{ name: 'vasa', age=20 }, { name: 'pitya', age =33 }, { name: 'An', age =27 }];

//var newUsers = users.map(function(item){
//  return `<li>${item}</li>`;
//});

var filteredUsers = users.filter((item) => {
    if (item.age < 30) {
        return true;
    }
    return false;
})


console.log(filteredUsers);

