#  插件
## 瀑布流
> flutter_staggered_grid_view  

**代码：**
```dart
new StaggeredGridView.countBuilder(
  crossAxisCount: 4,
  itemCount: 8,
  itemBuilder: (BuildContext context, int index) => new Container(
      color: Colors.green,
      child: new Center(
        child: new CircleAvatar(
          backgroundColor: Colors.white,
          child: new Text('$index'),
        ),
      )),
  staggeredTileBuilder: (int index) =>
      new StaggeredTile.count(2, index.isEven ? 2 : 1),
  mainAxisSpacing: 4.0, // 间距
  crossAxisSpacing: 4.0, // 间距
)
```
crossAxisCount: 4, // 将屏幕横向分成4分
itemCount: 8 // 子元素个数
itemBuilder  //子元素
staggeredTileBuilder // 子元素样式
*  StaggeredTile.count 固定数量  StaggeredTile.count(2,2) // 宽占两份，高于宽相同
*  StaggeredTile.extent 固定范围
*  StaggeredTile.fit 高是可变范围