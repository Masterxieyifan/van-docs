<!--
 * @Author: your name
 * @Date: 2021-02-02 11:30:05
 * @LastEditTime: 2021-07-13 18:49:21
 * @LastEditors: 蔡远程
 * @Description: In User Settings Edit
 * @FilePath: /gandalf/vantop-util/helper/README
-->
## 助手类
### 使用方法（按需引入）
```js
import { getType } from '@vantop/vantop-util';
getType;
```
### 方法列表
| 方法          | 说明                 | 返回值     |
| :------------ |:-------------------| :----------|
| [getType(target)](/vantop-util/helper/getType) | 获取target的类型  | string    |
| [copyText(text)](/vantop-util/helper/copyText) | 复制文本方法  | Promise    |
| [cloneDeep(obj)](/vantop-util/helper/cloneDeep) | 深拷贝一个对象 | Array/Object |
| [debounce(func, wait)](/vantop-util/helper/debounce) | 函数防抖 |  - |
| [throttle(func, wait)](/vantop-util/helper/throttle) | 函数节流 |  - |
| [findIndex(arr, predicate, [fromIndex])](/vantop-util/helper/findIndex)| 在数组中寻找第一个匹配项索引 | number
| [findLastIndex(arr, predicate, [fromIndex])](/vantop-util/helper/findLastIndex)| 在数组中寻找最后一个匹配项索引| number
| [uniq(arr)](/vantop-util/helper/uniq) | 数组去重  | arr    |
| [uniqBy(arr, string\|function)](/vantop-util/helper/uniqBy) | 根据iteratee进行数组去重  | arr    |
| [findChildInArr(arr, value, key, isCompare, ChildrenKey)](/vantop-util/helper/findChildInArr) | 在数组里寻找对应子集  | object    |
| [serialize(obj)](/vantop-util/helper/serialize) | 表单对象序列化  | string    |
| [changeUrlPar(url, key, value)](/vantop-util/helper/changeUrlPar) | 修改url地址query值  | string    |
| [uniencode(str)](/vantop-util/helper/uniencode) | 对str进行特殊编码处理  | string    |
| [memoize(func, resolver)](/vantop-util/helper/memoize) | 将函数转化为带缓存功能的函数 | Function |
| [sumBy(arr, string\|function)](/vantop-util/helper/sumBy) | 对对象数组的属性值求和 | number |
| [countBy(arr, [string\|function])](/vantop-util/helper/countBy) | 对数组项聚合统计 | Object |
| [unionBy([arrays], iteratee)](/vantop-util/helper/unionBy) | 对（单个/多个）数组去重合并  | Array    |
| [removeInvisibleCharacter(string)](/vantop-util/helper/removeInvisibleCharacter) | 去除字符串中不可见字符 | String |
| [hasOwnProperty(obj, key)](/vantop-util/helper/hasOwnProperty) | 检测对象是否具有指定的属性 | boolean |


