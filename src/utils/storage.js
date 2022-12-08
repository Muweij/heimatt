//存缓存的方法
//传入两个参数：1、键 2、值
export const setItem = (key, value) => {
  //思考：存一个简单数据没问题，那要存一个数组或对象，可以吗？
  if (typeof value == "object") {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
};

//读缓存的方法
//读缓存调用getItem('token')
//调用getItem方法，要有返回值
//读了一个json字符串，怎么处理？

export const getItem = (key) => {
  let obj = localStorage.getItem(key);
  //怎么判断普通的字符串还是json字符串？
  //try chtch捕获js代码异常的标准写法，也包括了异步请求的失败处理
  try {
    //如果是普通字符串，这行代码就报错了
    //报错了，就直接到catch了
    return JSON.parse(obj);
  } catch (error) {
    //直接返回读取到的缓存数据
    return obj;
  }
};

//清空缓存
//目标：退出登录时需要清空缓存
//原因：token包含了用户身份信息，token泄漏了非常不安全
//解决：退出登录时需要清空缓存
export const removeItem = () => {
  localStorage.clear();
};
