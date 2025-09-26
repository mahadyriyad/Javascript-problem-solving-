function main(a, b, c) {
    let minimum = a;
    if (b < minimum) minimum = b;
    if (c < minimum) minimum = c;
    console.log(minimum);
}

main(12, 33, 8);
