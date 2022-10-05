/**
 * MrCoxallStack Class
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-10-03
 */

class MrCoxallStack {
  stack: number[] = []

  pushItem(pushedNumber: number): void {
    this.stack.push(pushedNumber)
  }

  showStack(): void {
    console.log(this.stack)
  }
}

export = MrCoxallStack
