var express = require('express');
var router = express.Router();

/* ユーザー一覧を取得 */
router.get('/', function (req, res, next) {
  res.send('リソースを表示します');
});

module.exports = router;
