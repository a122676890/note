'use strict';
const request = require('request-promise-native');
const zulip = require('zulip-js');
const exec = require('child_process').exec;
const config = {
    zuliprc: '.zuliprc',
};
async function sendZulip(params) {
    const client = zulip(config);
    const result = client.message.send(params)
}
function watchUrl() {
    const listionURL = [
        'https://leanticket.cn/login',
        'https://leancloud.cn/',
        'https://leancloud.cn/dashboard/login.html#/signin'
    ];
    listionURL.map(async (v) => {
        const urlstr = decodeURIComponent(v);
        try {
            await request.head(urlstr);
            exec(`echo "${v} is right" >> /Users/changlong/gs/url.txt`);
        } catch (e) {
           sendZulip({
            to: 'frontend',
            subject: 'bots',
            type: 'stream',
            content:'!!!'+v +' is not network'     
          })
        }
    })
}
watchUrl()

