# 替换字符

## 替换命令

公式 `:[range]s[ubstitute]/{pattern}/{string}/[flags]`

`[]` 里面的是可选的

### 范围

- 🌰 `:s/vnode/haha`

`%` 当前文件所有内容【常用】

- 🌰 `:%s/vnode/haha`

`number,number` 指定行数

- 🌰 `:16,20s/vnode/haha`

`$` 到行尾

- 🌰 `:20,$s/vnode/haha`

别的操作

- `:s/v\dnode/haha` 替换 `\d` 正则替换随便数字

```
vnode

vnode

vnode vnode haha
```

`g` 全局替换

- 🌰 `:s/vnode/haha/g`

`c` 可视化可选替换

- 🌰 `:s/vnode/haha/gc`
  - `y` 替换
  - `n` 不替换
  - `a` 全部替换
  - `q` 退出
  - `l` 替换并退出

### 可视化

`v:s/vnode/haha`

## 多选操作

`gb` 多光标匹配，区分大小写的

- 🌰 `gbc` 来匹配，然后改写
