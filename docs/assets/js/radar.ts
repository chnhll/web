// var mW = 400;
// var mH = 400;
// var mData = [
//     ['速度', 77],
//     ['力量', 72],
//     ['防守', 46],
//     ['射门', 50],
//     ['传球', 80],
//     ['耐力', 60]
// ];

export default class Radar {

    private mData: any[];
    private mW: number;
    private mH: number;
    private mCount: number; //边数
    private mCenter: number; //中心点
    private mRadius: number; //半径(减去的值用于给绘制的文本留空间)
    private mAngle: number; //角度
    private mCanvas: HTMLCanvasElement;
    private mCtx: CanvasRenderingContext2D | null = null;
    private mColorPolygon = '#B8B8B8'; //多边形颜色
    private mColorLines = '#B8B8B8'; //顶点连线颜色
    private mColorText = '#000000';

    constructor(mData, mW=400, mH=400) {
        this.mData = mData;
        this.mW = mW;
        this.mH = mH;
        this.mCount = mData.length;
        this.mCenter = mW / 2;
        this.mRadius = this.mCenter - 50;
        this.mAngle = Math.PI * 2 / this.mCount;

        this.mCanvas = document.createElement('canvas');
        let dom = document.querySelector(".main");
        dom?.appendChild(this.mCanvas);
        this.mCanvas.height = mH;
        this.mCanvas.width = mW;
        this.mCtx = this.mCanvas.getContext('2d');

        this.drawPolygon(this.mCtx);
        this.drawLines(this.mCtx);
        this.drawText(this.mCtx);
        this.drawRegion(this.mCtx);
        // drawCircle(mCtx);
        return this;
    }

    remove() {
        this.mCanvas.remove();
    }

    private drawPolygon(ctx) {
        ctx.save();
        ctx.strokeStyle = this.mColorPolygon;
        var r = this.mRadius / this.mCount; //单位半径
        //画6个圈
        for (var i = 0; i < this.mCount; i++) {
            ctx.beginPath();
            var currR = r * (i + 1); //当前半径
            //画6条边
            for (var j = 0; j < this.mCount; j++) {
                var x = this.mCenter + currR * Math.cos(this.mAngle * j);
                var y = this.mCenter + currR * Math.sin(this.mAngle * j);
                ctx.lineTo(x, y);
            }
            ctx.closePath()
            ctx.stroke();
        }
        ctx.restore();

    }

    //顶点连线
    private drawLines(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = this.mColorLines;
        for (var i = 0; i < this.mCount; i++) {
            var x = this.mCenter + this.mRadius * Math.cos(this.mAngle * i);
            var y = this.mCenter + this.mRadius * Math.sin(this.mAngle * i);
            ctx.moveTo(this.mCenter, this.mCenter);
            ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.restore();

    }

    //绘制文本
    private drawText(ctx) {
        ctx.save();
        var fontSize = this.mCenter / 12;
        ctx.font = fontSize + 'px Microsoft Yahei';
        ctx.fillStyle = this.mColorText;
        for (var i = 0; i < this.mCount; i++) {
            var x = this.mCenter + this.mRadius * Math.cos(this.mAngle * i);
            var y = this.mCenter + this.mRadius * Math.sin(this.mAngle * i);
            if (this.mAngle * i >= 0 && this.mAngle * i <= Math.PI / 2) {
                ctx.fillText(this.mData[i][0], x, y + fontSize);
            } else if (this.mAngle * i > Math.PI / 2 && this.mAngle * i <= Math.PI) {
                ctx.fillText(this.mData[i][0], x - ctx.measureText(this.mData[i][0]).width, y + fontSize);
            } else if (this.mAngle * i > Math.PI && this.mAngle * i <= Math.PI * 3 / 2) {
                ctx.fillText(this.mData[i][0], x - ctx.measureText(this.mData[i][0]).width, y);
            } else {
                ctx.fillText(this.mData[i][0], x, y);
            }
        }
        ctx.restore();

    }

    //绘制数据区域
    private drawRegion(ctx) {
        ctx.save();
        ctx.beginPath();
        for (var i = 0; i < this.mCount; i++) {
            var x = this.mCenter + this.mRadius * Math.cos(this.mAngle * i) * this.mData[i][1] / 100;
            var y = this.mCenter + this.mRadius * Math.sin(this.mAngle * i) * this.mData[i][1] / 100;
            ctx.lineTo(x, y);
        }

        ctx.closePath();
        ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
        ctx.fill();
        ctx.restore();

    }

    //画点
    private drawCircle(ctx) {
        ctx.save();
        var r = this.mCenter / 18;
        for (var i = 0; i < this.mCount; i++) {
            var x = this.mCenter + this.mRadius * Math.cos(this.mAngle * i) * this.mData[i][1] / 100;
            var y = this.mCenter + this.mRadius * Math.sin(this.mAngle * i) * this.mData[i][1] / 100;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 0, 0, 0.8)';
            ctx.fill();
        }
        ctx.restore();
    }

}
