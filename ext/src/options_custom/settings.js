window.addEvent("domready", function () {

    function isValidURL(string) {
        var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null)
    };
      
    new FancySettings.initWithManifest(function (settings) {
        settings.manifest.url.element.value = Storage.get_option("url","https://mastodon.madrid");
        settings.manifest.myButton.addEvent("action", function () {            
            var url = settings.manifest.url.element.value;
            if( !isValidURL(url)){
                alert(url+" is not a valid URL")
                return
            }
            if( url.indexOf("twitter") != -1){
                alert(url+" can't contain twitter")
                return
            }
            if( url.startsWith("http://") == false || url.startsWith("https://") == false )
                url = "http://"+url;
            Storage.set_option("url", url);            
        });
    });
});
