const querystring = require('querystring');
const blogRouter = require('./src/router/blog');
const userRouter = require('./src/router/user');

const serverHandle = (req,res)=>{
  //设置返回格式JSON
  res.setHeader('Content-type','application/json');

  //获取path
  const url = req.url;
  req.path = url.split('?')[0];
  //解析query
  req.query = querystring.parse(url.split('?')[1]);

  const blogData = blogRouter(req,res);
  if(blogData){
    return res.end(
      JSON.stringify(blogData)
    )
  }

  const userData = userRouter(req,res);
  if(userData){
    return res.end(
      JSON.stringify(userData)
    )
  }

  //返回404
  res.writeHead(404,{'Content-type':'text/plain'})
  res.write('404 not found \n')
  res.end();
}

module.exports = serverHandle;
