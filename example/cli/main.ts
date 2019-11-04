import "cross-fetch/polyfill"
import {DemoService} from "./demo/service.proto"

const svc = new DemoService("http://localhost:5000/twirp/")

async function main() {
    const message = process.argv.pop()
    try {
        console.log("echo > %s", message)
        const res = await svc.Echo({message})
        console.log("echo < %s", res.message)
    } catch (err) {
        console.error(err.message)
    }
}

main()