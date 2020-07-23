// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/main.js":[function(require,module,exports) {
var demo = document.querySelector('#demo');
var style = document.querySelector('#style');
var string = "\n/* \u5148\u753B\u76AE\u5361\u4E18\u7684\u9F3B\u5B50\n*/\n.snip{\n    width: 0;\n    height: 0;\n    border: black 10px solid;\n    border-color:black transparent transparent transparent;\n  border-radius: 10px;\n}\n/* \u8BA9\u9F3B\u5B50\u52A8\u8D77\u6765\n*/\n.nose {\n    position: absolute;\n    left: 50%;\n    top: 20px;\n    margin-left: -10px;\n    animation:noseMove 3s infinite;\n  }\n  \n  @-webkit-keyframes noseMove{\n    0%,49%,51%,100%{\n      margin-left: -10px;\n    }\n    50%{\n      margin-left: -21px;\n    }\n  }\n  /* \u63A5\u4E0B\u6765\u753B\u51FA\u76AE\u5361\u4E18\u7684\n     \u773C\u775B\n  */\n  .eye{\n      position: absolute;\n      width: 46px;\n      height: 46px;\n      border-radius: 50%;\n      background: #303031;\n      border: 2px solid black;\n      top: 0;\n      left: 50%;\n      margin-left: -23px;\n  }\n.eye::before {\n    content: \"\";\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    border: 2px solid black;\n    position: absolute;\n    background: white;\n    top: 0;\n    left: 4px;\n    animation: eyeMove 3s infinite;\n}\n.eye.left {\n    transform: translateX(-90px);\n  }\n  \n.eye.right {\n  transform: translateX(90px);\n}\n/*\u8BA9\u773C\u775B\u52A8\u8D77\u6765\n*/\n@-webkit-keyframes eyeMove{\n    0%,100%{\n      top:2px;\n      left:2px;\n    }\n    30%,60%,70%{\n      top: 0;\n      left: 15px;\n    }\n    40%{\n      top: 0;\n      left: 15px;\n    }\n    50%{\n      top: 0;\n      left: 10px;\n    }\n    80%,90%{\n      top: 17px;\n      left: 15px;\n   }\n}\n/* \u5F00\u59CB\u76AE\u5361\u4E18\n  \u5DE6\u53F3\u7684\u8138\u988A\n*/\n.face {\n    position: absolute;\n    width: 64px;\n    height: 64px;\n    border-radius: 50%;\n    background: #ff5140;\n    border: 2px solid black;\n    top: 85px;\n    left: 50%;\n    margin-left: -32px;\n    animation: cheekMove 3s infinite;\n }\n .face.left {\n    transform: translateX(-130px);\n  }\n  \n  .face.right {\n    transform: translateX(130px);\n }\n /* \u8BA9\u8138\u988A\u52A8\u8D77\u6765\n \n */\n @-webkit-keyframes cheekMove{\n    0%,46%,54%,100%{\n      width: 64px;\n      height: 64px;\n      top: 85px;\n    }\n    50%{\n      width: 50px;\n      height: 50px;\n      top: 105px;\n    }\n  }\n/*\u63A5\u4E0B\u6765\u5C31\u662F\u76AE\u5361\u4E18\u7684\u5634\u5DF4\u62C9\n*/\n .mouth {\n    height: 150px;\n    width: 150px;\n    position: absolute;\n    left: 50%;\n    top: 45px;\n    margin-left: -75px;\n    cursor: pointer;\n  }\n  .mouth_main {\n    position: absolute;\n    left:50%;\n    top: 15px ;\n    width: 130px;\n    height: 140px;\n    background: rgb(204, 65, 67);\n    border: 3px solid black;\n    border-bottom-left-radius: 280px 590px;\n    border-bottom-right-radius: 280px 590px;\n    overflow: hidden;\n    margin-left: -65px;\n    animation: mouthMove 3s infinite;\n  }\n  /* \u8BA9\u5634\u5DF4\u52A8\u8D77\u6765\n  */\n  @-webkit-keyframes mouthMove {\n    0%,46%,54%,100%{\n      height: 140px;\n    }\n    50%{\n      height: 10px;\n    }\n  }\n/* \n \u5634\u5DF4\u4F3C\u4E4E\u6709\u70B9\u5927\u4E86,\u6211\u6765\u7ED9\u4ED6\n \u753B\u4E0A\u5634\u5507\u5427\n*/\n.mouth:after, .mouth:before {\n    content: '';\n    width: 75px;\n    height: 38px;\n    background: #ffcb00;\n    border-bottom: 4px solid black;\n    position: absolute;\n    z-index: 3;\n  }\n  .mouth:after {\n    border-left: 3px solid black;\n    border-bottom-left-radius: 340px 180px;\n    left: -3px;\n    transform: rotate(-30deg);\n  }\n  \n  .mouth:before {\n    border-right: 3px solid black;\n    border-bottom-right-radius: 340px 180px;\n    right: -3px;\n    transform: rotate(30deg);\n  }\n  /*\n   \u8FD9\u65F6\u5F00\u59CB\u753B\u51FA\u76AE\u5361\u4E18\u7684\u820C\u5934\n  */\n  .tongue {\n    width: 140px;\n    height: 140px;\n    background: rgb(221,102,106);\n    margin-top: 20px;\n    margin-left: -10px;\n    border-top-left-radius: 380px;\n    border-top-right-radius: 420px 380px;\n    overflow: hidden;\n  }\n /* \u5F00\u59CB\u753B\u51FA\u5B83\u7684\u624B\uFF08\u8FD9\u91CC\u6211\u4F7F\u7528\u7684\u662F\u56FE\u7247\uFF09\n */\n  .hand {\n    position: absolute;\n    left: 50%;\n    top: 320px;\n    margin-left: -52px;\n    animation: handMove 1s infinite;\n  }\n  .hand img{\n      display: block;\n  }\n  \n  .hand.left {\n    transform: translateX(-75px);\n  }\n  \n  .hand.right {\n    transform: translateX(73px) rotateY(180deg);\n  }\n  /* \u8BA9\u624B\u52A8\u8D77\u6765\n  */\n  @-webkit-keyframes handMove {\n    0%,46%,54%,100%{\n      top: 320px;\n    }\n    50%{\n      top: 325px;\n    }\n  }\n  /*\n  \u63A5\u4E0B\u6765\u5C31\u662F\u7CBE\u7075\u7403\u4E86\uFF0C\n  \u9996\u5148\u753B\u51FA\u5B83\u7684\u8F6E\u5ED3\n  \u5E76\u7ED9\u51FA\u767D\u8272\u7684\u9634\u5F71\u53D1\u4EAE\u7684\u6548\u679C  \n  */\n  .box {\n    width: 82px;\n    height: 82px;\n    border: 3px solid #fff;\n    border-radius:  50%;\n    position: relative;\n    box-shadow: 0 0 5px rgba(255,255,255,0.9);\n    left: 50%;\n    top: 320px;\n    margin-left: -44px;\n    animation: box-rotate 4s ease-in-out infinite alternate;\n  }\n    /* \n     \u5148\u7ED9\u7CBE\u7075\u7403\u80CC\u666F\u6DFB\u52A0\u4E00\u4E2A\u52A8\u753B\uFF0C\n     \u4EE5\u4FBF\u540E\u9762\u8BA9\u4ED6\u52A8\u8D77\u6765\n    */\n  @keyframes box-rotate{\n    0%,90%,100% {\n      -webkit-transform: rotate(0deg);\n    }\n    40%,50% {\n      -webkit-transform:  rotate(360deg);\n      box-shadow: 0 0 10px 5px rgba(255,255,255,0.9);\n    }\n  }\n  /*  \u5F00\u59CB\u753B\u51FA\u7CBE\u7075\u7403\u4E0A\u534A\u7EA2\u8272\n   */\n  .box_main{\n    width:80px;\n    height:80px;\n    border-radius:50%;\n    background: red;\n    border:1px solid #333;\n    position: absolute;\n    top:0;\n    left:0;\n    overflow:hidden;\n  }\n   /*  \n   \u4E0B\u9762\u7684\u767D\u8272\n   */\n  .box_main:before{\n    content:'';\n    display:block;\n    width:80px;\n    height:40px;\n    background:#fff;\n    position:absolute;\n    bottom:0;\n    left:0;\n  }\n  /* \u4E2D\u89C1\u7684\u5206\u9694\n  */\n  .box_main:after{\n    content:'';\n    width:80px;\n    height:12px;\n    background:rgb(59,53,67);\n    position:absolute;\n    top:50%;\n    left:0;\n    margin-top:-6px;\n  }\n  /* \u4E2D\u5FC3\u5706\u6309\u94AE\u5B9E\u73B0\n  */\n  .box_circle{\n    width:30px;\n    height:30px;\n    border:5px solid rgb(59,53,67);\n    border-radius:50%;\n    background:#fff;\n    position: absolute;\n    left:50%;\n    top:50%;\n    margin-left:-15px;\n    margin-top:-15px;\n    z-index:5;\n  }\n  \n  .box_circle:after{\n    content:'';\n    width:16px;\n    height:16px;\n    border:1px solid rgb(59,53,67);\n    border-radius:50%;\n    position:absolute;\n    top:50%;\n    left:50%;\n    margin-left:-8px;\n    margin-top:-8px;\n    animation:bg_change 4s infinite;\n  }\n  /*\n   \u8F6C\u52A8\u8D77\u6765\u6309\u94AE\u5E76\u4E14\u53D8\u7EA2\n  */\n  @keyframes bg_change{\n    0%,40%,60%,90%,100%{\n      background:none;\n    }\n    50%{\n      background: red;\n    }\n  }\n  \u8FD9\u6837\u4E00\u53EA\u53EF\u7231\u7684\u76AE\u5361\u4E18\u5C31\u5B8C\u6210\u62C9!!!\n               ";
var string2 = '';
var length = string2.length;
var n = 0;

var step = function step() {
  setTimeout(function () {
    n = n + 1;

    if (string[n] === "\n") {
      string2 = string2 + "<br>";
    } else if (string[n] === " ") {
      string2 = string2 + "&nbsp";
    } else {
      string2 = string2 + string[n];
    }

    if (n + 1 < string.length) {
      step();
    } else {}

    if (demo.clientHeight > document.body.clientHeight - 50) {
      string2 = string2.substr(string2.length - 1, length);
      console.log(string2);
    }

    demo.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
  }, 1);
};

step();
},{}],"../../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57070" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js","assets/main.js"], null)
//# sourceMappingURL=/main.db1b0b10.js.map