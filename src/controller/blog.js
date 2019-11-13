const {exec} = require('../db/mysql')

const getList = (author, keyword) => {
   let sql = `select * from blogs where 1=1 `
    if(author){
      sql += `and author='${author}' `
    }
    if(keyword){
      sql += `and title like '%${keyword}%' `
    }
    sql+='order by createtime desc'
    return exec(sql);
};

const getDetail = (id) =>{
   const sql = `select * from blogs where id = '${id}'`
  return exec(sql).then(rows=>{
    return rows[0]
  })
}

const newBlog = ((blogData={})=>{
   const sql = `
    insert into blogs (title,content,createtime,author)
    values ('${blogData.title}','${blogData.content}',${Date.now()},'${blogData.author}')
   `
  return exec(sql).then(insertData=>{
    return {
      id:insertData.insertId
    }
  })
})

const updateBlog = (id,blogData={})=>{
  const sql = `
    update blogs set title='${blogData.title}',content='${blogData.content}'
    where id=${id}
  `
  return exec(sql).then(updateData=>{
    return updateData.rowsAffected>0
  })
}

const delBlog = (id,author)=>{
  const sql = `delete from blogs where id=${id} and author='${author}'`
  return exec(sql).then(delData=>{
    return delData.rowsAffected>0
  })
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}
