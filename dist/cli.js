// Generated by LiveScript 1.6.0
(function(){
  var ref$, each, keys, createNew, nextIndex, sessions, focused, open, dmenu, listCli, openCli, newCli, out$ = typeof exports != 'undefined' && exports || this;
  ref$ = require('prelude-ls'), each = ref$.each, keys = ref$.keys;
  ref$ = require('./common'), createNew = ref$.createNew, nextIndex = ref$.nextIndex, sessions = ref$.sessions, focused = ref$.focused, open = ref$.open, dmenu = ref$.dmenu;
  out$.listCli = listCli = function(options, host){
    if (host == null) {
      return console.log("Host is required for list command");
    } else {
      return sessions(host, function(list){
        return each(function(key){
          return console.log(key + " " + list[key].length);
        })(
        keys(
        list));
      });
    }
  };
  out$.openCli = openCli = function(options, client, host, session){
    return focused(function(id){
      var hostName, sessionName;
      hostName = host != null
        ? host
        : id != null ? id.host : void 8;
      sessionName = session != null
        ? session
        : id != null ? id.session : void 8;
      if (hostName == null) {
        return console.log("Host name is required for 'open' command");
      } else {
        if (client == null) {
          return console.log("Client is required for 'open' command");
        } else if (sessionName == null && !options.dmenu) {
          return console.log("Session name is required for 'open' command");
        } else {
          if (options.dmenu) {
            return sessions(hostName, function(list){
              return dmenu("Session", keys(list), function(sessionName){
                console.log(sessionName);
                return open(client, hostName, sessionName);
              });
            });
          } else {
            return open(client, hostName, sessionName);
          }
        }
      }
    });
  };
  out$.newCli = newCli = function(options, client, host, session){
    return focused(function(id){
      var hostName, sessionName;
      hostName = host != null
        ? host
        : id != null ? id.host : void 8;
      sessionName = session != null
        ? session
        : id != null ? id.session : void 8;
      if (hostName == null) {
        return console.log("Host name is required for 'new' command");
      } else {
        return sessions(hostName, function(list){
          var index;
          if (client == null) {
            return console.log("Client is required for 'new' command");
          } else if (sessionName == null) {
            return console.log("Session name is required for 'new' command");
          } else if (list[sessionName] == null) {
            return console.log("Session '" + sessionName + "' is missing on host '" + hostName + "'");
          } else {
            index = nextIndex(list, sessionName);
            return createNew(client, hostName, sessionName, index);
          }
        });
      }
    });
  };
}).call(this);
