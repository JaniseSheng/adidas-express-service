const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const filrUrl = (fileName, res)=> {
  const filrUrl = './public/' + fileName + '.text';
  fs.readFile(filrUrl, 'utf-8', function(err, data) {
    const number = parseInt(data) + 1
    fs.writeFile(filrUrl, number, 'utf-8', function(err) {
      res.json({
        success: true,
        value: number
      })
    })
  })
}

/**
* menu点击率
**/
router.get('/sxxApi/menu1', function(req, res, next) {
  filrUrl('menu1', res)
});
router.get('/sxxApi/menu2', function(req, res, next) {
  filrUrl('menu2', res)
});
router.get('/sxxApi/menu3', function(req, res, next) {
  filrUrl('menu3', res)
});
router.get('/sxxApi/menu4', function(req, res, next) {
  filrUrl('menu4', res)
});
router.get('/sxxApi/menu0', function(req, res, next) {
  filrUrl('menu0', res)
});

/**
* detail点击率
**/
router.get('/sxxApi/detail1', function(req, res, next) {
  filrUrl('detail1', res)
});
router.get('/sxxApi/detail2', function(req, res, next) {
  filrUrl('detail2', res)
});
router.get('/sxxApi/detail3', function(req, res, next) {
  filrUrl('detail3', res)
});
router.get('/sxxApi/detail4', function(req, res, next) {
  filrUrl('detail4', res)
});
router.get('/sxxApi/detail0', function(req, res, next) {
  filrUrl('detail0', res)
});

/**
* 查看总数据
**/
router.get('/sxxApi/getAllData', function(req, res, next) {
  const menu0 = './public/menu0.text';
  const menu1 = './public/menu1.text';
  const menu2 = './public/menu2.text';
  const menu3 = './public/menu3.text';
  const menu4 = './public/menu4.text';
  const detail0 = './public/detail0.text';
  const detail1 = './public/detail1.text';
  const detail2 = './public/detail2.text';
  const detail3 = './public/detail3.text';
  const detail4 = './public/detail4.text';
  var menuData = 0;
  var detailData = 0;
  fs.readFile(menu0, 'utf-8', function(err, data0) {
    menuData+=parseInt(data0)
    fs.readFile(menu1, 'utf-8', function(err, data1) {
      menuData+=parseInt(data1)
      fs.readFile(menu2, 'utf-8', function(err, data2) {
        menuData+=parseInt(data2)
        fs.readFile(menu3, 'utf-8', function(err, data3) {
          menuData+=parseInt(data3)
          fs.readFile(menu4, 'utf-8', function(err, data4) {
            menuData+=parseInt(data4)
            fs.readFile(detail0, 'utf-8', function(err, item0) {
              detailData+=parseInt(item0)
              fs.readFile(detail1, 'utf-8', function(err, item1) {
                detailData+=parseInt(item1)
                fs.readFile(detail2, 'utf-8', function(err, item2) {
                  detailData+=parseInt(item2)
                  fs.readFile(detail3, 'utf-8', function(err, item3) {
                    detailData+=parseInt(item3)
                    fs.readFile(detail4, 'utf-8', function(err, item4) {
                      detailData+=parseInt(item4)
                      res.json({
                        success: true,
                        data: {
                          menuData,
                          detailData,
dataListsMenu: [
                            {
                              value: data0,
                              label: '此处有雷'
                            },
                            {
                              value: data1,
                              label: '城市滑行'
                            },
                            {
                              value: data2,
                              label: '创意公园'
                            },
                            {
                              value: data3,
                              label: '地下尬舞'
                            },
                            {
                              value: data4,
                              label: 'ULTIMATE大现身'
                            }
                          ],
                          dataListsShare: [
                            {
                              value: item0,
                              label: '此处有雷'
                            },
                            {
                              value: item1,
                              label: '城市滑行'
                            },
                            {
                              value: item2,
                              label: '创意公园'
                            },
                            {
                              value: item3,
                              label: '地下尬舞'
                            },
                            {
                              value: item4,
                              label: 'ULTIMATE大现身'
                            }
                          ]
                        }
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
});

/**
** 数据清零
*/
router.get('/sxxApi/dataReset', function(req, res, next) {
  const menu0 = './public/menu0.text';
  const menu1 = './public/menu1.text';
  const menu2 = './public/menu2.text';
  const menu3 = './public/menu3.text';
  const menu4 = './public/menu4.text';
  const detail0 = './public/detail0.text';
  const detail1 = './public/detail1.text';
  const detail2 = './public/detail2.text';
  const detail3 = './public/detail3.text';
  const detail4 = './public/detail4.text';
  fs.writeFile(menu0, 0, 'utf-8', function(err) {
    fs.writeFile(menu1, 0, 'utf-8', function(err) {
      fs.writeFile(menu2, 0, 'utf-8', function(err) {
        fs.writeFile(menu3, 0, 'utf-8', function(err) {
          fs.writeFile(menu4, 0, 'utf-8', function(err) {
            fs.writeFile(detail0, 0, 'utf-8', function(err) {
              fs.writeFile(detail1, 0, 'utf-8', function(err) {
                fs.writeFile(detail2, 0, 'utf-8', function(err) {
                  fs.writeFile(detail3, 0, 'utf-8', function(err) {
                    fs.writeFile(detail4, 0, 'utf-8', function(err) {
                      res.json({
                        success: true
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
});

module.exports = router;
