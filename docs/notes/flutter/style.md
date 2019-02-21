# 布局样式
---
## Flutter 圆形/圆角头像
> 来源 https://www.jianshu.com/p/b4085a1a5129

---
### 圆形头像
1. ClipOval
```dart
new ClipOval(
    child: new Image.asset(Utils.getImgPath('ali_connors')),
  )
```
2. CircleAvatar
```dart
new CircleAvatar(
    radius: 36.0,
    backgroundImage: AssetImage(
      Utils.getImgPath('ali_connors'),
    ),
  )
```
3. BoxDecoration BoxShape.circle
```dart
new Container(
    width: 72.0,
    height: 72.0,
    decoration: BoxDecoration(
      shape: BoxShape.circle,
      image: DecorationImage(
        image: AssetImage(
          Utils.getImgPath('ali_connors'),
        ),
      ),
    ),
  )
```
### 圆角头像
1. ClipRRect
```dart
new ClipRRect(
    borderRadius: BorderRadius.circular(6.0),
    child: new Image.asset(Utils.getImgPath('ali_connors')),
  )
```
2. BoxDecoration BoxShape.rectangle
```dart
new Container(
    width: 88.0,
    height: 88.0,
    decoration: BoxDecoration(
      shape: BoxShape.rectangle,
      borderRadius: BorderRadius.circular(6.0),
      image: DecorationImage(
        image: AssetImage(
          Utils.getImgPath('ali_connors'),
        ),
      ),
    )
```