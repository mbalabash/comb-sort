## CombSort implementation on javascript.

**See: https://en.wikipedia.org/wiki/Comb_sort**

### Basic usage:

```js
const data = [some...data]
const sortedData = combSort(data)
```

**(This is mutable operation and it will change source array)**

or

```js
const sortedData = combSort(data.slice())
```

### You can pass a custom compare function as the second argument:

```js
const customCompare = (first, second) => {
  if (
    Array.isArray(first.children) &&
    Array.isArray(second.children) &&
    first.children.length > second.children.length
  ) {
    return true
  }
  return false
}
const sortedData = combSort(data, customCompare)
```

### Also, you can pass custom reduction value as the third argument.

```js
const sortedData = combSort(data, customCompare, 1.8)
```

**Be careful with playing with reduction parameter.**

**It can affect performance and accuracy.**
