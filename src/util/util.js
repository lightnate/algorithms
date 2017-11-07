const
arrayCount = 10000,
range = 1000




/* 交换数组中的2个元素 */
// 传入数组和两个索引
function exch(array, i, j) {
	let tmp = array[i]
	array[i] = array[j]
	array[j] = tmp
}

// 将i插入到j之前
function insertBefore(array, i, j) {
	const del_item = array.splice(i, 1)[0]
	array.splice(j, 0, del_item)
}

function less() {

}

function arrayCheck(array) {
	// 类型检测
	if (!array instanceof Array) {
		console.error('参数不是一个数组')
		return false
	}
	const isNumberArray = array.every( (value) => {
		return typeof value === 'number'
	})
	if (!isNumberArray) {
		console.error('数组中包含非数字类型')
		return false
	}
	return true
}

// 检查数组是否已经排序完成
function isSorted(array) {
	return array.every((number, index, array) => {
		if(index === array.length - 1) {
			return true
		}
		return array[index] <= array[index + 1]
	})
}

// 产生1000位0-1000的随机数组
function getRandomArray(){
	let
	array = [],
	num

	for(let i = 0; i < arrayCount; i++){
		num = Math.round(Math.random() * range)
		array.push(num)
	}
	return array
} 

module.exports = {
	exch,
	insertBefore,
	less,
	arrayCheck,
	getRandomArray,
	isSorted
}