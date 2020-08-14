const myPromise = new Promise((resolve, reject) => {
    console.log('get data from API');
    /*fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(
            // For success
            data => { console.log(data); },
            // For failure
            error => { console.log(error); }
        )
        .catch(error => { console.log(error); })*/
    resolve('data');
    reject(new Error('Promise was rejected!'));
});

myPromise
    .then(
        // For success
        data => { console.log(data); },
        // For failure
        // error => { console.log(error, 'err handle in then method'); }
    )
    .catch(error => { console.log(error, 'err handle in catch method'); });