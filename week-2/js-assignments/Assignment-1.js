function max(numbers) {
    let max = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] >= max) {
            max = numbers[i];
        }
    }
    return max;
}