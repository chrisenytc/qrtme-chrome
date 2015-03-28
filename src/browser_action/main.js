/*
 * qrtme
 * https://github.com/chrisenytc/qrtme
 *
 * Copyright (c) 2015, Christopher EnyTC
 */

'use strict';

chrome.tabs.query({
    active: true,
    currentWindow: true
}, function(tab) {
    var tabUrl;
    if (tab instanceof Array && tab[0].hasOwnProperty('url')) {
        tabUrl = tab[0].url;
    } else {
        tabUrl = '';
    }
    if (tab && /^https?:\/\//.test(tabUrl)) {
        //Generate QrCode
        var qrcode = new QRCode(document.getElementById('qrcode-box'), {
            width: 280,
            height: 280
        });
        //Make code
        qrcode.makeCode(tabUrl);
    } else {
        window.close();
    }
});
