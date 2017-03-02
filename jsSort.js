/**
 * Created by Cuiyan on 2017/2/22.
 */
// 插入排序
function insertSort(arr) {
    var i = 1, j, temp;
    for (i=1; i<arr.length; i++) {
        for (j=i; j>0; j--){
            if (arr[j] < arr[j-1]) {
                temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            } else {
                break;
            }
        }
    }
    return arr;
}
// 插入排序优化写法
function insertSort2(arr) {
    var i = 1, j, temp;
    for (i=1; i<arr.length; i++) {
        j = i;
        while (j && arr[j] < arr[j-1]) {
            temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            j--;
        }
    }
    return arr;
}

// 冒泡排序
function bubbleSort(arr) {
    var i = arr.length, j, temp;
    while(i) {
        for (j=1; j<i; j++) {
            if (arr[j-1] > arr[j]) {
                temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
        }
        i--;
    }
    return arr;
}

// 冒泡排序小优化(没什么卵用的优化)
function bubbleSort2(arr) {
    var i = arr.length, j, temp, flag = 0;
    while(i) {
        for (j=1; j<i; j++) {
            if (arr[j-1] > arr[j]) {
                temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                flag = 1
            }
        }
        i--;
        // 如果一次冒泡过程中 没有位置交换 则排序结束
        if (0 === flag) {
            break;
        }
    }
    return arr;
}

// 选择排序
function selectionSort(arr) {
    var i, j, index = 0, temp;
    for (i=0; i<arr.length; i++) {
        index = i;
        for (j=i+1; j<arr.length; j++) {
            if (arr[index] > arr[j]) {
                index = j;
            }
        }
        temp = arr[index];
        arr[index] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

// 快速排序
var quickSort = function(arr) {
    if (arr.length <= 1) { return arr; }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [],
        right = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return arguments.callee(left).concat(pivot, arguments.callee(right));
};

function quickSort2(arr, begin, end) {
    if (begin<end) {
        var i = begin, j = end, temp = arr[i];
        while (i<j) {
            while (j>i && arr[j]>=temp) {
                j--;
            }
            arr[i] = arr[j];
            while (i<j && arr[i]<temp) {
                i++;
            }
            arr[j] = arr[i];
        }
        arr[i] = temp;
        arguments.callee(arr, begin, i-1);
        arguments.callee(arr, i+1, end);
    }
    return arr;
}

function quickSort3(arr, begin, end) {
    if (begin >= end) {
        return arr;
    }
    var i = begin, j = end, temp;
    while (i<j) {
        if (arr[i] <= arr[end]) {
            i++
        } else {
            j--;
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    temp = arr[i];
    arr[i] = arr[end];
    arr[end] = temp;
    arguments.callee(arr, begin, i-1);
    arguments.callee(arr, i+1, end);
    return arr;
}

var arr = [8,4,6,2,7,9,3,5,74,5];

console.log(quickSort3(arr, 0, arr.length-1));