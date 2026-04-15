const fs = require('fs');
const pg = require('pg');
const url = require('url');

const config = {
    user: "avnadmin",
    password: "AVNS_xuWhP1CbIH8i3k2wEUk",
    host: "pg-11a0e459-joc-financiar.f.aivencloud.com",
    port: 23187,
    database: "defaultdb",
    ssl: {
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
MIIERDCCAqygAwIBAgIUd5s12WNZxWhxPec2+pqzKer3RNcwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvYjE0MGI4ZjktNzJjYy00ZjUxLTg2NGItY2UzNzc2MWE5
ZjZkIFByb2plY3QgQ0EwHhcNMjYwMzI1MTQxMjE2WhcNMzYwMzIyMTQxMjE2WjA6
MTgwNgYDVQQDDC9iMTQwYjhmOS03MmNjLTRmNTEtODY0Yi1jZTM3NzYxYTlmNmQg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBALeU4x81
TvS9hGaFREki1oFj8KmhGtM8JghXV8DTmbzBz9YjbQFLvRa4Xn7T3YA8FCPi/HFL
jB3MAwwtBXg+agvHFRrH/JHxEdpbtVKH491a8Mwf2TxI3ZZOXNvxYpJCuDFmydrl
ZGTWbVkXLf3Yf0DwvQ1yKvy4UOD9MDJkKqaJcoVJgYqQ4zS11SOvEiAZZpNNodBG
yf6GzVpDRyqvBa3Sfz7x3JlR6f8YryVfysl7zH9zTx+7XV5e7Ym8cZOfBw7fVt32
CNqoqknlqXBV2TS7OuOGKGgyPvqUHuOVQVE5ksMjKtYrtAY+uBjjL0GtDCmeDLYc
Z04cfvFVn05LQUv+2KuC6pE0eB1kLZipqZUH+a5dERTCb/V3K6gjiEh23KSreXXt
57ttt5u4rRb/uDL+ec96GEzw3R7xqNOnJvPsBj+S+zPae0rjPR8Ch0+QH7thyD9J
8OgP6+NCVGQF/aqfGVYc5tK+4P8OlpVCPhfrrdTI2cfJSWT692l7qT+TnQIDAQAB
o0IwQDAdBgNVHQ4EFgQUQFN7Uqn7K5zFufK5h45wfQIR6DowEgYDVR0TAQH/BAgw
BgEB/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAB+D3BgRk0WJ
93Y7BQLxjpYq9e3NOwEnVkdZfAQhILdBIARfQ+ZP4Zu3Bsu/bJMhm6F7MUpVJQ89
gEnyUoqROfJ9laNDXWU7/JRKDqhV71odGe2psr8qfmi+W5AoNWViecgN2DSAOdCC
/J/7mPQsc0yp65IrsI4zQFU5ERqhf1ueJV9Lj9i95KDWfsNVeR2eyFABtuPNLh6U
78P0Vw3HjYiRM82iuKSqDsw7lFlG6SpBo6ajL52buskBU9i0CoHfLodlUTbIGC96
ZTdWWoHvdLx5uH31JCWbJsDlISY0WgOp/KYgBYP5cSCgS01Y9jfLL7lELd3fddgm
I9xNXE+ssaXhFmcIMk4lQU4Jm3sQAh5UQbbRrNjvjHWwtB+RrDh7BJF5hfHuLZHr
mUTP7U27LYsUKVqObXycHSsVzPZ99JWznzDrrBHXGrzgBgSvfzFnYFlcU/qnOS+p
03rACQ+WpCyI5NysH/a/zUxjkeV1TMrsQvfI7UktlfGXqpR5Z+zyUA==
-----END CERTIFICATE-----`,
    },
};

const client = new pg.Client(config);
client.connect(function (err) {
    if (err)
        throw err;
    client.query("SELECT VERSION()", [], function (err, result) {
        if (err)
            throw err;

        console.log(result.rows[0].version);
        client.end(function (err) {
            if (err)
                throw err;
        });
    });
});