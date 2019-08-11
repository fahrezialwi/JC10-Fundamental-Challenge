let arrayAngka = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

let asc = (a, b) => {
    return a - b
}

let desc = (a, b) => {
    return b - a
}

let toggle = 1
let funSort = (selection) => {
    if (toggle == 1) {
        arrayAngka[selection].sort(desc)
        funTabel(arrayAngka)
        toggle = 0
    } else {
        arrayAngka[selection].sort(asc)
        funTabel(arrayAngka)
        toggle = 1
    }
}

let toggleVertical = 1
let funSortVertical = (selection) => {
    if (toggleVertical == 1) {
        let arrayBaru = arrayAngka.map((val) => {
            return val[selection]
        })
        arrayBaru.sort(desc)

        for (let i = 0; i < arrayAngka.length; i++) {
            arrayAngka[i][selection] = arrayBaru[i]
        }
        funTabel(arrayAngka)
        toggleVertical = 0
    } else {
        let arrayBaru = arrayAngka.map((val) => {
            return val[selection]
        })
        arrayBaru.sort(asc)

        for (let i = 0; i < 4; i++) {
            arrayAngka[i][selection] = arrayBaru[i]
        }
        funTabel(arrayAngka)
        toggleVertical = 1
    }
}

const flip = (matrix) => {
    return matrix[0].map((column, index) => {
        return matrix.map(row => row[index])
    })
}

const rotateClockwise = (matrix) => {
    let result = flip(matrix.reverse())
    matrix.length = 0
    matrix.push(...result)
    funTabel(matrix)
}

const rotateCounterClockwise = (matrix) => {
    let result = flip(matrix).reverse()
    matrix.length = 0
    matrix.push(...result)
    funTabel(matrix)
}


let rotate = () => {
    let arah = document.querySelector("input[name=arah]:checked").value
    let banyak = document.getElementById("number").value

    if (arah == 'Kiri') {
        for (let i = 0; i < banyak; i++) {
            rotateCounterClockwise(arrayAngka)
        }
    } else if (arah == 'Kanan') {
        for (let i = 0; i < banyak; i++) {
            rotateClockwise(arrayAngka)
        }
    }
}

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