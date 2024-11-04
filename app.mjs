import http from "http";
import {Services} from "./services.mjs";

const service = new Services();
const server = http.createServer((request, response) => {

    response.setHeader("Content-Type", "application/json");

    if (request.method === "GET") {
        service.getTodoList(request, response);
    } else if (request.method === "POST") {
        service.createTodo(request, response);
    } else if (request.method === "PUT") {
        service.updateTodo(request, response);
    } else if (request.method === "DELETE") {
        service.deleteTodo(request, response);
    }

});

server.listen(8000);