const {exch, less, arrayCheck, getRandomArray,isSorted} = require('./util/util.js')

/*  选择排序  */
function selectSort(array) {
	if(!arrayCheck(array)) return
	// 排序
	const len = array.length
	for(let i = 0; i < len - 1; i++) {
		let index = i
		for(let j = i + 1; j < len; j++) {
			if (array[j] < array[index]) {
				index = j
			}
		}
		// 交换两个元素位置
		if(i !== index){
			exch(array, i, index)
		}
	}
	return array
}

module.exports = selectSort