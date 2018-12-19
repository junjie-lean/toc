import cluster from 'cluster';
import express from 'express';
import os from 'os';
import next from 'next';

const port = parseInt(process.env.PORT, 10) || 8080;
const dev = process.env.NODE_ENV !== 'production';
const app = next({
    dev
})
const handle = app.getRequestHandler()

console.log(process.pid)
if (cluster.isMaster) {
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }

} else {
    app.prepare().then(() => {
        const server = express();
        server.get('*', (req, res) => {
            console.log(`${process.pid} dispose this request!`)
            return handle(req, res)
        })

        server.listen(port, err => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${port}`)
        })
    })
}