https://itnext.io/interacting-with-service-workers-using-puppeteer-583e5fc4a40b


# web-server 



# installing openssl
- choco install openssl
## options and configuration:
    - Options and config => C:\Program Files\OpenSSL-Win64\bin\openssl.cfg
    Path => - C:\Program Files\OpenSSL-Win64\bin

openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem