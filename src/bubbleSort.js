const {exch, less, arrayCheck, getRandomArray,isSorted} = require('./util/util.js')

/*  冒泡排序  */
function bubbleSort(array) {
	if(!arrayCheck(array)) return
	// 排序
	const len = array.length
	for(let i = 0; i < len - 1; i++) {
		for(let j = 0; j < len - 1 - i; j++) {
			if(array[j] > array[j + 1]) {
				exch(array, j, j + 1)
			}
		}
	}
	return array
}

module.exports = bubbleSort