Try to run:

npm install express --save
node server-1

Open browser and enter http://localhost:3000/.

You will found exact same page returned no matter what URL you entered under domain of localhost:3000.

Try to run:

npm install morgan --save
node server-2

Open browser and enter http://localhost:3000/ and http://localhost:3000/aboutus.html.

You will found "Cannot GET" error returned for any other URL you entered.

Try to run:

npm install body-parser --save
node server-3

Open browser and enter http://localhost:3000/ and http://localhost:3000/aboutus.html.

You will found "Cannot GET" error returned for any other URL you entered.

