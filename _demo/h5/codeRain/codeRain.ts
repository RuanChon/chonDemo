// 代码雨

let canvas: HTMLCanvasElement = document.querySelector("#rainCanvas") as HTMLCanvasElement
let ctx: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D
canvas.width = screen.availWidth
canvas.height = screen.availHeight

let rainText: string[] = "achondefujqdesadadfas".split("")
let Arr = Array(Math.ceil(canvas.width / 10)).fill(0)

console.log(Arr)

const rain = () => {
  ctx.fillStyle = "rgba(0,0,0,0.5)"
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = "#0f0"
  Arr.forEach((item, index) => {
    ctx.fillText(rainText[Math.floor(Math.random() * rainText.length)], index * 10, item + 10)
    Arr[index] = item > canvas.height || item > 20000 * Math.random() ? 0 : item + 10
  })
}

setInterval(rain, 50)
