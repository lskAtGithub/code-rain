import { getRandomChat, getRandomColor, getRandom } from './utils'

const canvas: HTMLCanvasElement = document.getElementById(
  'cvs'
) as HTMLCanvasElement

const ctx: CanvasRenderingContext2D = canvas.getContext(
  '2d'
) as CanvasRenderingContext2D

const width = window.innerWidth * devicePixelRatio
const height = window.innerHeight * devicePixelRatio
const fontSize: number = 20
const rowLen: number = Math.floor(width / fontSize)
const rows: number[] = new Array(rowLen).fill(0)

canvas.width = width
canvas.height = height

function draw() {
  ctx.fillStyle = 'rgba(244,244,244,0.1)'
  ctx.fillRect(0, 0, width, height)
  for (let index = 0; index < rows.length; index++) {
    ctx.fillStyle = getRandomColor()
    ctx.font = `${fontSize}px`
    const chat = getRandomChat()
    const x = index * fontSize
    const y = (rows[index] + 1) * fontSize
    ctx.fillText(chat, x, y)
    rows[index]++
    if(y > height && Math.random() > 0.9) {
      rows[index] = 0
    }
  }
}
draw()
setInterval(draw, 50)
