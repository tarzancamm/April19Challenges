// Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.


const keepOrder = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= val) {
            return i
        } else if (arr[i] < val && arr[i+1] === val || arr[i+1] > val) {
            return i + 1
        } else if (arr[arr.length - 1] < val) {
            return arr.length
        }
    }

    return 0
}


console.log(keepOrder([1, 2, 3, 4, 7], 5)) //4
console.log(keepOrder([1, 1, 2, 2, 2], 2)) //2
console.log(keepOrder([1, 2, 3, 4, 7], 0)) //0
console.log(keepOrder([1, 2, 3, 4], 5)) //4