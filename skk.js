//载入http模块
var http =require("http");

http.createServer(function(request,response){
	response.writeHead(200,{'content-type':'text/plain'});
	
	response.end('Hellon World\n');
}).listen(8888);

console.log('服务运行在8888段口');