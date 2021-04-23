export default class Day01{
}

import * as fs from 'fs';
import * as path from 'path';

function readInput() : string {
    const filePath = path.join(__dirname, '\\input\\input01.txt');
    return fs.readFileSync(filePath, 'utf-8');
}

export function Part1() : number {
    let input = readInput();
    let digits = new Array();

    for (var i = 0; i < input.length; i++) {
        if (i == input.length - 1) {
           if (parseInt(input.charAt(i)) == parseInt(input.charAt(0))) {
               digits.push(parseInt(input.charAt(i)))
           }         
        }
        else {
            if (parseInt(input.charAt(i)) == parseInt(input.charAt(i + 1))) {
                digits.push(parseInt(input.charAt(i)))
        }   
      }
    }

    return digits.reduce(function(a, b) {
         return a + b });
}

export function Part2() : number {
    let input = readInput();
    let digits = new Array();

    let halfLength = input.length / 2;

    for (var i = 0; i < input.length; i++) {
        if (i > halfLength -1) {
            if (parseInt(input.charAt(i)) == parseInt(input.charAt((i + halfLength) % halfLength ))) {
                digits.push(parseInt(input.charAt(i)))
           }        
        }
        else {
            if (parseInt(input.charAt(i)) == parseInt(input.charAt(i + halfLength))) {
                digits.push(parseInt(input.charAt(i)))
        }   
      }
    }

    return digits.reduce(function(a, b) {
         return a + b });
}

console.log('Part 1: ' + Part1());
console.log('Part 2: ' + Part2()); 