var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
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
