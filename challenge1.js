let arrayAngka = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

var arah = document.querySelector("input[name=arah]:checked").value
console.log(arah)

var toggle = 1

function funSort(selection) {
    // var x = document.getElementById("myDIV");
    if (toggle == 1) {
        arrayAngka[selection].sort((a, b) => {
            return b-a
        })
    
        funTabel(arrayAngka)

      toggle = 0
      
    } else {
        arrayAngka[selection].sort((a, b) => {
            return a-b
        })
    
        funTabel(arrayAngka)
      toggle = 1
     
    }
  }





// let funSort_V0 = (selection) => {

//     var sortedArray = arrayAngka[selection[0]].sort(funSort_V0(a,b){
//         if(a[0] == b[0]){
//             return a[1] - b[1]
//         }
//         return b[0] - a[0]
//     })


//     // arrayAngka[selection].sort([])

//     funTabel(arrayAngka)
// }

let funSort_V1 = (selection) => {
    // arrayAngka[selection].sort(funShort_V1(a,b) => {
    //     return b[[1]] - a[[1]]
    // })
    // arrayAngka[selection].sort([])

    funTabel(arrayAngka)
}

let funSort_V2 = (selection) => {
    arrayAngka[selection].sort((a,b) => {
        return b[[2]] - a[[2]]
    })

    // arrayAngka
    // arrayAngka[selection].sort([])

    funTabel(arrayAngka)
}

let funSort_V3 = (selection) => {
    arrayAngka[selection].sort((a,b) => {
        return [b[3]] - a[[3]]
    })
    // arrayAngka[selection].sort([])

    funTabel(arrayAngka)
}


// var funPutar = () => {
    
//     let hasil1,hasil2,hasil3,hasil4 = []

//     hasil1= arrayAngka.map((val,index) => {
//          return val[0]
//     })

//     hasil2 = arrayAngka.map((val,index) => {
//         return val[1]
//    })

//     hasil1= arrayAngka.map((val,index) => {
//     return val[2]
//     })

//     hasil2 = arrayAngka.map((val,index) => {
//     return val[3]
//     })

//     console.log(hasil1,hasil2,hasil3,hasil4)

//     // funTabel(hasilPutarKanan)


// }

var funPutar = () => {
    var arrayBaru = arrayAngka[0].map((col, i) => arrayAngka.map(row => row[i]));
    return arrayBaru
}

console.log(funPutar())

function transposeArray(array, arrayLength){
    var newArray = [];
    for(var i = 0; i < array.length; i++){
        newArray.push([]);
    };

    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < arrayLength; j++){
            newArray[j].push(array[i][j]);
        };
    };

    return newArray;
}

console.log(transposeArray(arrayAngka,4))

let funTabel = (array) => {
    let listAngka = array.map((val, index) => {

        return `   
        <tr>
            <td>${val[0]}</td>
            <td>${val[1]}</td>
            <td>${val[2]}</td>
            <td>${val[3]}</td>
            <td><button type="button" onclick=funSort(${index})>Sort</button></td>
        </tr> 

        `
    })

    listAngka.push(`<tr>
                    <td><button type="button" onclick=funSort_V0()>Sort</button></td>
                    <td><button type="button" onclick=funSort_V1()>Sort</button></td>
                    <td><button type="button" onclick=funSort_V2()>Sort</button></td>
                    <td><button type="button" onclick=funSort_V3()>Sort</button></td>
                    <td></td>
                    </tr> 
                    `)

    document.getElementById('here').innerHTML = listAngka.join('');
  
}

funTabel(arrayAngka)