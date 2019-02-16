function tandem(str) {

    if(str != ''){
        var regex = /([GCAT]{3,10}?)(\1+)/g;
        var json = '[{';
        while ((match = regex.exec(str)) != null) {

            var tandem_pattern = match[1];
            var reg = new RegExp(tandem_pattern,"g");
            var count = (match[0].match(reg) || []).length;
            json = json + '"'+ match.index +'-'+match[1]+'": ' +count + ',';
        }

        var edited = json.replace(/,$/g,'');
        json = edited + '}]';
        return json;
    }
    else{
        return false;
    }

}

function tandemHilight(str) {
    var regex = /([GCAT]{3,10}?)(\1+)/g;
    return str.replace(regex, '<mark>$1$2</mark>');
}