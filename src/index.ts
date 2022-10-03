/**
 * The program randomly generates marks and
 * saves them in a 2d array and in a .csv file.
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-10-03
 */

import MrCoxallStack from './MrCoxallStack'
import promptSync from 'prompt-sync'

// use MrCoxallStack and promptSync classes
const prompt = promptSync()
const myStack = new MrCoxallStack()

// Input & Process
const userNum = Number(prompt('Enter a number: '))
myStack.Push(userNum)

// Output
myStack.ShowStack()

console.log('\nDone.')
