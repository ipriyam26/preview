let collection = document.getElementsByTagName('a');

// let isCommandPressed = false;
// document.addEventListener("keydown", function (event) {
//     if (event.metaKey) {
//         commandKey = true;
//     }
//     console.log("key up");
// });

// document.addEventListener("keyup", function (event) {
//     if (!event.metaKey) {
//         commandKey = false;
//     }
//     console.log("key up");
// });
let frame = document.createElement('iframe');
frame.classList.add('description');
frame.setAttribute("sandbox", "allow-same-origin");
document.body.appendChild(frame);
let loading = document.createElement("div");
loading.classList.add("loading");

for (let i = 0; i < 4; i++) {
    let loadingBar = document.createElement("div");
    loadingBar.classList.add("loading-bar");
    loading.appendChild(loadingBar);
}
frame.appendChild(loading);



for (let i = 0; i < collection.length; i += 1) {
    let item = collection[i];
    // if (!isCommandPressed) {
    //     continue;
    // }
    let head = item.getElementsByTagName('h3')[0];
    if (!head) {
        continue;
    }

    item.addEventListener("mouseover", function (e) {
        frame.style.display = 'flex';
        frame.src = 'https://proxyserver-c64q.onrender.com?url=' + item.href;
        frame.style.left = e.clientX + "px";
        frame.style.top = e.clientY + "px";
        frame.style.display = "block";
        frame.addEventListener("load", function () {
            loading.style.display = "none";
        });
    });
    frame.addEventListener("mouseover", function () {
        frame.style.display = "block";
    });
    frame.addEventListener("mouseout", function () {
        frame.src = ""
        frame.style.display = "none";
    });


}