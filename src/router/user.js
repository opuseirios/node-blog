const {login} = require('../controller/user')
const {ErrorModel,SuccessModel} = require('../model/resModel')

const handleUserRouter = (req,res)=>{
  const method = req.method;
  const url = req.url;
  const path = url.split('?')[0];

  if(method === 'POST' && path === 'api/user/login'){
    const {username,password} = req.body;
    const result = login(username,password);
    return SuccessModel(result);
  }
}

module.exports = handleUserRouter;
