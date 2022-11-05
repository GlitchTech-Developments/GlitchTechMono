/* eslint-disable @typescript-eslint/no-var-requires */
// server.js
const { createServer } = require("http")
const { parse } = require("url")
const stream = require("stream")
const next = require("next")

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl

    if (pathname === "/log") {
      req.setEncoding("utf8")
      let data = ""
      req.on("data", (chunk) => {
        data += chunk
      })
      stream.finished(req, (err) => {
        if (err) {
          req.log.error(err)
          return errorResponse(res)
        }
        try {
          const { msg, level = "info" } = JSON.parse(data)
          req.log[level](msg)
        } catch (err) {
          return errorResponse(res)
        }
        return okResponse(res)
      })
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(6969, (err) => {
    if (err) throw err
    console.log("main  - Ready on http://localhost:6969")
  })
})
