function main(input) {
    let celsius = parseFloat(input.trim());
    let fahrenheit = (celsius * 9/5) + 32;
    console.log("The temperature in Fahrenheit is: " + fahrenheit.toFixed(2));
}

main("32");
