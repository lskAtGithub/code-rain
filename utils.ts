export function getRandom(startNum: number, endNum: number): number {
  return Math.floor(Math.random() * (endNum - startNum + 1)) + startNum
}

export function getRandomColor(): string {
  const colors: string[] = [
    '#33b5e5',
    '#0099cc',
    '#aa66cc',
    '#9933cc',
    '#669900',
    '#ffbb33',
    '#ff8800',
    '#ff4444',
    '#cc0000',
  ]
  return colors[getRandom(0, 8)]
}

export function getRandomChat(): string {
  const chats: string = 'console.log(hellojavascript)'
  return chats[getRandom(0, chats.length - 1)]
}
