# Or
Returns true if one or the other condition is true
```sig
logic.or()
```
## Parameters
- **a**: the first boolean condition
- **b**: the second boolean condition

## Example


```blocks

let num = 2
let num2 = 1

if (logic.or(num == 5, num2 == 1) {
    game.splash("true")
}

```

```package
Better-Logic=github:CrzLe0723/better-logic
```
