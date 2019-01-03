---
sidebarDepth: 2
---
# 前端面试(头条2018-10)
## 浏览器缓存
### 三种禁止浏览器缓存的头字段
```js
// 禁止浏览器从本地机的缓存中调阅页面内容
<meta http-equiv="pragma" content="no-cache"> 
// 清除缓存（再访问这个网站要重新下载！）
<meta http-equiv="Cache-Control" content="no-cache, must-revalidate"> 
// 设定网页的到期时间
<meta http-equiv="expires" content="0">
```
## DOM
### 精准获取页面元素位置(绝对位置)
* 方法1 offsetTop和offsetLeft
```js
　　function getElementLeft(element){
　　　　var actualLeft = element.offsetLeft;
　　　　var current = element.offsetParent;

　　　　while (current !== null){
　　　　　　actualLeft += current.offsetLeft;
　　　　　　current = current.offsetParent;
　　　　}

　　　　return actualLeft;
　　}

　　function getElementTop(element){
　　　　var actualTop = element.offsetTop;
　　　　var current = element.offsetParent;

　　　　while (current !== null){
　　　　　　actualTop += current.offsetTop;
　　　　　　current = current.offsetParent;
　　　　}

　　　　return actualTop;
　　}

```
简写形式
```js
//取得元素x坐标  
function pageX(elem) {  
  return elem.offsetParent?(elem.offsetLeft+pageX(elem.offsetParent)):elem.offsetLeft;  
}  
//取得元素y坐标  
function pageY(elem) {  
  return elem.offsetParent?(elem.offsetTop+pageY(elem.offsetParent)):elem.offsetTop;  
}
```
* 方法2 getBoundingClientRect
>它返回一个对象，其中包含了left、right、top、bottom四个属性，分别对应了该元素的左上角和右下角相对于浏览器窗口（viewport）左上角的距离。
::: danger 警告
chrome不支持
:::
```js
.getBoundingClientRect()
```
### 获取页面元素位置(相对位置)
> 网页元素的相对位置，指该元素左上角相对于浏览器窗口左上角的坐标。

```js
      function getElementViewLeft(element){
　　　　var actualLeft = element.offsetLeft;
　　　　var current = element.offsetParent;

　　　　while (current !== null){
　　　　　　actualLeft += current.offsetLeft;
　　　　　　current = current.offsetParent;
　　　　}

　　　　if (document.compatMode == "BackCompat"){
　　　　　　var elementScrollLeft=document.body.scrollLeft;
　　　　} else {
　　　　　　var elementScrollLeft=document.documentElement.scrollLeft; 
　　　　}

　　　　return actualLeft-elementScrollLeft;
　　}

　　function getElementViewTop(element){
　　　　var actualTop = element.offsetTop;
　　　　var current = element.offsetParent;

　　　　while (current !== null){
　　　　　　actualTop += current. offsetTop;
　　　　　　current = current.offsetParent;
　　　　}

　　　　 if (document.compatMode == "BackCompat"){
　　　　　　var elementScrollTop=document.body.scrollTop;
　　　　} else {
　　　　　　var elementScrollTop=document.documentElement.scrollTop; 
　　　　}

　　　　return actualTop-elementScrollTop;
　　}
```
## 正则表达式
1. 从2018-10-07T11:48:47 Asia/zh-cn 提取出 ["2018","10","07","11","48","47"]
```js
var a = "2018-10-07T11:48:47 Asia/zh-cn"
a.replace(/[^0-9]/g,",").split(",").filter(item =>{return item })
a.replace(/\D/g,",").split(",").filter(item =>{return item })
```
## 数据类型
### 如何判断一个object是数组类型
```js
Array.isArray(object)
``` 
## 数组按照其元素的某个属性去重
1. 已知数据结构user请实现语法支持 user.unique() 能够按name字段去重,并输出数据结构为：["a","b"]
```js
const user = [
  {id:1,name:"a"},
  {id:2,name:"a"},
  {id:3,name:"b"},
  {id:4,name:"b"},
]
Array.prototype.unique = function () {
  // TODO...
}
//输出 ["a","b"]
```
### 实现
```js
TODO...
```
## 虚拟dom生成真实dom
::: tip
本题是实现虚拟dom三步的第二步，点击[查看]()看其他内容。
:::
1. 将下列虚拟dom生成真实dom
```js
let virtualDOM = {
    type:'ul',
    props:{
        'class':'list'
    },
    children:[
    	"ullll",
        {
            type:'li',
            props:{
            	'class':'red weight'
            },
            children:[
                'item 1'
            ]
        },
        {
            type:'li',
            props:{},
            children:[
                {
                	type:'p',
                	children:[
                		"你好"
                	]
                }
            ]
        }
    ]
}
```
### 方法1:
```js
function createElement(node){
    if(typeof node ==='string'){
        return document.createTextNode(node);
    }
    const $el = document.createElement(node.type);
    node.children.map(createElement).forEach($el.appendChild.bind($el));
    return $el;
}
```
> * 这个方法来至 [https://www.jianshu.com/p/5a3ec1cea203](https://www.jianshu.com/p/5a3ec1cea203)；<br>
> * 这个方法用了一些奇淫技巧：.map .forEach 会用自己的每一个参数调用一下对应的函数  
> * .bind() 将$el.appendChild 变成一个可执行的函数。
> * 此方法的递归是**从里向外**实现的，即先return最里面的文本节点，然后在return外面的li、ul...
* 最后一行可以改写成,便于理解。
```js
node.children.map(createElement).forEach((item)=>{$el.appendChild(item)});
```
::: warning
 但是，这个方法没有实现 将class写到dom树里去  
:::

### 方法2:
我实现的方法，**从外向里**，即每一层的实现dom树。
> 水平有限，代码冗余
```js
function createElement(node){
    if(typeof node ==='string'){
        return document.createTextNode(node);
    }
    const $el = document.createElement(node.type);
    if(node.props){
		for(p in node.props){
			$el.setAttribute(p,node.props[p])
		}
	}
    function add(node,dom){
	    node.children.forEach(item =>{
	    	if(typeof item === "string"){
	    		const tn = document.createTextNode(item);
	    		dom.appendChild(tn)
	    	}else{
	    		const $dom = document.createElement(item.type);
	    		if(item.props){
	    			for(p in item.props){
	    				$dom.setAttribute(p,item.props[p])
	    			}
	    		}
	    		dom.appendChild($dom)
	    		add(item,$dom)
	    	}
	    })
    }
    add(node,$el)
    return $el
}
```