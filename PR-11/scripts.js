const LibraryForSort = {
	// метод обміну 
	bubbleSort: function (arr, ascending = true) {
		let obminy = 0;
		let peremischennia = 0;
		const n = arr.length;
		for (let i = 0; i < n - 1; i++) {
			for (let j = 0; j < n - i - 1; j++) {
				obminy++;
				if ((ascending && arr[j] > arr[j + 1]) || (!ascending && arr[j] < arr[j + 1])) {
					let temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
					peremischennia++;
				}
			}
		}
		console.log(`метод обміну : обмінів - ${obminy}, переміщення - ${peremischennia}`);
		return arr;
	},

	// мін.елементи 
	selectionSort: function (arr, ascending = true) {
		let obminy = 0;
		let peremischennia = 0;
		const n = arr.length;
		for (let i = 0; i < n - 1; i++) {
			let min_idx = i;
			for (let j = i + 1; j < n; j++) {
				obminy++;
				if ((ascending && arr[j] < arr[min_idx]) || (!ascending && arr[j] > arr[min_idx])) {
					min_idx = j;
				}
			}
			let temp = arr[min_idx];
			arr[min_idx] = arr[i];
			arr[i] = temp;
			peremischennia++;
		}
		console.log(`мін.елементи :  обмінів - ${obminy}, переміщення - ${peremischennia}`);
		return arr;
	},

	// метод вставок (тут без коментарів)
	insertionSort: function (arr, ascending = true) {
		let obminy = 0;
		let peremischennia = 0;
		const n = arr.length;
		for (let i = 1; i < n; i++) {
			let key = arr[i];
			let j = i - 1;
			while (j >= 0 && ((ascending && arr[j] > key) || (!ascending && arr[j] < key))) {
				obminy++;
				arr[j + 1] = arr[j];
				j = j - 1;
				peremischennia++;
			}
			arr[j + 1] = key;
		}
		console.log(`метод вставок :  обмінів - ${obminy}, переміщення - ${peremischennia}`);
		return arr;
	},

	// (Томас) Шелл(бі)
	shellSort: function (arr, ascending = true) {
		let obminy = 0;
		let peremischennia = 0;
		const len = arr.length;
		let gap = Math.floor(len / 2);

		while (gap > 0) {
			for (let i = gap; i < len; i++) {
				let temp = arr[i];
				let j = i;

				while (j >= gap && ((ascending && arr[j - gap] > temp) || (!ascending && arr[j - gap] < temp))) {
					obminy++;
					arr[j] = arr[j - gap];
					j -= gap;
					peremischennia++;
				}
				arr[j] = temp;
			}
			gap = Math.floor(gap / 2);
		}
		console.log(`метод :  обмінів - ${obminy}, переміщення - ${peremischennia}`);
		return arr;
	},

	// Хоара (скоростр..)
	quickSort: function (arr, low = 0, high = arr.length - 1, ascending = true) {
		let obminy = 0;
		let peremischennia = 0;

		const swap = (arr, i, j) => {
			[arr[i], arr[j]] = [arr[j], arr[i]];
			obminy++;
		};

		const sort = (arr, low, high) => {
			if (low >= high) return;

			const pivot = arr[Math.floor((low + high) / 2)];
			let i = low;
			let j = high;

			while (i <= j) {
				while ((ascending && arr[i] < pivot) || (!ascending && arr[i] > pivot)) {
					i++;
				}
				while ((ascending && arr[j] > pivot) || (!ascending && arr[j] < pivot)) {
					j--;
				}
				if (i <= j) {
					swap(arr, i, j);
					peremischennia++;
					i++;
					j--;
				}
			}

			sort(arr, low, j);
			sort(arr, i, high);
		};

		sort(arr, low, high);

		console.log(`метод Хоара :  обмінів - ${obminy}, переміщення - ${peremischennia}`);
		return arr;
	},


};


const array = Array.from({ length: 100 }, () => Math.floor(Math.random() * 666));

console.log("Перший :", array);
console.log("Метод обмінника:", LibraryForSort.bubbleSort([...array]));
console.log("Мін. метод:", LibraryForSort.selectionSort([...array]));
console.log("вставок", LibraryForSort.insertionSort([...array]));
console.log("метод 1:", LibraryForSort.shellSort([...array]));
console.log("Хоара :", LibraryForSort.quickSort([...array]));
