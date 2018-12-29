# widget
>1. Widgets 是用于构建UI的类.
>2. Widgets 用于布局和UI元素.
>3. 通过简单的widget来构建复杂的widget
---
### child、children属性
widget都有一个child属性（例如 `Center` 或`Container`；  
或者一个 children属性，
如： `Row`，`Column`，`ListView`或`Stack` 

---
## Row Column
* MainAxisAlignment（主轴） 和 CrossAxisAlignment（垂直主轴）
  .spaceEvenly 
  > 会在每个图像之间，之前和之后均匀分配空闲的水平空间。  
  > eg ： justify-content ：space-around  

  .center  
  >居中

* mainAxisSize: MainAxisSize.min,    
  > 元素聚集在一起    eg ： justify-content ：center；

## Container