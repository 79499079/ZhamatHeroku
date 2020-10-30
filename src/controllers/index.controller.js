const indexCtrl = {};

indexCtrl.indexPrincipal = (req, res) => {
  res.render('index');  
};

module.exports = indexCtrl;