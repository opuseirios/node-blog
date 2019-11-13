const {getList,getDetail,newBlog,updateBlog,delBlog} = require('../controller/blog')
const {ErrorModel,SuccessModel} = require('../model/resModel')

const handleBlogRouter = (req, res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split('?')[0];
  const id = req.query.id || 0;
  //获取博客列表
  if (method === 'GET' && path === '/api/blog/list') {
    const author = req.query.author || '';
    const keyword = req.query.keyword || '';
    return getList(author,keyword).then(result=>{
      return new SuccessModel(result);
    })
  }

  //获取博客详情
  if (method === 'GET' && path === '/api/blog/detail') {
    return getDetail(id).then(data=>{
      return new SuccessModel(data);
    })
  }

  //新建一篇博客
  if (method === 'POST' && path === '/api/blog/create') {
    req.body.author = 'zhangsan';
    return newBlog(req.body).then(data=>{
      return new SuccessModel(data);
    })
  }

  //更新一篇博客
  if (method === 'POST' && path === '/api/blog/update') {
    return updateBlog(id,req.body).then(result=>{
      return result?new SuccessModel():new ErrorModel('更新博客失败')
    })
  }

  //删除一篇博客
  if (method === 'POST' && path === '/api/blog/del') {
    req.body.author = 'zhangsan';
    delBlog(id,req.body.author).then(val=>{
      return val ? new SuccessModel():new ErrorModel('删除文章失败')
    });
  }
}

module.exports = handleBlogRouter;
