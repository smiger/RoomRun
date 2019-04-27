var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**游戏管理 */
var GameControl = (function (_super) {
    __extends(GameControl, _super);
    function GameControl() {
        var _this = _super.call(this) || this;
        _this.startGame = new StartGameLayer();
        _this.gameScenes = new GameScenesLayer();
        _this.overScenes = new GameOverLayer();
        return _this;
    }
    Object.defineProperty(GameControl, "Instance", {
        get: function () {
            if (!GameControl._instance) {
                GameControl._instance = new GameControl();
            }
            return GameControl._instance;
        },
        enumerable: true,
        configurable: true
    });
    GameControl.prototype.setStageHandler = function (stage) {
        /**设置当前场景的背景 */
        this.currentStage = stage;
        this.bgImg = GameConst.CreateBitmapByName("bg_jpg");
        this.bgImg.width = GameConst.StageW;
        this.bgImg.height = GameConst.StageH;
        //把背景添加到当期场景
        this.currentStage.addChild(this.bgImg);
    };
    /**开始游戏的场景 */
    GameControl.prototype.startGameHandler = function () {
        if (this.gameScenes && this.gameScenes.parent) {
            GameConst.removeChild(this.gameScenes);
        }
        if (this.gameScenes && this.overScenes.parent) {
            GameConst.removeChild(this.overScenes);
        }
        this.currentStage.addChild(this.startGame);
        GameApp.xia.visible = true;
    };
    /**游戏场景 */
    GameControl.prototype.onGameScenesHandler = function () {
        if (this.startGame && this.startGame.parent) {
            GameConst.removeChild(this.startGame);
        }
        if (this.overScenes && this.overScenes.parent) {
            GameConst.removeChild(this.overScenes);
        }
        this.currentStage.addChild(this.gameScenes);
        GameApp.xia.visible = false;
    };
    /**游戏结束场景 */
    GameControl.prototype.showGameOverSceneHandler = function () {
        if (this.startGame && this.startGame.parent) {
            GameConst.removeChild(this.startGame);
        }
        if (this.gameScenes && this.gameScenes.parent) {
            GameConst.removeChild(this.gameScenes);
        }
        this.currentStage.addChild(this.overScenes);
        GameApp.xia.visible = true;
    };
    GameControl.prototype.getGameOverDisplay = function () {
        return this.overScenes;
    };
    return GameControl;
}(egret.Sprite));
__reflect(GameControl.prototype, "GameControl");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        GameConst.StageW = this.stage.stageWidth;
        GameConst.StageH = this.stage.stageHeight;
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        return [4 /*yield*/, platform.login()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 4:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [4 /*yield*/, platform.ShowshareMenu()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        this.addChild(new GameApp());
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.ShowshareMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.ShareMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.GetInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        var _this = this;
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else if (typeof generateEUI2 !== 'undefined') {
            RES.getResByUrl("resource/gameEui.json", function (data, url) {
                window["JSONParseClass"]["setData"](data);
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI2);
                }, _this);
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
var GameApp = (function (_super) {
    __extends(GameApp, _super);
    function GameApp() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
    }
    GameApp.prototype.addStage = function () {
        var title = "密室逃生";
        var content = "尼玛，活着真是不容易";
        var link = "http://static.egret-labs.org/h5game/8/release.html";
        var ico = "http://static.egret-labs.org/h5game/icons/10000008.jpg";
        var shang = GameConst.CreateBitmapByName("shang_jpg");
        shang.height = this.y;
        this.stage.addChild(shang);
        var xia = GameConst.CreateBitmapByName("xia_jpg");
        xia.y = this.y + GameConst.StageH;
        xia.height = this.y;
        this.stage.addChild(xia);
        GameApp.xia = xia;
        GameControl.Instance.setStageHandler(this);
        //游戏开始
        GameControl.Instance.startGameHandler();
    };
    GameApp.xia = new egret.DisplayObject();
    return GameApp;
}(egret.DisplayObjectContainer));
__reflect(GameApp.prototype, "GameApp");
/**常用常量类 */
var GameConst = (function () {
    function GameConst() {
    }
    /**根据名字创建位图 */
    GameConst.CreateBitmapByName = function (name) {
        var texture = RES.getRes(name);
        var bitmap = new egret.Bitmap(texture);
        return bitmap;
    };
    /**
     * 根据name关键字创建一个Bitmap对象。此name 是根据TexturePacker 组合成的一张位图
     */
    GameConst.createBitmapFromSheet = function (name, sheetName) {
        var texture = RES.getRes(sheetName + "_json." + name);
        var result = new egret.Bitmap(texture);
        return result;
    };
    GameConst.getTextureFromSheet = function (name, sheetName) {
        var result = RES.getRes(sheetName + "_json." + name);
        return result;
    };
    /**移除子类方法 */
    GameConst.removeChild = function (child) {
        if (child && child.parent) {
            if (child.parent.removeElement) {
                child.parent.removeElement((child));
            }
            else {
                child.parent.removeChild(child);
            }
        }
    };
    return GameConst;
}());
__reflect(GameConst.prototype, "GameConst");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
/**自定义按钮类 */
var MyButton = (function (_super) {
    __extends(MyButton, _super);
    function MyButton(bgName, titleName) {
        var _this = _super.call(this) || this;
        _this._bg = GameConst.createBitmapFromSheet(bgName, "ui");
        _this.addChild(_this._bg);
        _this.title = GameConst.createBitmapFromSheet(titleName, "ui");
        _this.title.x = (_this._bg.width - _this.title.width) >> 1;
        _this.title.y = (_this._bg.height - _this.title.height) >> 1;
        _this.addChild(_this.title);
        return _this;
    }
    //设置点击触发事件
    MyButton.prototype.setClick = function (func) {
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickEvent, this);
        this.onClick = func;
    };
    //点击触发的事件
    MyButton.prototype.onClickEvent = function () {
        this.onClick();
    };
    MyButton.prototype.setTitle = function (title) {
        this.title = GameConst.CreateBitmapByName(title);
    };
    Object.defineProperty(MyButton.prototype, "bg", {
        get: function () {
            return this._bg;
        },
        set: function (bg) {
            this._bg = bg;
        },
        enumerable: true,
        configurable: true
    });
    return MyButton;
}(egret.Sprite));
__reflect(MyButton.prototype, "MyButton");
/**角色动作类 */
var Role = (function (_super) {
    __extends(Role, _super);
    function Role() {
        var _this = _super.call(this) || this;
        _this.currFramesIndex = 0;
        _this.Body = new egret.Bitmap;
        //人物初始状态
        _this.Body = GameConst.createBitmapFromSheet("Role.FRAMES[0][0]", "Sprites");
        //设置锚点
        _this.Body.anchorOffsetX = _this.Body.width * 0.5;
        _this.addChild(_this.Body);
        return _this;
    }
    /**设置状态 */
    Role.prototype.setState = function (state) {
        this.state = state;
        //死亡状态
        if (this.state == Role.STATE5) {
            this.isLoop = false;
            this.Body.anchorOffsetY = this.Body.height * 0;
        }
        else {
            this.isLoop = true;
            this.Body.anchorOffsetY = this.Body.height * 1;
        }
        if (this.state == Role.STATE3 || this.state == Role.STATE4) {
            this.currFrames = [];
            if (Math.random() > 0.5) {
                this.currFrames.push(Role.FRAMES[this.state][0]);
            }
            else {
                this.currFrames.push(Role.FRAMES[this.state][1]);
            }
        }
        else {
            this.currFrames = Role.FRAMES[this.state];
        }
        this.currFramesIndex = 0;
        this.setBody();
    };
    Role.prototype.setBody = function () {
        this.Body.texture = GameConst.getTextureFromSheet(this.currFrames[this.currFramesIndex], "Sprites");
        this.Body.anchorOffsetX = this.Body.width * 0.5;
        if (this.state == Role.STATE5) {
            this.isLoop = false;
            this.Body.anchorOffsetY = this.Body.height * 0;
        }
        else {
            this.isLoop = true;
            this.Body.anchorOffsetY = this.Body.height * 1;
        }
    };
    Role.prototype.run = function () {
        this.runFlag++;
        if (this.runFlag > 4) {
            this.runFlag = 0;
        }
        if (this.runFlag != 0) {
            return;
        }
        var gotoFrameIndex = this.currFramesIndex + 1;
        if (gotoFrameIndex == this.currFrames.length) {
            if (this.isLoop) {
                gotoFrameIndex = 0;
            }
            else {
                gotoFrameIndex = this.currFramesIndex;
            }
        }
        if (gotoFrameIndex != this.currFramesIndex) {
            this.currFramesIndex = gotoFrameIndex;
            this.setBody();
        }
        return false;
    };
    Role.prototype.play = function () {
        egret.startTick(this.run, this);
        this.runFlag = 0;
    };
    Role.prototype.stop = function () {
        egret.stopTick(this.run, this);
    };
    //状态
    Role.STATE1 = 0;
    Role.STATE2 = 1;
    Role.STATE3 = 2;
    Role.STATE4 = 3;
    Role.STATE5 = 4;
    /**人物状态集合 */
    Role.FRAMES = [
        ["0020003", "0020004", "0020005", "0020006", "0020007"],
        ["0020008"],
        ["0020009", "0020010"],
        ["0020011", "0020012"],
        ["xue0001", "xue0002", "xue0003", "xue0004", "xue0005"]
    ];
    return Role;
}(egret.Sprite));
__reflect(Role.prototype, "Role");
/**墙体晃动 */
var Shake = (function () {
    function Shake() {
    }
    Shake.prototype.run = function (obj, shakeNum, overFunc) {
        if (overFunc === void 0) { overFunc = null; }
        this.obj = obj;
        this.initY = obj.y;
        this.shakeNum = shakeNum;
        this.overFunc = overFunc;
        egret.startTick(this.loop, this);
        this.num = 0;
        this.flag = 0;
    };
    Shake.prototype.loop = function () {
        if (this.flag == 0) {
            if (this.obj.y <= this.initY) {
                this.obj.y += 5;
            }
            else {
                this.obj.y -= 5;
            }
            if (this.obj.y == this.initY) {
                this.num++;
                if (this.num == this.shakeNum) {
                    egret.stopTick(this.loop, this);
                    if (this.overFunc) {
                        this.overFunc();
                    }
                }
            }
        }
        this.flag++;
        if (this.flag == 2) {
            this.flag = 0;
        }
        return false;
    };
    return Shake;
}());
__reflect(Shake.prototype, "Shake");
/**特殊字符数字类 */
var SpecialNumber = (function (_super) {
    __extends(SpecialNumber, _super);
    function SpecialNumber() {
        var _this = _super.call(this) || this;
        _this.gap = 0;
        return _this;
    }
    /**设置显示的字符串 */
    SpecialNumber.prototype.setData = function (str) {
        this.clear();
        if (str == "" || str == null) {
            return;
        }
        //把所有数字每一个都存进数组中
        var chars = str.split("");
        var w = 0;
        //所有的长度
        var length = chars.length;
        for (var i = 0; i < length; i++) {
            try {
                var image = GameConst.createBitmapFromSheet(chars[i], "ui");
                if (image) {
                    image.x = w;
                    w += image.width + this.gap;
                    this.addChild(image);
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        this.anchorOffsetX = this.width / 2;
    };
    SpecialNumber.prototype.clear = function () {
        while (this.numChildren) {
            this.removeChildAt(0);
        }
    };
    return SpecialNumber;
}(egret.DisplayObjectContainer));
__reflect(SpecialNumber.prototype, "SpecialNumber");
/**游戏结束 */
var GameOverLayer = (function (_super) {
    __extends(GameOverLayer, _super);
    function GameOverLayer() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    GameOverLayer.prototype.init = function () {
        //
        var bg_wenzi = GameConst.createBitmapFromSheet("bg_wenzi", "ui");
        bg_wenzi.x = (GameConst.StageW - bg_wenzi.width) / 2;
        this.addChild(bg_wenzi);
        //失败
        var shibai = GameConst.createBitmapFromSheet("shibai", "ui");
        shibai.x = (GameConst.StageW - shibai.width) / 2;
        shibai.y = 50;
        this.addChild(shibai);
        var fenshu = GameConst.createBitmapFromSheet("fenshu", "ui");
        this.addChild(fenshu);
        fenshu.x = 120;
        fenshu.y = 238;
        var zuigaojilu = GameConst.createBitmapFromSheet("zuigaojilu", "ui");
        zuigaojilu.x = 290;
        zuigaojilu.y = 238;
        this.addChild(zuigaojilu);
        /**再玩一局 */
        var btn_y = GameConst.createBitmapFromSheet("btn_y", "ui");
        btn_y.anchorOffsetX = btn_y.width / 2;
        btn_y.anchorOffsetY = btn_y.height / 2;
        btn_y.x = GameConst.StageW / 2;
        btn_y.y = GameConst.StageH / 2 - 20;
        this.addChild(btn_y);
        var btn_zaiwan = GameConst.createBitmapFromSheet("btn_zaiwan", "ui");
        btn_zaiwan.x = (GameConst.StageW - btn_zaiwan.width) / 2;
        btn_zaiwan.y = GameConst.StageH / 2 - 35;
        btn_zaiwan.touchEnabled = true;
        this.addChild(btn_zaiwan);
        /**炫耀一下 */
        var btn_b = GameConst.createBitmapFromSheet("btn_b", "ui");
        btn_b.anchorOffsetX = btn_b.width / 2;
        btn_b.anchorOffsetY = btn_b.height / 2;
        btn_b.x = GameConst.StageW / 2;
        btn_b.y = GameConst.StageH / 2 + 145;
        this.addChild(btn_b);
        var btn_xuanya = GameConst.createBitmapFromSheet("btn_xuanya", "ui");
        btn_xuanya.x = (GameConst.StageW - btn_zaiwan.width) / 2;
        btn_xuanya.y = GameConst.StageH / 2 + 130;
        btn_xuanya.touchEnabled = true;
        this.addChild(btn_xuanya);
        //分数
        this.scoreNum = new SpecialNumber();
        this.scoreNum.x = 138;
        this.scoreNum.y = 283;
        this.addChild(this.scoreNum);
        //最高分数
        this.maxScore = new SpecialNumber();
        this.maxScore.x = 330;
        this.maxScore.y = 283;
        this.addChild(this.maxScore);
        btn_zaiwan.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            //再来一局
            GameControl.Instance.onGameScenesHandler();
        }, this);
        btn_xuanya.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            //分享
            platform.ShareMessage();
        }, this);
    };
    /**游戏结束页面分数最高分数 */
    GameOverLayer.prototype.setGameOverDataHandler = function (score, maxScore) {
        if (score === void 0) { score = 0; }
        if (maxScore === void 0) { maxScore = 0; }
        this.scoreNum.setData(score.toString());
        this.maxScore.setData(maxScore.toString());
    };
    return GameOverLayer;
}(egret.Sprite));
__reflect(GameOverLayer.prototype, "GameOverLayer");
/**游戏场景 */
var GameScenesLayer = (function (_super) {
    __extends(GameScenesLayer, _super);
    function GameScenesLayer() {
        var _this = _super.call(this) || this;
        _this.spaceArr = [50, 70, 90, 110];
        _this.init();
        return _this;
    }
    GameScenesLayer.prototype.init = function () {
        this.shake1 = new Shake();
        this.shake2 = new Shake();
        var bg_jpg = new egret.Bitmap(RES.getRes("bg_jpg"));
        this.addChild(bg_jpg);
        this.bg = RES.getRes("bg_qiang_png");
        var bg = new egret.Bitmap(this.bg);
        //背景遮罩
        bg.mask = new egret.Rectangle(0, GameConst.StageH, GameConst.StageW, 300);
        this.addChild(bg);
        this.bgBitmaps = new Array();
        this.topContianer = new egret.Sprite();
        this.addChild(this.topContianer);
        this.topSprite = new egret.Sprite();
        this.topContianer.addChild(this.topSprite);
        this.topLine = new egret.Shape();
        this.topContianer.addChild(this.topLine);
        this.bottomContianer = new egret.Sprite();
        this.addChild(this.bottomContianer);
        this.bottomSprite = new egret.Sprite();
        this.bottomContianer.addChild(this.bottomSprite);
        this.bottomLine = new egret.Shape();
        this.bottomContianer.addChild(this.bottomLine);
        this.topRects = new Array();
        this.bottomRects = new Array();
        this.titleImg = GameConst.createBitmapFromSheet("bg_shangkuang", "ui");
        this.addChild(this.titleImg);
        this.scoreKuang = GameConst.createBitmapFromSheet("kuang", "ui");
        this.scoreKuang.x = 5;
        this.addChild(this.scoreKuang);
        this.lvkuang = GameConst.createBitmapFromSheet("kuang", "ui");
        this.lvkuang.scaleX = -1;
        this.lvkuang.x = 466;
        this.addChild(this.lvkuang);
        this.maxScore = GameConst.createBitmapFromSheet("fenshu", "ui");
        this.maxScore.x = 40;
        this.maxScore.y = 15;
        this.addChild(this.maxScore);
        this.currLV = GameConst.createBitmapFromSheet("guanqia", "ui");
        this.currLV.x = 368;
        this.currLV.y = 15;
        this.addChild(this.currLV);
        this.LvNum = new SpecialNumber();
        this.LvNum.x = 393;
        this.LvNum.y = 50;
        this.addChild(this.LvNum);
        this.recodeNum = new SpecialNumber();
        this.recodeNum.x = 73;
        this.recodeNum.y = 50;
        this.addChild(this.recodeNum);
        this.curretLevel = 1;
        this.curretMaxScore = 0;
        this.LvNum.setData(this.curretLevel.toString());
        this.recodeNum.setData(this.curretMaxScore.toString());
        this.role = new Role();
        this.addChild(this.role);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);
    };
    GameScenesLayer.prototype.addStage = function () {
        this.dieNum = 0;
        this.score = 0;
        this.curretLevel = 1;
        this.refreshScore();
        this.initData();
        // setTimeout(this.start, this, 100);
        this.start();
    };
    /**刷新成绩数据 */
    GameScenesLayer.prototype.refreshScore = function () {
        this.LvNum.setData(this.curretLevel.toString());
        this.recodeNum.setData(this.score.toString());
    };
    GameScenesLayer.prototype.start = function () {
        this.touchEnabled = true;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        //setTimeout(this.shakeRun(), this, 1000);
        var self = this;
        setTimeout(function () {
            self.shakeRun();
        }, 1500);
        // this.shakeRun()
    };
    GameScenesLayer.prototype.shakeRun = function () {
        //墙体晃动效果
        this.shake1.run(this.topContianer, 5, this.land.bind(this));
    };
    GameScenesLayer.prototype.land = function () {
        var self = this;
        //一波墙体运动之后移除点击事件
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        //上面的模块往下运动
        egret.Tween.get(this.topContianer).to({ "y": 0 }, 100).call(function () {
            self.landOver();
        });
    };
    GameScenesLayer.prototype.landOver = function () {
        //根据离墙体的高度判断现在的状态
        this.checkState();
        // this.shake1.run(this.topContianer, 3);
        //
        this.shake2.run(this.bottomContianer, 3, this.checkResult.bind(this));
    };
    //
    GameScenesLayer.prototype.checkState = function () {
        var space = this.getSpace();
        if (space == 0) {
            this.role.setState(Role.STATE5);
        }
        else if (space == this.spaceArr[2]) {
            this.role.setState(Role.STATE4);
        }
        else if (space == this.spaceArr[0]) {
            this.role.setState(Role.STATE3);
        }
        else if (space == this.spaceArr[1]) {
            this.role.setState(Role.STATE2);
        }
        if (space == 0) {
            this.setRolePos(this.rolePosIndex, -10, 4);
        }
    };
    /**检验这关结束主角是否存活 */
    GameScenesLayer.prototype.checkResult = function () {
        var space = this.getSpace();
        var self = this;
        if (space == 0) {
            this.dieNum++;
            if (this.dieNum == 1) {
                this.role.stop();
                setTimeout(function () {
                    //游戏结束
                    GameControl.Instance.getGameOverDisplay().setGameOverDataHandler(self.score, self.curretMaxScore);
                    GameControl.Instance.showGameOverSceneHandler();
                }, 500);
                return;
            }
        }
        else {
            this.curretLevel++;
            this.score += 10;
            if (this.score > this.curretMaxScore) {
                this.curretMaxScore = this.score;
            }
            //刷新成绩
            this.refreshScore();
        }
        setTimeout(function () {
            self.refreshPoint();
        }, 1000);
    };
    GameScenesLayer.prototype.getSpace = function () {
        var top = this.topRects[this.rolePosIndex];
        var bottom = this.bottomRects[this.rolePosIndex];
        return GameConst.StageH - top.height - bottom.height;
    };
    /**刷新游戏关卡 */
    GameScenesLayer.prototype.refreshPoint = function () {
        this.initData();
        this.start();
    };
    /**点击事件 */
    GameScenesLayer.prototype.onClick = function (e) {
        var len = this.bottomRects.length;
        for (var i = 0; i < len; i++) {
            var rec = this.bottomRects[i];
            if (e.stageX > rec.x && e.stageX < rec.x + rec.width) {
                this.setRolePos(i);
                break;
            }
        }
    };
    GameScenesLayer.prototype.initData = function () {
        this.role.setState(Role.STATE1);
        this.role.play();
        this.topRects.splice(0, this.topRects.length);
        this.bottomRects.splice(0, this.bottomRects.length);
        var min = 150;
        var flag = false;
        var len = 8;
        var w = GameConst.StageW / len;
        for (var i = 0; i < len; i++) {
            var h = min + Math.floor(Math.random() * 8) * 10;
            this.bottomRects.push(new egret.Rectangle(i * w, GameConst.StageH - h, w, h));
            h = GameConst.StageH - h;
            if (Math.random() < 0.2 || (!flag && i == len - 1)) {
                var index = Math.floor(Math.random() * this.spaceArr.length);
                h -= this.spaceArr[index];
                flag = true;
            }
            this.topRects.push(new egret.Rectangle(i * w, 0, w, h));
        }
        //图   区域(填充)
        this.fullFront(this.topSprite, this.topRects);
        this.fullFront(this.bottomSprite, this.bottomRects, true);
        this.drawLine();
        this.topContianer.y = -200;
        this.setRolePos(3, 17, 0, true);
    };
    GameScenesLayer.prototype.setRolePos = function (index, offY, offX, isInit) {
        if (offY === void 0) { offY = 17; }
        if (offX === void 0) { offX = 0; }
        if (isInit === void 0) { isInit = false; }
        if (!isInit) {
            if (this.rolePosIndex > index) {
                index = this.rolePosIndex - 1;
            }
            else if (this.rolePosIndex < index) {
                index = this.rolePosIndex + 1;
            }
        }
        this.rolePosIndex = index;
        var rec = this.bottomRects[index];
        //一次只移动一格
        this.role.x = rec.x + rec.width / 2 + offX;
        this.role.y = rec.y + offY;
    };
    GameScenesLayer.prototype.drawLine = function () {
        var lineH = 10;
        this.topLine.graphics.clear();
        this.topLine.graphics.lineStyle(lineH, 0x33E7FE);
        this.bottomLine.graphics.clear();
        this.bottomLine.graphics.lineStyle(lineH, 0x33E7FE);
        this.drawTopLine(lineH / 2);
        this.drawBottomLine(lineH / 2);
        this.topLine.graphics.endFill();
        this.bottomLine.graphics.endFill();
    };
    GameScenesLayer.prototype.drawTopLine = function (lineH) {
        var len = this.topRects.length;
        for (var i = 0; i < len; i++) {
            var rec = this.topRects[i];
            if (i == 0) {
                this.topLine.graphics.moveTo(rec.x, rec.height);
                this.topLine.graphics.lineTo(rec.x + rec.width, rec.height);
            }
            else {
                this.topLine.graphics.lineTo(rec.x, rec.height);
                this.topLine.graphics.lineTo(rec.x + rec.width, rec.height);
            }
        }
    };
    GameScenesLayer.prototype.drawBottomLine = function (lineH) {
        var len = this.bottomRects.length;
        for (var i = 0; i < len; i++) {
            var rec = this.bottomRects[i];
            if (i == 0) {
                this.bottomLine.graphics.moveTo(rec.x, rec.y + lineH);
                this.bottomLine.graphics.lineTo(rec.x + rec.width, rec.y + lineH);
            }
            else {
                this.bottomLine.graphics.lineTo(rec.x, rec.y + lineH);
                this.bottomLine.graphics.lineTo(rec.x + rec.width, rec.y + lineH);
            }
        }
    };
    GameScenesLayer.prototype.fullFront = function (bgSptite, rects, isBottom) {
        if (isBottom === void 0) { isBottom = false; }
        bgSptite.cacheAsBitmap = false;
        this.clearBg(bgSptite);
        var len = rects.length;
        for (var i = 0; i < len; i++) {
            var rec = rects[i];
            var bitmap;
            if (this.bgBitmaps.length) {
                bitmap = this.bgBitmaps.pop();
            }
            else {
                bitmap = new egret.Bitmap();
                bitmap.texture = this.bg;
            }
            bitmap.scrollRect = rec;
            bitmap.x = rec.x;
            bitmap.y = rec.y;
            bgSptite.addChild(bitmap);
        }
    };
    GameScenesLayer.prototype.clearBg = function (bgSptite) {
        while (bgSptite.numChildren) {
            var bitmap = bgSptite.getChildAt(0);
            if (bitmap) {
                bgSptite.removeChild(bitmap);
                this.bgBitmaps.push(bitmap);
            }
        }
    };
    return GameScenesLayer;
}(egret.Sprite));
__reflect(GameScenesLayer.prototype, "GameScenesLayer");
/**游戏开始场景 */
var StartGameLayer = (function (_super) {
    __extends(StartGameLayer, _super);
    function StartGameLayer() {
        var _this = _super.call(this) || this;
        _this.isdisplay = false;
        _this.init();
        return _this;
    }
    StartGameLayer.prototype.init = function () {
        /**添加游戏LOGO */
        this.titleImage = GameConst.createBitmapFromSheet("logo_mishitaosheng", "ui");
        this.titleImage.x = 51;
        this.titleImage.y = 161;
        this.addChild(this.titleImage);
        //开始按钮设置
        this.startBtn = new MyButton("btn_y", "btn_kaishi");
        this.addChild(this.startBtn);
        this.startBtn.x = (GameConst.StageW - this.startBtn.width) / 2;
        this.startBtn.y = GameConst.StageH / 2 - 75;
        this.startBtn.setClick(this.onStartGameClick);
        //更多按钮设置
        this.moreBtn = new MyButton("btn_b", "btn_gengduo");
        this.moreBtn.x = (GameConst.StageW - this.startBtn.width) / 2;
        this.moreBtn.y = GameConst.StageH / 2 + 75;
        this.addChild(this.moreBtn);
        this.moreBtn.setClick(this.onMoreBtnClick);
        //文本
        var tex = new egret.TextField();
        tex.width = GameConst.StageW;
        tex.textAlign = egret.HorizontalAlign.CENTER;
        tex.strokeColor = 0x403e3e;
        tex.stroke = 1;
        tex.bold = true;
        tex.y = GameConst.StageH / 2 + 250;
        tex.text = "Egret";
        this.addChild(tex);
        this.btnClose = new eui.Button();
        this.btnClose.label = "btnClose!";
        this.btnClose.y = 35;
        this.btnClose.horizontalCenter = 0;
        this.addChild(this.btnClose);
        this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        //加载资源
        var platform = window.platform;
        platform.openDataContext.postMessage({
            command: 'loadRes'
        });
    };
    /**
     * 点击按钮
     * Click the button
     */
    StartGameLayer.prototype.onButtonClick = function (e) {
        // let openDataContext = wx.getOpenDataContext();
        console.log('点击btnClose按钮');
        var platform = window.platform;
        if (this.isdisplay) {
            this.bitmap.parent && this.bitmap.parent.removeChild(this.bitmap);
            this.rankingListMask.parent && this.rankingListMask.parent.removeChild(this.rankingListMask);
            this.isdisplay = false;
            platform.openDataContext.postMessage({
                isDisplay: this.isdisplay,
                text: 'hello',
                year: (new Date()).getFullYear(),
                command: "close"
            });
        }
        else {
            //处理遮罩，避免开放数据域事件影响主域。
            this.rankingListMask = new egret.Shape();
            this.rankingListMask.graphics.beginFill(0x000000, 1);
            this.rankingListMask.graphics.drawRect(0, 0, this.stage.width, this.stage.height);
            this.rankingListMask.graphics.endFill();
            this.rankingListMask.alpha = 0.5;
            this.rankingListMask.touchEnabled = true;
            this.addChild(this.rankingListMask);
            //简单实现，打开这关闭使用一个按钮。
            this.addChild(this.btnClose);
            //主要示例代码开始
            this.bitmap = platform.openDataContext.createDisplayObject(null, this.stage.stageWidth, this.stage.stageHeight);
            this.addChild(this.bitmap);
            //主域向子域发送自定义消息
            platform.openDataContext.postMessage({
                isDisplay: this.isdisplay,
                text: 'hello',
                year: (new Date()).getFullYear(),
                command: "open"
            });
            //主要示例代码结束            
            this.isdisplay = true;
        }
    };
    StartGameLayer.prototype.onStartGameClick = function () {
        GameControl.Instance.onGameScenesHandler();
    };
    StartGameLayer.prototype.onMoreBtnClick = function () {
        console.log("更多游戏");
        platform.GetInfo();
    };
    return StartGameLayer;
}(egret.Sprite));
__reflect(StartGameLayer.prototype, "StartGameLayer");
;window.Main = Main;