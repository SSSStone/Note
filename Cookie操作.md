# Cookie

- [CookieUtil](#cookieutil)
- [SubCookieUtil](#subcookieutil)

## CookieUtil

```javascript
var CookieUtil = {
    getCookie: function(name) {
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;
        
        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }
        return cookieValue;
    },
    
    setCookie: function(name, value, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        if (expires instanceof Date) {
            cookieText += "; expire=" + expires.toGMTString();
        }
        if (path) {
            cookieText += "; path=" + path;
        }
        if (domain) {
            cookieText += "; domain=" + domain;
        }
        if (secure) {
            cookieText += "; secure";
        }
        document.cookie = cookieText;
    },
    
    unsetCookie: function(name, path, domain, secure) {
        this.setCookie(name, "", new Date(0), path, domain, secure);
    }
}
```

## SubCookieUtil

```javascript
var SubCookieUtil = {
    getSubCookie: function(name, subName) {
        var subCookies = this.getAllSubCookies(name);
        if (subCookies) {
            return subCookies[subName];
        } else {
            return null;
        }
    },
    getAllSubCookies: function(name) {
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;
            cookieEnd = null,
            subCookies = null,
            i = null,
            parts = null,
            result = {};
            
        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
            
            if (cookieValue.length > 0) {
                subCookies = cookieValue.split("&");
                for (i=0, len = subCookies.length; i<len; i++) {
                    parts = subCookies[i].split("=");
                    result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
                }
                return result;
            }
        }
        return null;
    },
    
    setSubCookie: function(name, subName, value, expires, path, domain, secure) {
        var subCookies = this.getAllSubCookies(name) || {};
        subCookies[subName] = value;
        this.setAllSubCookies(name, subCookies, expires, path, domain, secure);
    },
    setAllSubCookies: function(name, subCookies, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + "=",
            subCookieParts = [],
            subName = null;
        for (subName in subCookies) {
            if (subName.length > 0 && subCookies.hasOwnProperty(subName)) {
                subCookieParts.push(encodeURIComponent(subName) + "=" + encodeURIComponent(subCookies[subName]));
            }
        }
        
        if (subCookieParts.length > 0) {
            cookieText += subCookieParts.join("&");
            if (expires instanceof Date) {
                cookieText += "; expire=" + expires.toGMTString();
            }
            if (path) {
                cookieText += "; path=" + path;
            }
            if (domain) {
                cookieText += "; domain=" + domain;
            }
            if (secure) {
                cookieText += "; secure";
            }
        } else {
            cookieText += "; expires=" + (new Date(0)).toGMTString();
        }
        document.cookie = cookieText;
    },
    unsetSubCookies: function(name, subname, path, domain, secure) {
        var subCookies = this.getAllSubCookies(name);
        if (subCookies) {
            delete subCookies[subname];
            this.setAllSubCookies(subCookies);
        }
    },
    unsetAllSubCookies: function(name, path, domain, secure) {
        this.setAllSubCookies(name, null, new Date(0), path, domain, secure);
    }
}
```