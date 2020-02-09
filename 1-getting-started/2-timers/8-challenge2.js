// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

let counter=0;
const printCount = () => {
    console.log('Hello world');
    counter++;

    if (counter === 5) {
        console.log('done');

        clearInterval(intervalas);
    }
};

const intervalas = setInterval(
    printCount,
    1000
);
