const arr = ["XOOXXXOO", "OOOOXOXX", "XXOXXOOO", "OXOOOXXX", "OOXXXXOX", "XOXXXOXO", "OOOXOXOX", "XOXXOXOX"];

const Sample = () => {
    console.log('inside sample');
    const countX = (givenArr, i, j) => {
        // console.log(`[${i}][${j}]`);
        // console.log('************');
        let count = 0;
        for (let outer = -1; outer < 2; outer++) {
            for (let inner = -1; inner < 2; inner++) {
                const xi = i + outer;
                const yj = j + inner;
                if (xi < 0 || yj < 0 || xi > 7 || yj > 7) {
                    continue;
                } else {
                    // console.log(`[${xi}][${yj}]`);
                    if (givenArr[xi][yj] === 'X') {
                        count = count + 1;
                    }
                }


            }
        }
        // console.log('************');
        return count;
    }
    const mineSweeper = (arr) => {
        const newArr = [];
        arr.forEach(element => {
            newArr.push(element.split(''))
        });
        console.log('************newArr**************');
        console.log(newArr);
        const transformedArr = new Array(newArr.length);
        for (let index = 0; index < transformedArr.length; index++) {
            transformedArr[index] = new Array(newArr.length);
        }
        for (let i = 0; i < newArr.length; i++) {
            for (let j = 0; j < newArr[i].length; j++) {
                if (newArr[i][j] === 'X') {
                    transformedArr[i][j] = 'X';
                } else {
                    let count = countX(newArr, i, j);
                    transformedArr[i][j] = count;
                }
            }
        }
        console.log('************transformedArr**************');
        console.log(transformedArr);
    }
