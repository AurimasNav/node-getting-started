
const forever = delay => {
    setTimeout(
        () => {
        console.log('forever ' + delay);
        forever(delay);
    },
        delay * 1
    );
};

forever(0);