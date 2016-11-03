'use strict';

angular.module('commonFilter', [])

    .filter('areaNm', function () {
        return function (input) {
            return input == 0 ? "国内" : "グローバル";
        }
    })
    .filter('tpNm', function () {
        return function (input) {
            return input == 0 ? "追加型投信" : "日々決算型投信";
        }
    })
    .filter('toushiNm', function () {
        return function (input) {
            return input == 0 ? "株式" : "債券";
        }
    })
    .filter('dateFormat', function () {// Date对象转换为任意指定Format
        return function (input,fmt) {//input is new Date()
            Date.prototype.Format = function (fmt) { //author: meizz
                var o = {
                    "M+": input.getMonth() + 1, //月份
                    "d+": input.getDate(), //日
                    "h+": input.getHours(), //小时
                    "m+": input.getMinutes(), //分
                    "s+": input.getSeconds(), //秒
                    "q+": Math.floor((input.getMonth() + 3) / 3), //季度
                    "S": this.getMilliseconds() //毫秒
                };
                if (/(y+)/.test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (input.getFullYear() + "").substr(4 - RegExp.$1.length));
                }
                for (var k in o) {
                    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ?
                        (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                }
                return fmt;
            }
            return input.Format(fmt);
        }
    });

