chrome.runtime.onInstalled.addListener(()=>{
    chrome.storage.sync.get(["geminiApiKey"],(result)=>{
    if(!result.geminiApiKey){
        chrome.tab.create({ urls:"options.html"});
    }
});
});