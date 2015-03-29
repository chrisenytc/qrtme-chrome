/*
 * qrtme
 * https://github.com/chrisenytc/qrtme-chrome
 *
 * Copyright (c) 2015, Christopher EnyTC
 */

'use strict';

chrome.runtime.onInstalled.addListener(function(details) {
    //Redirect
    chrome.tabs.create({
        url: chrome.extension.getURL('options/installed.html')
    });
});
