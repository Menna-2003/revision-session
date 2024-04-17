let ColorsList = document.querySelectorAll(".togglingButtons div");
let icons = document.querySelectorAll(".icons i");
let right = document.getElementsByClassName("right")[0];
let card = document.getElementsByClassName("card")[0];

if (window.localStorage.getItem("color")) {
    // 1) add color
    right.style.backgroundColor = window.localStorage.getItem("color");
    card.style.borderColor = window.localStorage.getItem("color");
    icons.forEach((icon) => {
        icon.style.color = window.localStorage.getItem("color");
    });

    // 2)remove active class from all colors
    ColorsList.forEach((color) => {
        color.classList.remove("active");
    });

    // 3)add active class to current color
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}

ColorsList.forEach((color) => {
    color.addEventListener("click", (e) => {
        //remove active class from all colors
        ColorsList.forEach((c) => {
            c.classList.remove("active");
        });

        //add active class to current element
        color.classList.add("active");

        //add current color to local storage
        window.localStorage.setItem("color", color.dataset.color);

        // change div background color
        right.style.backgroundColor = color.dataset.color;
        card.style.borderColor = color.dataset.color;
        icons.forEach((icon) => {
            icon.style.color = color.dataset.color;
        });
    });
});
