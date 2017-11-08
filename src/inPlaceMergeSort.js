const {exch, less, arrayCheck, getRandomArray,isSorted} = require('./util/util.js')

/*  归并排序：将两个有序数组归并为一个数组  */
/*  归并排序：原地归并  */
function inPlaceMergeSort(array_1, array_2) {
    if (!arrayCheck(array_1) && !arrayCheck(array_2) && !isSorted(array_1) && isSorted(array_2)) return

    // 将两个数组合并为一个数组
    let i = 0,
        mid = array_1.length - 1,
        j = mid + 1,
        high = array_1.length + array_2.length - 1
    	array = array_1.concat(array_2),
    	array_c = array.slice()

    for(let k = 0; k <= high; k++) {
    	if(i > mid) {             // 左半边用完，取右边的元素
    		array[k] = array_c[j++]
    	}else if(j > high) {	  // 右半边用完，取左边的元素
    		array[k] = array_c[i++]
    	}else if(array_c[i] > array_c[j]) {    // 左半边元素大于右半边，取右半边元素插入
    		array[k] = array_c[j++]
    	}else{
    		array[k] = array_c[i++]
    	}
    }
    return array
}

module.exports = inPlaceMergeSort