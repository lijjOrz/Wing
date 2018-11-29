var path = require('path');


exports.index = function (req, res) { //渲染一个页面返回
    res.sendFile(path.join(__dirname, '../web/index.html'));
};