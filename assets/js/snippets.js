// Code snippet to get current HTML page name and display as title in the title tag
const path = window.location.pathname;

let pageName = path.split("/").pop().replace(".html", "");

if (pageName === ""  || pageName === "index") {
    pageName = "EHIST";
} else {
    pageName = pageName.replace(/-|_/g, "");

    pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
}

const brandName = "Start Your Learning";
document.title = `${pageName} | ${brandName}`;