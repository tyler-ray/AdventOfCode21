// given an array, how many times does the index element increase from the previous number;
let array1 = [1, 2, 3, 2, 4, 5, 6, 5] // expected output: 5
let array2 = [5, 4, 3, 4, 2, 1] //expected output: 1
let array3 = [100, 5, 25, 125, 124, 126] //expected output: 3
let array4 = [199,
    200,
    208,
    210,
    200,
    207,
    240,
    269,
    260,
    263
]

function increaseChecker(arr) {
    let prevEl;
    let counter = 0;
    arr.forEach((el) => {
        if (el > prevEl && prevEl != 0) {
            counter++
        }
        prevEl = el;
    })
    return counter;
}

// just adding stuff to remember commiting