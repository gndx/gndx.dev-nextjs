import fetch from 'node-fetch';
import fs from 'fs';

const youtubeApiUrl = 'https://www.googleapis.com/youtube/v3/search';
const channelId = 'UCw05fUBPwmpu-ehXFMqfdMw';
const youtubeKeyId = 'AIzaSyDIKiForJSN7to1rtV2W9ErOcYJ6ltdM8M';
const maxResults = '10';

const getLastYoutubeVideo = async () => {
    const API = `${youtubeApiUrl}?part=snippet&channelId=${channelId}&maxResults=${maxResults}&order=date&type=video&key=${youtubeKeyId}`;
    const response = await fetch(API);
    const data = await response.json();
    const parseData = JSON.stringify(data);
    fs.writeFileSync('./data/youtube.json', parseData);
}

getLastYoutubeVideo();