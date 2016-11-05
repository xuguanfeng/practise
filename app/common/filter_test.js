'use strict';

describe('filter test', function () {
    var date;
    beforeEach(module('commonFilter'));

    // describe('Filter：areaNm', function () {

    beforeEach(module(function ($provide) {
        // $provide.value('version', 'TEST_VER');
        //日付を固定
        date = new Date("January 12,2006 02:09:59");

    }));

    it('0:国内，その他：グローバル', inject(function (areaNmFilter) {
        expect(areaNmFilter(0)).toEqual('国内');
        expect(areaNmFilter(1)).toEqual('グローバル');
        expect(areaNmFilter("0")).toEqual('国内');
        expect(areaNmFilter("1")).toEqual('グローバル');
    }));

    it('0：追加型投信，その他：日々決算型投信', inject(function (tpNmFilter) {
        expect(tpNmFilter(0)).toEqual('追加型投信');
        expect(tpNmFilter(1)).toEqual('日々決算型投信');
        expect(tpNmFilter("0")).toEqual('追加型投信');
        expect(tpNmFilter("1")).toEqual('日々決算型投信');
    }));

    it('0：株式，その他：債券', inject(function (toushiNmFilter) {
        expect(toushiNmFilter(0)).toEqual('株式');
        expect(toushiNmFilter(1)).toEqual('債券');
        expect(toushiNmFilter("0")).toEqual('株式');
        expect(toushiNmFilter("1")).toEqual('債券');
    }));

    it('dateFormat変換テスト', inject(function (dateFormatFilter) {
        expect(dateFormatFilter(date, "yyyyMMdd")).toEqual('20060112');
        expect(dateFormatFilter(date, "yyyy/MM/dd")).toEqual('2006/01/12');
        expect(dateFormatFilter(date, "yyyy/M/dd")).toEqual('2006/1/12');
        expect(dateFormatFilter(date, "yyyy/MM-dd")).toEqual('2006/01-12');
        expect(dateFormatFilter(date, "yyyy-MM-dd")).toEqual('2006-01-12');
        expect(dateFormatFilter(date, "yyyy/MM/dd hh:mm:ss")).toEqual('2006/01/12 02:09:59');
        expect(dateFormatFilter(date, "yyyy/MM/dd h:mm:ss")).toEqual('2006/01/12 2:09:59');
        expect(dateFormatFilter(date, "yyyy/MM/dd hh:m:ss")).toEqual('2006/01/12 02:9:59');
        expect(dateFormatFilter(date, "yyyy年MM月dd日 hh時mm分ss秒")).toEqual('2006年01月12日 02時09分59秒');
    }));

    // });
});