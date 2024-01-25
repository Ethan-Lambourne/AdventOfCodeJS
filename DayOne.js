const fs = require('node:fs');
let fileName = "input.txt";
let numbersToAdd = [];
const validNumbers = ['1','2','3','4','5','6','7','8','9','one','two','three','four','five','six','seven','eight','nine',];
fs.readFile(fileName, 'utf-8', (err, data) => 
{
    if (err) 
    {
        console.error(err);
        return;
    }
    let lines = data.split('\n');
    for (let i = 0; i < lines.length; i++) 
    {
        let line = [];

        for (let x = 0; x < lines[i].length; x++)
        {
            for (let y = x+1; y <= lines[i].length; y++)
            {
                let possibleNumber = lines[i].slice(x,y);
                if (validNumbers.includes(possibleNumber))
                {
                    line.push(possibleNumber);
                }
            }
        }

        let numberHalfs = [];

        let firstNumber = line.find(x => x == '1' || x == '2' || x == '3' || x == '4' || x == '5' || x == '6' || x == '7' || x == '8' || x == '9' ||
        x == 'one' || x == 'two' || x == 'three' || x == 'four' || x == 'five' || x == 'six' || x == 'seven' || x == 'eight' || x == 'nine');

        let secondNumber = line.findLast(x => x == '1' || x == '2' || x == '3' || x == '4' || x == '5' || x == '6' || x == '7' || x == '8' || x == '9' ||
        x == 'one' || x == 'two' || x == 'three' || x == 'four' || x == 'five' || x == 'six' || x == 'seven' || x == 'eight' || x == 'nine');
        
        numberHalfs[0] = ConvertNumber(firstNumber);
        numberHalfs[1] = ConvertNumber(secondNumber);

        let fullNumber = Number(numberHalfs[0] + numberHalfs[1]);
        numbersToAdd.push(fullNumber);
    }
    let total = 0;
    for (let num in numbersToAdd)
    {
        if (!Number.isNaN(numbersToAdd[num]))
        {
            total += numbersToAdd[num];
        }
    }
    console.log(`Day One:
Total: ${total}
----------------------------------`);
});

function ConvertNumber(number) 
{
    switch (number)
        {
            case 'one':
                return '1';
            case 'two':
                return '2';
            case 'three':
                return '3';
            case 'four':
                return '4';
            case 'five':
                return '5';
            case 'six':
                return '6';
            case 'seven':
                return '7';
            case 'eight':
                return '8';
            case 'nine':
                return '9';
            default:
                return number;
        }
}