let arrayAngka = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

let asc = (a, b) => {
        return a-b
}

let desc = (a, b) => {
    return b-a
}

var toggle = 1
let funSort = (selection) => {
    if (toggle == 1) {
        arrayAngka[selection].sort(desc)
        funTabel(arrayAngka)
        toggle = 0
    } 
    else {
        arrayAngka[selection].sort(asc)
        funTabel(arrayAngka)
        toggle = 1
    }
  }

var toggleVertical = 1
let funSortVertical = (selection) => {
    if (toggleVertical == 1) {
        var arrayBaru = arrayAngka.map((val) => {
            return val[selection]
        })
        arrayBaru.sort(desc)
    
        for (var i = 0 ; i<4 ; i++){
            arrayAngka[i][selection] = arrayBaru[i]
        }
        funTabel(arrayAngka)
        toggleVertical = 0
    }
    else {
        var arrayBaru = arrayAngka.map((val) => {
            return val[selection]
        })
        arrayBaru.sort(asc)
    
        for (var i = 0 ; i<4 ; i++){
            arrayAngka[i][selection] = arrayBaru[i]
        }
        funTabel(arrayAngka)
        toggleVertical = 1
    }
}

let rotate = (matrix) => {          // function statement
    const N = matrix.length - 1;   // use a constant
    // use arrow functions and nested map;
    const result = matrix.map((row, i) => 
         row.map((val, j) => matrix[N - j][i])
    );
    matrix.length = 0;       // hold original array reference
    matrix.push(...result);  // Spread operator

    funTabel(arrayAngka)
}

let rotateTimes = () => {
    var banyak = document.getElementById("number").value
    for (var i = 0; i<banyak ; i++){
        rotate(arrayAngka)
    }
}

// var arah = document.querySelector("input[name=arah]:checked").value

let funTabel = (array) => {
    let listAngka = array.map((val, index) => {
        return `   
        <tr>
            <td>${val[0]}</td>
            <td>${val[1]}</td>
            <td>${val[2]}</td>
            <td>${val[3]}</td>
            <td><button type="button" onclick=funSort(${index})>Sort</button></td>
        </tr> `
    })

    listAngka.push(`<tr>
                    <td><button type="button" onclick=funSortVertical(0)>Sort</button></td>
                    <td><button type="button" onclick=funSortVertical(1)>Sort</button></td>
                    <td><button type="button" onclick=funSortVertical(2)>Sort</button></td>
                    <td><button type="button" onclick=funSortVertical(3)>Sort</button></td>
                    <td></td>
                    </tr> 
                    `)

    document.getElementById('here').innerHTML = listAngka.join('');
}

funTabel(arrayAngka)