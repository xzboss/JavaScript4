// 第一种用法
const person = {}
Object.defineProperty(person, 'name', {
  // 可否配置
  configurable: true,
  // 可否修改
  writable: true,
  // 可否遍历
  enumerable: true,
  // 值
  value: 'xz'
})

// 第二种 访问器属性
const car = {
  brand: 'benz'
}
Object.defineProperty(car, 'flex', {
  get() {
    return this.brand + '-big'
  },
  set(newVal) {
    console.log(newVal) // new
  }
})
car.flex = 'new'
console.log(car.flex) // 'benz-big'

// 第三种 定义多个属性
const plural = {}
Object.defineProperty(plural, {
  v1: {
    configurable: true,
    writable: true,
    enumerable: true,
    value: 'xz'
  },
  v2: {
    get() {
      return 0
    },
    set(newVal) {
      // code
    }
  }
})

//> 四个数据属性默认值为 false
// configurable 为 false 后不能更改回来
