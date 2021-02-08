var client = new XMLHttpRequest();
client.open("GET", "api.zippopotam.us/US/00210", true);
client.onreadystatechange = function() {
    if (client.readyState == 4) {
        alert(client.responseText);
    };
};

client.send();


var client = newXMLHttpRequest();
client.open('GET', 'http://www.7timer.info/bin/api.pl?lon=151.179&lat=-33.312&product=civil&output=xml')
client.onreadystatechange = function() {
    if (client.readyState == 4) {
        alert(client.responseText);
    };
};

client.send();