var http = require("http");

http.createServer(function(request, response){
    /*
        HTTP 헤더 전송
        HTTP status : 200 : OK
        Content Type : text/plain
    */
   response.writeHead(200, {'Content-Type' : 'text/plain'});

   /*
        Response Body를 "Hello world"로 설정
    */
   response.end("Hello World\n");
}).listen(8081);