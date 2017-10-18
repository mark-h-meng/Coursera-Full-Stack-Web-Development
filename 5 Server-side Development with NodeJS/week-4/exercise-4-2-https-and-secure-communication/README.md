This exercise is based on the last exercise of current week.
What's new:

(1) Updated /mongoose-population/bin/www with https configuration.

(2) Updated /mongoose-population/app.js with secure routing.

(3) Generated private key and certificate.
 
  openssl genrsa 1024 > private.key
  openssl req -new -key private.key -out cert.csr
  openssl x509 -req -in cert.csr -signkey private.key -out certificate.pem

 The key & certificate provided in folder /mongoose-population/bin contains information listed below:

  Country Name (2 letter code) [AU]:SG
  State or Province Name (full name) [Some-State]:Singapore
  Locality Name (eg, city) []:Singapore
  Organization Name (eg, company) [Internet Widgits Pty Ltd]:NUS
  Organizational Unit Name (eg, section) []:SOC
  Common Name (e.g. server FQDN or YOUR name) []:NUSSOC
  Email Address []:admin@admin.co

  Please enter the following 'extra' attributes
  to be sent with your certificate request
  A challenge password []:1245
  An optional company name []:nil
