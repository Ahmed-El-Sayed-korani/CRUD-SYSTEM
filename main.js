

// var userRole = window.prompt('enter you role')

// if (userRole=='admin'){
//     document.getElementById('demo').innerHTML="you can add , delete and get all data"
// }

// else if (userRole=='moderator'){ 
//     document.getElementById('demo').innerHTML="you can add , delete and veiw only"

// }

// else  { 
//     document.getElementById('demo').innerHTML="you can veiw only"

// }

// switch (userRole) {
//     case 'admin':
//             document.getElementById('demo').innerHTML="you can add , delete and get all data"
//         break;

//         case 'moderator':
//             document.getElementById('demo').innerHTML="you can add , delete and get all data"
//         break;

//     default:
//             document.getElementById('demo').innerHTML="you can veiw only"

//         break;
// }


// function calsalary(usersalary,profit,taxs) {
//     var salary=   usersalary * profit / taxs
//     console.log(salary);
// }

// calsalary(1000,200,40);
// calsalary(2000,100,30);
// calsalary(2500,200,40);
// calsalary(3000,150,40);

// function getInputValue() {
//     var num1= document.getElementById('num1').value
//     var num2= document.getElementById('num2').value
//     var sum = Number(num1) + Number(num2)
//     document.getElementById('result').innerHTML = " result = " + sum

// }

// var user= {
//     name:"ahmed",
//     age:25,
//     email:"ahmed@gmail.com",
//     isMarried:true,
//     Wife:{
//         name:"sara",
//         age:27,
//         email:"sara@gmail.com",
//     }
// }

// console.log(user.Wife.name)


// var color=['red','yelloe','blue','green']

// console.log(color[0])

// var users= [ 
//     {name:"ahmed",age:26,email:"ahmed@gmail.com"},
//     {name:"ali",age:23,email:"ali@gmail.com"},
//     {name:"mohsin",age:14,email:"mohsin@gmail.com"},
//     {name:"aya",age:18,email:"aya@gmail.com"},
//     {name:"asmaa",age:30,email:"asmaa@gmail.com"},
//     {name:"emaad",age:35,email:"emaad@gmail.com"},
//     {name:"nana",age:28,email:"nana@gmail.com"},
//     {name:"ahmed",age:34,email:"ahmed@gmail.com"},
//     {name:"ebram",age:26,email:"ebram@gmail.com"},
// ]




var productNameInput=document.getElementById('productName')
var productCatogeryInput=document.getElementById('productCatogery')
var productPriceInput=document.getElementById('productPrice')
var productDescriptionInput=document.getElementById('productDescription')

var productcontainer=[]


if (localStorage.getItem('products') != null) {

    productcontainer=JSON.parse(localStorage.getItem('products'))
    dispalyProducts()
}

function addproduct() {
    var productobj= {
        name: productNameInput.value,
        category: productCatogeryInput.value,
        price: productPriceInput.value,
        description: productDescriptionInput.value,

    }

    productcontainer.push(productobj)
    localStorage.setItem('products',JSON.stringify(productcontainer))
    console.log(productcontainer)

    dispalyProducts()
    
}


function dispalyProducts() {

        var cartona=''

    for (var i=0;i<productcontainer.length;i++) {
        cartona+=`
            <tr>
                <td>${i}</td>
                <td>${productcontainer[i].name}</td>
                <td>${productcontainer[i].category}</td>
                <td>${productcontainer[i].price}</td>
                <td>${productcontainer[i].description}</td>
                <td><button onclick="deletProduct(${i})" class="btn btn-danger btn-sm">Delete</button></td>
                <td><button class="btn btn-success btn-sm">Update</button></td>



            </tr>
        `
    }

    document.getElementById('tbody').innerHTML=cartona

    
}

function deletProduct(Index) {
    productcontainer.splice(Index,1)
    localStorage.setItem('products',JSON.stringify(productcontainer))
    dispalyProducts()

}