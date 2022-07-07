//given 1 array of numbers and several "bingo" boards, one by one go through the numbers. and mark them on each bingo board. if a board wins, take the number that was just called, plus the sum of all non-marked numbers on that board, and multiply them together.

const numbers = [23, 30, 70, 61, 79, 49, 19, 37, 64, 48, 72, 34, 69, 53, 15, 74, 89, 38, 46, 36, 28, 32, 45, 2, 39, 58, 11, 62, 97, 40, 14, 87, 96, 94, 91, 92, 80, 99, 6, 31, 57, 98, 65, 10, 33, 63, 42, 17, 47, 66, 26, 22, 73, 27, 7, 0, 55, 8, 56, 29, 86, 25, 4, 12, 51, 60, 35, 50, 5, 75, 95, 44, 16, 93, 21, 3, 24, 52, 77, 76, 43, 41, 9, 84, 67, 71, 83, 88, 59, 68, 85, 82, 1, 18, 13, 78, 20, 90, 81, 54];

let finishedNumber = 0;
let winningBoard = [];

fetch("file.txt")
    .then((response) => {
        return response.text();
    })
    .then((text) => {
        let bingoBoards = formatBoards(text);

        // for each number, search the boards, and the rows, and the elements. add marked = true to the element

        numbers.forEach(num => {
            bingoBoards = searchBoards(num, bingoBoards);
            checkBoards(bingoBoards); //check all the numbers, but save the number and state of the winning one.
        })
        console.log('finished Number:', finishedNumber);
        console.log('winning board:', winningBoard);
        // then do the math on the sum of those not marked. and multiply times finished Number
    });



function checkBoards(boards) {
    boards.forEach(board => {
        board.forEach(row => {
            //if all of the ones in the row are marked then do this: store winning as winningBoard as is.;
            //then, save the number that was passed in finishedNumber; use Object.copy()
        })
    })
}






function searchBoards(number, boards) {
    let updatedBoards = [];

    for (let i = 0; i < boards.length; i++) { // board
        updatedBoards.push([])
        for (let j = 0; j < boards[i].length; j++) { // boards row
            updatedBoards[i][j] = boards[i][j].map(el => {
                if (el.num == number) {
                    return { num: el.num, marked: true }
                } else {
                    return { num: el.num, marked: el.marked }
                }
            })
        }
    }
    return updatedBoards
}





function formatBoards(rawText) {
    let boards = [];
    let inLines = rawText.split('\n');
    trimmed = inLines.map(el => el.trim());
    trimmed = trimmed.filter((el) => { return el.length > 5 });

    //divide into boards. each are 5 rows.
    for (let i = 0; i < trimmed.length; i += 5) {
        const chunk = trimmed.slice(i, i + 5);
        boards.push(chunk);
    }


    //each element is a board
    //so we want to take each board row, and split that
    let newBoards = boards.map(board => {
        return board.map(row => {
            return row.split(' ');
        })
    })

    // filter out '' from any board's row
    for (let i = 0; i < newBoards.length; i++) { // board
        for (let j = 0; j < newBoards[i].length; j++) { // boards row
            newBoards[i][j] = newBoards[i][j].filter(el => el !== ""); // element
            newBoards[i][j] = newBoards[i][j].map(el => { return { num: parseInt(el), marked: false } })
        }
    }
    return newBoards
}