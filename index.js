import  axios  from 'axios';
import  fs  from 'fs';

axios ({
    method: 'get',
    url: 'https://bit.ly/2mTM3nY',
    responseType: 'stream'
})
.then(function (response) {
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
});
