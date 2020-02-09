let count = 0;
const increment = delay => {
    const inter = setInterval(
        () => {
            if (count !== 0 && count % 5 === 0) {
                delay += 100;
                clearInterval(inter);
                increment(delay);
            }
            console.log('Hello world. ' + delay);
            count++;
        },
        delay
    );
}
increment(100)