/**
 * MrCoxallStack Class
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-10-03
 */

class MrCoxallStack {
  stack: number[] = []

  // pushItem Method - Adds a new item to the stack array.
  pushItem(pushedNumber: number): void {
    this.stack.push(pushedNumber)
  }

  // showStack Method - Displays the stack array.
  showStack(): void {
    console.log(this.stack)
  }
}

export = MrCoxallStack
