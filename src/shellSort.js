const {exch, less, arrayCheck, getRandomArray,isSorted} = require('./util/util.js')

/*  插入排序：希尔排序  */
function shellSort(array) {
	if(!arrayCheck(array)) return
		
	// 排序
	let gap = 1,
		len = array.length
	while(gap < len / 3) {
		gap = gap * 3 + 1
	}
	while(gap >= 1) {
		for(let i = gap; i < len; i++) {
			for(let j = i; j >= gap && array[j] < array[j - gap]; j -= gap) {
				exch(array, j, j - gap)
			}
		}
		gap = (gap-1) /3
	}
	return array
}
// console.log(shellSort(getRandomArray()))
// console.log(isSorted(shellSort(getRandomArray())))
module.exports = shellSort