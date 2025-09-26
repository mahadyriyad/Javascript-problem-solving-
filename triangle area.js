function main(input) {
    let nums = input.split(/\s+/).map(Number);
    if (nums.length < 2 || isNaN(nums[0]) || isNaN(nums[1])) {
        console.error("Please provide two numbers for base and height.");
        return;
    }
    let base = nums[0];
    let height = nums[1];
    let area = (base * height) / 2;
    console.log(area);
}

main("10 20");
