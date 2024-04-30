function addDiv() {

    var maxDivs = 5;

    var mainDiv = document.getElementById("mainDiv");

    var existingDivs = mainDiv.getElementsByClassName("sub-main-div");

    if (existingDivs.length < maxDivs) {

        var newDiv = document.createElement("div");
        newDiv.className = "sub-main-div";

        newDiv.innerHTML = `
        <div class="sub-sub-main-div">
            <div class="header">
                <input class="main-input" type="text" placeholder="Enter course name">
            </div>
            <hr>
            <div class="content">
                <input class="courses-inputs" type="text" placeholder="Course name">
                <input class="courses-inputs" type="text" placeholder="Course name">
                <input class="courses-inputs" type="text" placeholder="Course name">
                <input class="courses-inputs" type="text" placeholder="Course name">
                <input class="courses-inputs" type="text" placeholder="Course name">
            </div>
        </div>
        <div>
            <button class="simulation-button">Simulation</button>
        </div>
        `;

        mainDiv.appendChild(newDiv);
    } else {
        alert("Maximum number of courses reached!");
    }
}