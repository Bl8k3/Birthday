function birthday() {

    var num = 60;
    while (num >= 30)
    {
        console.log(num, "days left until my birthday :C");
        num = num - 1;
    };
    while (num < 30 && num >= 5) {
        console.log(num, "days leftJust a few more weeks!");
        num = num - 1;
    };
    while (num < 5 && num < 5 && num > 0) {
        console.log(num, "days left I'm excited!");
        num = num - 1;
    };
    console.log("Happy Birthday!");
};
birthday();