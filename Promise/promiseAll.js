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

Promise.all([callForWeather('Izhevsk'), callForWeather('Lisbon')])
    .then(([izh, lis]) => {
        console.log(`lis: ${lis}, izh: ${izh}, sum: ${lis + izh}`);
    })
    .catch(err => console.log(err));