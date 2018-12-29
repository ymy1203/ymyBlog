# Dart基础
## 常量
###  const 与 final 与 static 
* static
>类似java中的staitc，表示一个成员属于类而不是对象;

表示成员在类本身上可用，而不是在类的实例上。 这就是它的意思，并没有用于其他地方。 static修饰成员。

* final
>类似java中的final，必须初始化，初始化后值不可变，编译时不能确定值。

示单一赋值：final变量或字段必须初始化。 一旦赋值，就不能改变final变量的值。 final修饰变量。

* const
>编译时可确定，并且不能被修改

const修饰值。 您可以在创建集合时使用它，例如const [1,2,3] ，以及构造对象（代替new），比如const Point（2,3）。这里，const意味着对象的整个深度状态可以在编译时完全确定，并且对象将被冻结并完全不可变。 

## 变量
* var
* String
* bool
* int
* double
* List