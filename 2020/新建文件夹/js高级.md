# 面向对象

学习目标

能够说出：

什么的面向对象

类和对象的关系

能够利用Class创建子定义类

能够说出什么是继承

知识点

## 1面向对象编程介绍

1.1两大编程思想

面向过程编程：就是分析出解决问题所需要的步骤然后用函数把这些步骤一步步实现，使用的时候在一步步一次调用就可以了

举个栗子：把大象装进冰箱的过程做法

思路：打开冰箱门，把大象装进去，关上冰箱门

区别：面向过程，就是按照我们分析好了的步骤，按照步骤解决问题

优点：性能比面向对象高适合与和硬件联系很紧密的东西，如单片机

缺点：没有面向对象易于维护，复用，扩展

面向对象编程：面向对象节就是把事物分解成一个个对象，然后由对象之间分工合作

举个栗子：把大象装进冰箱的对象做法

思路：先找出对象，并写出这些对象的功能

对象：大象，冰箱

功能：进去。打开冰箱，关闭冰箱

区别：面向对象是以对象的功能来划分问题的，而不是步骤

优点：在面向对象的程序开发中，每一个对象都是功能中心，具有明确的分工，所以面向对象的编程具有灵活，代码可复用，容易维护和开发的优点，更适合多人合作的大型软件项目

缺点：性能比面向过程低

面向对象的特性：封装性，继承性，多态性







## 2ES6中类和对象

### 面向对象

概念：

面向对象更贴近我们的实际生活，可以使用的面向对象描述现实世界的事物，但事物分为具体事物和抽象事物

面向对象的思维特点：

1.抽取（抽象）将对象公共的属性和行为组成（封装）成一个类（模板）

2.对类进行实例化，获取类的对象

面向对象编程我们考虑的是有哪些对象，按照面向对象的思维特点不断创建对象，使用对象，指挥对象做事情

### 对象

现实生活中：万物皆对象，对象是一个具体的事物，是看得见摸得着的具体实物。例如：一本书，一辆汽车，一个人可以是“对象”一个数据库，一张网页，一个远程服务器连接也可以是一个“对象”

在js中对象是一组无序的相关属性和方法的集合，所有是事物都是对象，例如字符串，数值，数组，函数等

对象是由函数和方法组成的

属性：事物的特征，在对象中用属性来表示（常用名词）

方法：事物行为，在对象中用方法来表示（常用动词）

### 类Class

在ES6中新增加的了类的概念，可以使用class关键字声明一个类，以后这个类来实例化对象

类抽象了公共部分，它泛指某一大类（class）对象特指某一个，通过类来实例化一个具体对象

### 创建类

语法：class name{

//class body

}

类的实例：

var  xx=new  name()

注意：类必须使用new实例化对象

类constructor构造函数

constructor()方法是类的构造函数（默认方法）用于传递参数，返回实例化对象，通过new命令生成对象实例时，自动调用该方。法如果没有显示定义，类内部会自动给我们创建一个constraint（）

### 类的属性

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        //创建类class创建一个明星类
        class star {

            //1此刻constructor后面跟的是形参
            //4将刘德华传递给uname
            constructor(uname) {
                //2.接收参数
                this.uname = uname
                //5.uname将值传递给this.uname
                //this指向你所创建的实例 --- ldh
            }
        }
        //利用类创建对象 new
        //new star()
        //传递参数
        var ldh = new Star('刘德华')
        var zxy = new Star('张学友')
        //3此处的new自动调用了constructor


        class Str {
            constructor(uane, age) {
                this.name = name;
                this.age = age;
            }
        }
        var ldh = new Str('刘德华', 18)
        var zxy = new Str('张学友', 18)
    </script>
</body>

</html>
```

注意：

通过class关键字创建类，类名我们还是习惯性首字母大写

类里面有一个constructor函数，可以接收传递过来的参数，同时返回实例对象

constructor函数，只要new生成实例时，就会自动调用这个函数，如果我们不写这个函数，类也会自动调用

生成实例new不能省略

最后注意语法规范，创建类，类名后面不要加小括号，生成实例，类名的后面要加小括号，构造函数不需要加function

### 类的方法

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>



        class Str {
            constructor(uane, age) {
                this.name = name;
                this.age = age;
            }
            //方法---唱歌
            sing(song){
                //console.log("我会唱歌")
                //打印
                console.log(this.name+song)

            }
        }
        var ldh = new Str('刘德华', 18)
        var zxy = new Str('张学友', 18)
        console.log(ldh)
        console.log(zxy)
        //调用函数
        ldh.sing()
        zxy.sing()
        //传递参数
        ldh.sing('冷冷的冰雨在我脸上胡乱的拍');
        zxy.sing('李香兰')

    </script>
</body>

</html>
```

我们类里面是所有函数不需要写function

多个函数之间不需要添加逗号分隔

## 3类的继承

现实中的继承，子承父业，比如我们继承了父亲是姓氏

程序中的继承，子类可以继承父类的一些属性和方法

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        //父类
        class Father {
            constructor(){

            }
            money(){
                console.log(100)
            }
        }
        //子类
        class Son extends Father{

        }
        //实例化字类
        var son=new Son()
        //康康能不能调用父类里面的方法
        son.Money()
    </script>
</body>

</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        class Father{
            constructor(x,y){
                this.x=x;
                this.y=y;
            }
            sum(){
                console.log(this.x+this.y)
            }
        }
        class Son extends Father{
            constructor(x,y){
                //错误
                // this.x=x;
                // this.y=y;           
                //使用super调用父类中的构造函数
                super(x,y)                       
            }
        }
        //传参
        var son=new Son(1,2)
        //调用继承方法
        son.sum();
    </script>
</body>
</html>
```

### super关键字（继承父类）

super关键字用于访问和调用对象父类上的函数，可以调用父类的构造函数，也可以调用父类的普通函数

继承中：如果实例化字类输出一个方法，先看字类有没有这个方法，如果有就先执行子类的

继承中：如果子类里面没有，就去查找父类有没有这个方法，如果有，就执行父类这个方法（就近原则）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <script>
       class Father{
           say(){
               return "我是爸爸";
           }
       }
       class Son extends Father{
           say(){
               //console.log('我的儿子')
               console.log(super.say()+"的儿子")
               //super.say()就是调用父类中的普通函数 say()
           }
       }
       var son=new Son
       son.say()
   </script>

</body>
</html>
```



### 字类继承父类，并对父类进行扩展

注意：

字类在构造函数中使用super,必须放到this前面

必须先调用父类的构造方法，在使用子类的构造方法

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        class Father {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }
            sum() {
                console.log(this.x + this.y)
            }
        }
        //字类继承父类的加法后同时扩展减法的方法
        class Son {
            constructor(x, y) {
                //用super调用父类的构造函数时，super必须在子类this之前调用
                super(x, y)
                this.x = x;
                this.y = y;


            }
            subtract() {
                console.log(this.x - this.y);
            }
        }
        var son = new Son(5, 3);
        son.subtract()
        son.sum()
    </script>
</body>

</html>
```

### 类和对象的的三个注意点

1.在ES6中类没有提升变量，所以必须先定义类，才能通过类来实例化对象

2.类里面的共有属性和方法一定要加this使用

3.this的指向问题

constructor中的this指向是的是我们所创建的实例

而例子中的实例为Star



## 4面向对象的案例

## 构造函数和原型

目标

能够使用构造函数

能够说出原型的作用

能够说出访问对象成员的规则

能够使用访问对象成员的规则

能够使用ES6新增的一些方法

### 1.构造函数和原型

1.1概述：

在典型的面向对象（OOP）的语言中（如Java）,都存在类的概念，类就是对象的模板，对象就是类的实例，但在ES6之前，js中并没有引用类的概念

现在目前的浏览器的JS都是ES5版本，虽然大部分高版本浏览器也支持ES6但只实现了ES6的部分功能

在ES6之前对象不是基于类创建的，而是利用一种称为构造函数的特殊函数来定义对象和他们的特征

1.2创建对象可以通过一下三种方式：

字面量创建对象

new Object()创建对象

构造函数创建对象

构造函数是一种特殊的函数，主要用来初始化对象，及为对象成员变量赋值初始值，它总与new一起使用，我们可以吧对象中的一些公共属性和方法抽取出来，然后封装到这个函数里面

注意点：

构造函数用于创建某一类对象，其首字母要大写

构造函数要和new一起使用菜有意义

new在执行中会做的四件事情:

在内存中创建一个新的空对象

让this指向这个空对象

执行构造函数里面的代码，给这个新对象添加属性和方法

返回这个新对象（所以构造函数里面不需要return）

构造函数中可以添加一下成员，可以在构造函数本身添加，也可以子啊构造函数的内部的this上添加。通过这两种方式添加是成员 ，就分别称为静态成员和实例成员

实例成员：在构造函数内部创建的对象成员称为实例成员，只能由实例化的对象来访问

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        //构造函数中的属性和方法我们称为成员，成员可以添加
        class Star {
            constructor(uname, age) {
                this.uname = uname
                this.age = age
                this.sing=function(){
                    console.log("我会唱歌")
                }
            }
        }
        var ldh=new Star('刘德华',18)
        //实例成员就是构造函数内部通过this添加的成员uname,age,sing就是实例成员
        //实例化成员只能通过实例化的对象（ldh）来访问
        //使用其中的元素
        console.log(ldh.uname)
        //使用其中的方法
        ldh.sing()
    </script>
</body>

</html>
```

静态成员：在构造函数本身上添加的成员称为静态成员，只能由构造函数本身来访问

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        //构造函数中的属性和方法我们称为成员，成员可以添加
        class Star {
            constructor(uname, age) {
                this.uname = uname
                this.age = age
                this.sing=function(){
                    console.log("我会唱歌")
                }
            }
        }
        var ldh=new Star('刘德华',18)
        //实例成员就是构造函数内部通过this添加的成员uname,age,sing就是实例成员
        //实例化成员只能通过实例化的对象（ldh）来访问
        //使用其中的元素
        console.log(ldh.uname)
        //使用其中的方法
        ldh.sing()

        //静态成员
        Star.sex="男";
        //静态成员只能通过构造函数来访问
        console.log(Star.sex)
    </script>
</body>

</html>
```

构造函数的问题

，构造函数方法很好用但是存在内存浪费的问题

如何浪费嘞

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        //构造函数的问题
        function Star(uname,age){
            this.uname=uname;
            this.age=age
            this.sing=function(){
                console.log("我会唱歌")
            }
        }
        var ldh=new Star("刘德华",18)
        var zxy=new Star("张学友",18)
        //下面的等于的错误的
        //所有它在这里用了两个内存空间
        console.log(ldh.sing===zxy.sing)
    </script>
</body>
</html>
```

因此：

我们希望所有的对象都使用同一个函数，这样就节省内存了

### 构造函数原型prototype

构造函数通过原型对象分配的函数是所有对象共享的

JS规定，每一个构造函数都有一个prototype属性，指向另一个对象，其中protptype就是一个对象，这个对象的所有属性和方法都会被构造函数所拥有

我们可以吧哪些不变的方法，直接定义在prototype对象上。这样所有的实例就可以共享这些方法

原型是什么

是对象

作用是什么

实现了方法的共享

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        //构造函数的问题
        function Star(uname,age){
            this.uname=uname;
            this.age=age
            this.sing=function(){
                console.log("我会唱歌")
            }
        }
        var ldh=new Star("刘德华",18)
        var zxy=new Star("张学友",18)
        //下面的等于的错误的
        //console.log(ldh.sing===zxy.sing)
        console.dir(Star)
        //可以看到Star中包含prototype对象
    </script>
</body>
</html>
```

prototype的作用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        //构造函数的问题
        function Star(uname,age){
            this.uname=uname;
            this.age=age
            // this.sing=function(){
            //     console.log("我会唱歌")
            //}
        }
        //将sing方法放到构造函数外面
        //在构造函数的原型对象的里面添加sing这个方法
        //因为原型对象是对象可以动态的添加属性和方法
        Star.prototype.sing=function(){
            console.log("我会唱歌")
        }
        var ldh=new Star("刘德华",18)
        var zxy=new Star("张学友",18)

        //调用原型对象的方法
        ldh.sing()
        zxy.sing()
        //此刻他们是相同的空间
        console.log(ldh.sing=zxy.sing)

        //注意：
        //一般情况下，我们的公共属性定义到构造函数的里面，公共的方法我们放到原型对象的身上
    </script>
</body>
</html>
```

###  对象原型(__proto__)

对象都会有一个属性_proto_,指向构造函数的prptotype原型对象，之所以我们可以使用构造函数prototype原型对象的属性和方法，就应为对象有proto原型存在

proto对象原型和原型对象prototype是等价的

![](D:\fei-qiu\图片\Snipaste_2020-09-16_13-33-19.png)



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        //构造函数的问题
        function Star(uname,age){
            this.uname=uname;
            this.age=age
            // this.sing=function(){
            //     console.log("我会唱歌")
            //}
        }

        Star.prototype.sing=function(){
            console.log("我会唱歌")
        }

        var ldh=new Star("刘德华",18)
        var zxy=new Star("张学友",18)

        //问题sing明明是原型对象prototype的方法，为什么ldh可以用
        ldh.sing()
        //打印ldh
        console.log(ldh)
        //其中自动添加了__proto__属性，而__proto__指向的就是prototype原型对象
        consolel.log(ldh.__proto__===Star.prototype)
        //方法的查找规则
        //首先看ldh对象身上是否有sing这个方法，如果有就执行
    </script>
</body>
</html>
```



### 构造函数constructor

对象原型proto和构造函数原型对象prototype里面都有一个属性constraint属性

constructor我们称为构造函数，因为它指回构造函数本身

costructor主要用于记录该对象用于那个构造函数，它可以让原型对象重新指向原来的构造函数









### 2.继承

### 3.ES5中新增的方法



