const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.write("Welcome to our home page");
        res.end();
    }

    else if (req.url === '/about') {
        res.end("Lets look at our history");
    }
    else {
        res.end(`
            <h1>Oops!!!</h1>
            <p>We can't find the page you are looking for</p>
            <a href="/">Home Page</a>
            `
        )
    }
    
   
});

server.listen(5000);