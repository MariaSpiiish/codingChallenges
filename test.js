// const url = 'https://jsonplaceholder.typicode.com/posts/2';

// function fetchTodo() {
//     return fetch(url)
//         .then((res) => {
//             if(res.ok) {
//                 return(res.json());
//             } else {
//                 return Promise.reject(res.status);
//             }
//         })
// }


// fetchTodo()
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// 1
/* callForWeather : (
    city : any,
    callback : (error, data) => void
) => void
*/
/* callForWeather : (
    city : any,
) => Promise < number >
*/
// 3
// function callForWeather(city, callback) {
//     if (Math.random() > 0.1) {
//         callback(null, Math.ceil(Math.random() * 100));
//     } else {
//         callback('error');
//     }
// }

// // 2
// callForWeather('Izhevsk', (error, izh) => {
//     if (error) {
//         console.log('error');
//     } else {
//         callForWeather('Lissabon', (error, lis) => {
//             if (error) {
//                 console.log('error');
//             } else {
//                 console.log(
//                     { izh, lis, sum: izh + lis }
//                 );
//             }
//         })
//     }
// })

function callForWeather(city) {
    if (Math.random() > 0.1) {
        return Promise.resolve(Math.ceil(Math.random() * 100));
    } else {
        return Promise.reject('error');
    }
}

// Promise.all([callForWeather('Izhevsk'), callForWeather('Lisbon')])
//     .then(([izh, lis]) => {
//         console.log(izh + lis);
//     })
//     .catch(err => console.log(err));

const cities = ['Izhevsk', 'Lisbon'];
const i = Math.round(Math.random());

if(i) {
    callForWeather(cities[1])
    .then((res1) => {
        callForWeather(cities[0])
            .then((res2) => {
                console.log(`lis: ${res1}, izh: ${res2}, sum: ${res1 + res2}`);
            })
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
} else {
    callForWeather(cities[0])
    .then((res1) => {
        callForWeather(cities[1])
            .then((res2) => {
                console.log(`lis: ${res2}, izh: ${res1}, sum: ${res1 + res2}`);
            })
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}

