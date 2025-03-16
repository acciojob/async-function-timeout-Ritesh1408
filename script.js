document.addEventListener("DOMContentLoaded", () => {
    let input = document.getElementById("text");
    let delayInput = document.getElementById("delay");
    let button = document.getElementById("btn");
    let output = document.getElementById("output");

    button.addEventListener("click", async function () {
        let textValue = input.value;
        let delayValue = parseInt(delayInput.value);

        if (isNaN(delayValue) || delayValue < 0) {
            output.innerHTML = "Please enter a valid delay time in milliseconds.";
            return;
        }

        output.innerHTML = "";

        const promise = (input, val) => {
            return new Promise((resolve) => {
                setTimeout(() => resolve(input), val);
            });
        };

        let result = await promise(textValue, delayValue);
        output.innerHTML = result;
    });
});
