import {createServer} from "http"
import {DemoService, serveDemoService, EchoRequest, EchoResponse} from "./demo/service.proto"

class DemoServiceServer implements DemoService {
    async Echo(req: EchoRequest): Promise<EchoResponse> {
        return {message: req.message}
    }
}

createServer(serveDemoService(new DemoServiceServer()))