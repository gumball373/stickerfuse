const { createServer } = require('http');

const server  = createServer((request, response) => {

    if (request.method == 'POST'){
        console.log('working');
	    let allData = [];

        // collect from all the data events here
        request.on('data', function(data) {
            allData.push(data.toString());
        });

        request.on('close', function(){
            // we have all data now
            let result = allData.join(allData, "");
            console.log('recieved');
        })



        
        // request.on('data', function(data) {
        //     jsonData = JSON.parse(data);
        //     console.log(data);
        // })

        // request.on('end', function() {
        //     // response.writeHead(200, {'Content-Type': 'text/html'})
        //     response.end('post received')
        // })
    }
})

server.listen(8080, "0.0.0.0");