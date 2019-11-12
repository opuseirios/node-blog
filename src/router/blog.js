const {getList,getDetail} = require('../controller/blog')
const {ErrorModel,SuccessModel} = require('../model/resModel')

const handleBlogRouter = (req, res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split('?')[0];

  //获取博客列表
  if (method === 'GET' && path === '/api/blog/list') {
    const author = req.query.author || '';
    const keyword = req.query.keyword || '';
    const listData = getList(author,keyword);
    return new SuccessModel(listData);
  }

  //获取博客详情
  if (method === 'GET' && path === '/api/blog/detail') {
    const id = req.query.id || 0;
    const data = getDetail(id);
    return new SuccessModel(data);
  }

  //新建一篇博客
  if (method === 'POST' && path === '/api/blog/create') {
    return {
      msg: '这是新建一篇博客的接口'
    }
  }

  //删除一篇博客
  if (method === 'POST' && path === '/api/blog/del') {
    return {
      msg: '这是删除一篇博客的接口'
    }
  }
}

module.exports = handleBlogRouter;
