## 安装 vue-cli

```
yarn global add @vue/cli

```

## 安装快速打包工具

```
yarn global add @vue/cli-service

vue serve

```

## 传递方式

- props + emit / v-model / .sync + update

- provide + inject 会造成全局数据流混乱，自己实现工具库，可以采用这种方式(尽量不要直接去更改父组件的数据)

- $parent / $children 可以直接出发父或子组件的方法

- 根据$parent / $children 封装出$dispatch(向上传递)和$broadcast(向下派发)函数，实现孙子和祖先传递

- $listeners和$attr 将父组件属性和方法向下传递

- ref 操作 dom,获取组件的实例

- eventBus 采用发布订阅的模式，通过一个公共的实例，在任何组件中订阅，在其他组件中触发，可以任意组件通信
