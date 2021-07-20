# 数学类
### 使用方法（按需引入）
```js
import { number2CNY } from '@vantop/vantop-util';
number2CNY();
```
### 方法列表
| 方法          | 说明                 | 返回值     |
| :------------ |:-------------------| :----------|
|  [fixedNumber(num, decimal, digits, zero)](/vantop-util/math-helper/fixedNumber)  | 数字的处理 | string |
|  [number2CNY(num,isUpper)](/vantop-util/math-helper/number2CNY)  | 将数字转化成中文金额| string |
|  [number2Byte(num)](/vantop-util/math-helper/number2Byte)  | 存储单位转换| string |
|  [splitNumByThou(num, sign)](/vantop-util/math-helper/splitNumByThou)  | 千分位分隔处理 | string |