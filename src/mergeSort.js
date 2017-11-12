const {exch, less, arrayCheck, getRandomArray,isSorted} = require('./util/util.js')

class Merge {
	constructor(array) {
		this.array = array
		// 归并所需的辅助数组
		this.array_c = new Array(this.array.length)
		this.sortT2B()
	}

	/* 自顶向下的归并排序  */
    sortT2B() {
        this.sort(this.array, 0, this.array.length - 1)
    }

    sort(array, lo, hi) {
        if (lo >= hi) return
        let mid = lo + Math.floor((hi - lo) / 2)
        this.sort(array, lo, mid)        //将左半边排序
        this.sort(array, mid + 1, hi)    //将右半边排序
        this.inPlaceMergeSort(array, lo, mid, hi) //归并结果
    }

    // 原地归并排序
    inPlaceMergeSort(array, lo, mid, hi) {
        if (!arrayCheck(array)) return

        let i = lo,
            j = mid + 1
            // 将arrry[lo...,hi] 复制到array_c
        for (let k = lo; k <= hi; k++) {
            this.array_c[k] = array[k]
        }
        for (let k = lo; k <= hi; k++) {
            if (i > mid) { // 左半边用完，取右边的元素
                array[k] = this.array_c[j++]
            } else if (j > hi) { // 右半边用完，取左边的元素
                array[k] = this.array_c[i++]
            } else if (this.array_c[i] > this.array_c[j]) { // 左半边元素大于右半边，取右半边元素插入
                array[k] = this.array_c[j++]
            } else {
                array[k] = this.array_c[i++]
            }
        }
    }
}

/* 自底向上的归并排序  */
function mergeSortB2T(array) {

}
module.exports = Merge