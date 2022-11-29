const my_blog = [
    
    {
        name:"博客的搭建",
        url:"/2022/06/12/blog-build/"
    },
    {
        name:"Vue笔记",
        url:"/2022/07/20/Vue笔记/"      //https://ant-world.github.io
    },
    {
        name:"Vue问题",
        url:"/2022/07/20/Vue问题/"
    },
    {
        name:"JS包管理工具",
        url:"/2022/08/19/JS包管理器/"
    }
]

var my_div = "<div class='my_everyblog_a'>"
for(i of my_blog){
    var my_a = `<a target="_self" href="${i.url}">${i.name}</a>`
    var my_br = "</br>"
    my_div = my_div + my_a + my_br
}
my_div += "</div>"
document.write(my_div)