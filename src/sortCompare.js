const {getRandomArray} = require('./util/util.js')
const bubbleSort = require('./bubbleSort.js')
const insertSort = require('./insertSort.js')
const selectSort = require('./selectSort.js')
const shellSort = require('./shellSort.js')

// 比较各种排序方法的效率
function sortCompare() {
	let sortMethods = [bubbleSort, insertSort, selectSort, shellSort]
	let time = {
		bubbleSort: 0,
		insertSort: 0,
		selectSort: 0,
		shellSort: 0,
	}

	for(let i = 0; i < sortMethods.length; i++) {
		let timer = new Date()
		for(let t = 0; t < 100; t++) {
			let array = getRandomArray()
			sortMethods[i](array)
		}
		time[sortMethods[i].name] = new Date() - timer
	}

	for(let sort in time) {
		console.log(`${sort}所需平均时间：${time[sort]}ms`)
	}
}
sortCompare()