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