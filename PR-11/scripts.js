// Функція для створення бібліотеки
var SortingLibrary = (function() {
    // Приватні змінні для підрахунку операцій
    var comparisons = 0;
    var exchanges = 0;

    // Функція для обміну елементів масиву
    function swap(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        exchanges++;
    }

    // Функція сортування методом обміну (bubble sort)
    function bubbleSort(arr, order) {
        comparisons = 0;
        exchanges = 0;
        var n = arr.length;
        for (var i = 0; i < n-1; i++) {
            for (var j = 0; j < n-i-1; j++) {
                comparisons++;
                if ((order === "asc" && arr[j] > arr[j+1]) || (order === "desc" && arr[j] < arr[j+1])) {
                    swap(arr, j, j+1);
                }
            }
        }
        console.log("Bubble sort comparisons:", comparisons);
        console.log("Bubble sort exchanges:", exchanges);
    }

    // Функція сортування методом мінімальних елементів (selection sort)
    function selectionSort(arr, order) {
        comparisons = 0;
        exchanges = 0;
        var n = arr.length;
        for (var i = 0; i < n-1; i++) {
            var min_idx = i;
            for (var j = i+1; j < n; j++) {
                comparisons++;
                if ((order === "asc" && arr[j] < arr[min_idx]) || (order === "desc" && arr[j] > arr[min_idx])) {
                    min_idx = j;
                }
            }
            if (min_idx !== i) {
                swap(arr, i, min_idx);
            }
        }
        console.log("Selection sort comparisons:", comparisons);
        console.log("Selection sort exchanges:", exchanges);
    }

    // Функція сортування методом вставок (insertion sort)
    function insertionSort(arr, order) {
        comparisons = 0;
        exchanges = 0;
        var n = arr.length;
        for (var i = 1; i < n; i++) {
            var key = arr[i];
            var j = i - 1;
            while (j >= 0 && ((order === "asc" && arr[j] > key) || (order === "desc" && arr[j] < key))) {
                comparisons++;
                arr[j+1] = arr[j];
                j--;
                exchanges++;
            }
            arr[j+1] = key;
        }
        console.log("Insertion sort comparisons:", comparisons);
        console.log("Insertion sort exchanges:", exchanges);
    }

    // Функція сортування методом Шелла
    function shellSort(arr, order) {
        comparisons = 0;
        exchanges = 0;
        var n = arr.length;
        for (var gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
            for (var i = gap; i < n; i++) {
                var temp = arr[i];
                var j = i;
                while (j >= gap && ((order === "asc" && arr[j-gap] > temp) || (order === "desc" && arr[j-gap] < temp))) {
                    comparisons++;
                    arr[j] = arr[j-gap];
                    j -= gap;
                    exchanges++;
                }
                arr[j] = temp;
            }
        }
        console.log("Shell sort comparisons:", comparisons);
        console.log("Shell sort exchanges:", exchanges);
    }

    // Функція розбиття для швидкого сортування
    function partition(arr, low, high, order) {
        var pivot = arr[Math.floor((low + high) / 2)];
        var i = low - 1;
        var j = high + 1;
        while (true) {
            do {
                i++;
                comparisons++;
            } while ((order === "asc" && arr[i] < pivot) || (order === "desc" && arr[i] > pivot));
            do {
                j--;
                comparisons++;
            } while ((order === "asc" && arr[j] > pivot) || (order === "desc" && arr[j] < pivot));
            if (i >= j) return j;
            swap(arr, i, j);
        }
    }

    // Функція швидкого сортування (Хоара)
    function quickSort(arr, low, high, order) {
        if (low < high) {
            var pi = partition(arr, low, high, order);
            quickSort(arr, low, pi, order);
            quickSort(arr, pi + 1, high, order);
        }
    }

    // Публічні методи бібліотеки
    return {
        bubbleSort: bubbleSort,
        selectionSort: selectionSort,
        insertionSort: insertionSort,
        shellSort: shellSort,
        quickSort: function(arr, order) {
            comparisons = 0;
            exchanges = 0;
            quickSort(arr, 0, arr.length - 1, order);
            console.log("Quick sort comparisons:", comparisons);
            console.log("Quick sort exchanges:", exchanges);
        }
    };
})();

// Приклад використання бібліотеки

// Нерозріджений масив
var arr = [];
for (var i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 1000));
}

console.log("Original array:", arr.slice());

SortingLibrary.bubbleSort(arr.slice(), "asc");
console.log("Bubble sorted array (asc):", arr.slice());

SortingLibrary.selectionSort(arr.slice(), "asc");
console.log("Selection sorted array (asc):", arr.slice());

SortingLibrary.insertionSort(arr.slice(), "asc");
console.log("Insertion sorted array (asc):", arr.slice());

SortingLibrary.shellSort(arr.slice(), "asc");
console.log("Shell sorted array (asc):", arr.slice());

SortingLibrary.quickSort(arr.slice(), "asc");
console.log("Quick sorted array (asc):", arr.slice());

// Розріджений масив
var sparseArr = [];
for (var j = 0; j < 100; j++) {
    if (j % 5 === 0) {
        sparseArr[j] = Math.floor(Math.random() * 1000);
    }
}

console.log("Original sparse array:", sparseArr.slice());

SortingLibrary.bubbleSort(sparseArr.slice(), "desc");
console.log("Bubble sorted sparse array (desc):", sparseArr.slice());

SortingLibrary.selectionSort(sparseArr.slice(), "desc");
console.log("Selection sorted sparse array (desc):", sparseArr.slice());

SortingLibrary.insertionSort(sparseArr.slice(), "desc");
console.log("Insertion sorted sparse array (desc):", sparseArr.slice());

SortingLibrary.shellSort(sparseArr.slice(), "desc");
console.log("Shell sorted sparse array (desc):", sparseArr.slice());

SortingLibrary.quickSort(sparseArr.slice(), "desc");
console.log("Quick sorted sparse array (desc):", sparseArr.slice());
