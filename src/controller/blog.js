const getList = (author, keyword) => {
  return [
    {
      id:1,
      title:'标题A',
      content:'内容A',
      author:'张三',
      createTime:new Date()
    },
    {
      id:2,
      title:'标题B',
      content:'内容B',
      author:'李四',
      createTime:new Date()+123123
    }
  ]
};

const getDetail = (id) =>{
  return {
    id:1,
    title:'标题A',
    content:'内容A',
    author:'张三',
    createTime:new Date()
  }
}

module.exports = {
  getList,
  getDetail
}
