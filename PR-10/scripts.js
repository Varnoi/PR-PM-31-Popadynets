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

    // Повертаємо публічні методи бібліотеки
    return {
        bubbleSort: bubbleSort,
        selectionSort: selectionSort,
        insertionSort: insertionSort
    };
})();
