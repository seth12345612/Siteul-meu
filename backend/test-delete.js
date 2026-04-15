const http = require('http');

function testDeleteUser() {
    const data = JSON.stringify({
        adminUsername: 'admin',
        adminPassword: 'password123'
    });

    const options = {
        hostname: 'localhost',
        port: 3000,
        path: '/users/aqw',
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    };

    const req = http.request(options, (res) => {
        let responseData = '';
        
        res.on('data', (chunk) => {
            responseData += chunk;
        });
        
        res.on('end', () => {
            console.log('Status:', res.statusCode);
            console.log('Response:', responseData);
        });
    });

    req.on('error', (error) => {
        console.error('Error:', error);
    });

    req.write(data);
    req.end();
}

testDeleteUser(); 