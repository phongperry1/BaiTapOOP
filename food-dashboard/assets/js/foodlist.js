console.clear();

const listFood = [];

document.querySelector('#btnThemMon').onclick = function() { 
    console.log("Add food");

    let foodID = document.querySelector('#foodID').value; 
    let tenMon = document.querySelector('#tenMon').value;
    let loai = document.querySelector('#loai').value;
    let giaMon = document.querySelector('#giaMon').value;
    let khuyenMai = document.querySelector('#khuyenMai').value;
    let tinhTrang = document.querySelector('#tinhTrang').value;
    let hinhMon = document.querySelector('#hinhMon').value;
    let moTa = document.querySelector('#moTa').value;

    let food = {
        id: foodID,
        tenMon: tenMon,
        loai: loai,
        giaMon: giaMon,
        khuyenMai: khuyenMai,
        tinhTrang: tinhTrang,
        hinhMon: hinhMon,
        moTa: moTa,
    }

    console.log(food);

    listFood.push(food);

    console.log(listFood);
    renderListFood();
    resetFormAddFood();

    saveListFood();
}

function resetFormAddFood() {
    let foodID = document.querySelector('#foodID'); 
    let tenMon = document.querySelector('#tenMon');
    let loai = document.querySelector('#loai');
    let giaMon = document.querySelector('#giaMon');
    let khuyenMai = document.querySelector('#khuyenMai');
    let tinhTrang = document.querySelector('#tinhTrang');
    let hinhMon = document.querySelector('#hinhMon');
    let moTa = document.querySelector('#moTa');

    foodID = '';
    tenMon = '';
    loai = '';
    giaMon = '';
    khuyenMai = '';
    tinhTrang = '';
    hinhMon = '';
    moTa = '';
}

function renderListFood() {
    const tbodyFood = document.getElementById('tbodyFood');
    if (listFood.length == 0) {
        tbodyFood.innerHTML = "";

        return;
    }
    let content = "";

    for(let i = 0; i < listFood.length; i++) {
        const food = listFood[i];

        console.log(food);
        content += `
        <tr>
            <td>${food.id}</td>
            <td>${food.tenMon}</td>
            <td>${showLoai(food.loai)}</td>
            <td>${food.giaMon}</td>
            <td>${food.khuyenMai}</td>
            <!-- TODO -->
            <td>${tinhGiaKhuyenMai(
                Number(food.giaMon),
                Number(food.khuyenMai)
            )}
            </td>
            <td>${showTinhTrang(food.tinhTrang)}</td>
            <td>
                <button>Edit</button>
                <button onclick="handleDeleteFood(${food.id})">Delete</button>
            </td>`
    }

    tbodyFood.innerHTML = content;
              
}

function tinhGiaKhuyenMai(gia, khuyenMai) { 
   return gia * (100 - khuyenMai) / 100;

}

function showLoai(loai) {
    if (loai == 'loai1') {
        return "Chay";
    } 
        
    return "Mặn";
    
}

function showTinhTrang(tinhTrang) {
    if (tinhTrang == '0') {
        return "Hết";
    } 
        
    return "Còn";
}

function handleDeleteFood(id) {
    console.log("id", id);

    const index = findIndex(listFood, id);
    // if(index == -1) {
    //     return;
    // }
    
    listFood.splice(index, 1);
    renderListFood();
    saveListFood();
}

function findIndex(arr, key) {
    let index = -1;
    for(let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (item.id === key) {
            return i;
        }
    }
    return index;
}


// localStorage.setitem("key", "value");

// set item
// get item
// removeItem

const lap = {
    id: "1",
    name: "Laptop",
    price: 1000000,
    quantity: 5,
}

const lapJson = JSON.stringify(lap);
localStorage.setItem("laptop", lapJson);
const lapItem = localStorage.getItem("laptop");

const lapItemObj = JSON.parse(lapItem);

function saveListFood() {
    localStorage.setItem('listFood', JSON.stringify(listFood));
}

function restartListFood() {

    const foods = localStorage.getItem("listFood");
    if(foods) {
       listFood = JSON.parse(foods);
    }
    
}

