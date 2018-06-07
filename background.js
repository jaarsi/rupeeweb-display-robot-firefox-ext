function inject_script(tab) {
    if (tab.url.match(/^(https:\/\/www.rupee.com.br\/dashboard_grecia)/gi))
        browser.tabs.executeScript(tab.id, {file: 'display-robot-dashboard-greece.js'})
    else if (tab.url.match(/^(https:\/\/www.rupee.com.br\/dashboard_italia)/gi))
        browser.tabs.executeScript(tab.id, {file: 'display-robot-dashboard-italy.js'})
    else if (tab.url.match(/^(https:\/\/www.rupee.com.br\/empresas\/\d+)/gi))
        browser.tabs.executeScript(tab.id, {file: 'display-robot-company-panel.js'});
}

browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status != 'complete')
        return;
    inject_script(tab);
});