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
function callForWeather(city) {
    if (Math.random() > 0.1) {
        return Promise.resolve(Math.ceil(Math.random() * 100));
    } else {
        return Promise.reject('error');
    }
}

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
