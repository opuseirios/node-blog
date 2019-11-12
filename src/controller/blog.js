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

const newBlog = ((blogData={})=>{
  return {
    id:3
  }
})

const updateBlog = (id,blogData={})=>{
  return true;
}

const delBlog = (id)=>{
  return true;
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}
