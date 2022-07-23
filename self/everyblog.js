const my_blog = [
    {
        name:"Vue笔记",
        url:"https://ant-world.github.io/library/2022/07/20/Vue笔记/"
    },
    {
        name:"博客的搭建",
        url:"https://ant-world.github.io/library/2022/06/12/blog-build/"
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