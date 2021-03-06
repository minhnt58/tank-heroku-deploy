"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by TooNies1810 on 5/24/16.
 */
var TankMap = function () {
    // var brickMgr = new BrickManager();

    function TankMap(width, height, size) {
        _classCallCheck(this, TankMap);

        this.width = width;
        this.height = height;
        this.size = size;

        // var tempBrick = new Brick(100, 200, 20);
        // var tempBrick2 = new Brick(200, 200, 20);
        // var tempBrick3= new Brick(300, 200, 20);

        this.brickMgr = new BrickManager();

        this.initData();
    }

    _createClass(TankMap, [{
        key: "initData",
        value: function initData() {
            var itemWidth = this.width / this.size;
            var itemHeight = this.height / this.size;
            for (var i = 0; i < itemWidth; i++) {
                for (var j = 0; j < itemHeight; j++) {
                    if (i == 0 || j == 0 || i == itemWidth - 1 || j == itemHeight - 1) {
                        var tempBrick = new Brick(i * this.size, j * this.size, this.size);
                        this.brickMgr.addBrick(tempBrick);
                    }
                }
            }

            var tempBrick1 = new Brick(200, 150, this.size);
            var tempBrick2 = new Brick(230, 400, this.size);
            var tempBrick3 = new Brick(180, 120, this.size);
            var tempBrick4 = new Brick(280, 520, this.size);
            var tempBrick5 = new Brick(620, 320, this.size);
            var tempBrick6 = new Brick(780, 420, this.size);

            this.brickMgr.addBrick(tempBrick1);
            this.brickMgr.addBrick(tempBrick2);
            this.brickMgr.addBrick(tempBrick3);
            this.brickMgr.addBrick(tempBrick4);
            this.brickMgr.addBrick(tempBrick5);
            this.brickMgr.addBrick(tempBrick6);
        }
    }, {
        key: "draw",
        value: function draw(context) {
            this.brickMgr.drawAll(context);
        }
    }, {
        key: "isMoveTable",
        value: function isMoveTable(objX, objY, size) {
            // console.log("X: " + objX);
            // console.log("Y: " + objY);
            // console.log("Size: " + size);
            // console.log(this.brickMgr.isMoveTable(objX,objY,size));
            return this.brickMgr.isMoveTable(objX, objY, size);
        }
    }]);

    return TankMap;
}();