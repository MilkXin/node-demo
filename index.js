/* const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    const query = querystring.parse(url.split('?')[1])

    res.setHeader('Content-type', 'application/json')

    const resData = {
        method,
        url,
        path,
        query
    }

    if (method === 'GET') {
        res.end(
            JSON.stringify(resData)
        )
    }

    if (method === 'POST') {
        let postData = ''
        req.on('data', thunk => {
            postData += thunk.toString()
        })

        req.on('end', () => {
            resData.postData = postData
            res.end(
                JSON.stringify(resData)
            )
        })
    }
})

server.listen(3000, () => {
    console.log('OK')
}) */



/* const mysql = require('mysql')

//创建连接对象
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'myblog'
})

//开始连接
con.connect()

//执行sql语句
const sql = 'select * from users;'
con.query(sql, (err, result) => {
    if (err) {
        console.log(err)
        return
    }

    console.log(result)
}) */



/* const redis = require('redis')

//创建客户端
const redisClient = redis.createClient(6379, '127.0.0.1')
redisClient.on('error', err => {
    console.error(err)
})

//测试
redisClient.set('myname', 'zhangsan', redis.print)
redisClient.get('myname', (err, val) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('val:', val)

    //退出
    redisClient.quit()
}) */



const fs = require('fs')
const path = require('path')

const fileName = path.resolve(__dirname, 'data.txt')

//读取文件内容
fs.readFile(fileName, (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    //data是二进制类型，需要转换为字符串
    console.log(data.toString())
})

