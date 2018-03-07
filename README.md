## problems
```
bin packing.
In this case is coffee bag packing.  (type of coffee bags size are fixed, check the comments in the Calculator.js )
The box that is supposed to fix these bags have 3 edeges, and they all have the same length (between 30 to 100 cm), defined by user.
```

## Compare to my Initial solution:
```
This time I sort the bags in descending order by volume, as soon as the first bag can not fit in the remaining space, the program gets the remaining space and see if any other bags can fit in this remaining space, if yes, then fit,  if no, do a recursion run the program again.
```
```
file that houses the improved algorithm is at src/util/Calculator.js

Initial solution is at Initial folder;
```
```
I use

[
{"volume":"734","quantity":10},
{"volume":"1144","quantity":20}
]
instead of
[
{"bagSize":"200g","quantity":10},
{"bagSize":"400g","quantity":20},
]

is to make it easier for me to make the input form to take input from users.
```

## demo

[Show me the Demo](http://yi-coffee.surge.sh/)

## run test!
```
npm run test
```

## Install project dependencies

```
$ npm install
```

## Run the app

```
$ npm start
```
