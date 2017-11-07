const {exch, insertBefore, less, arrayCheck, getRandomArray,isSorted} = require('./util/util.js')

/*  插入排序  */
function insertSort(array) {
	if(!arrayCheck(array)) return
	// 排序
	const len = array.length
	for(let i = 1; i < len; i++) {
		// 由新元素开始向左扫描，交换每个比他大的元素（类似于冒泡）
		for(let j = i; j > 0 && array[j] < array[j - 1]; j--) {
				exch(array, j , j - 1)
		}

		// for(let j = 0; j < i; j++) {
		// 	if(array[i] < array[j]) {
		// 		// 将i插入到j之前
		// 		insertBefore(array, i, j)
		// 		break
		// 	}
		// }
	}
	return array
}

module.exports = insertSort