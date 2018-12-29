# flutter 类
::: tip
  flutter项目中一些常用的类
:::

## MediaQueryData 类 (屏幕宽高)
```dart
  /* 获取系统状态栏高度 */
  static double getSysStatsHeight(BuildContext context) {
    return MediaQuery.of(context).padding.top;
  }
  /* 获取屏幕宽度 */
  static double getScreenWidth(BuildContext context) {
    return MediaQuery.of(context).size.width;
  }
  /* 获取屏幕高度 */
  static double getScreenHeight(BuildContext context) {
    return MediaQuery.of(context).size.height;
  }
  /* 获取屏幕是横屏还是竖屏 */
  static Orientation getScreenHeight(BuildContext context) {
    return MediaQuery.of(context).orientation;
  }
```