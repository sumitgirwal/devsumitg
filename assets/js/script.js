console.log("Its working");

let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("Option clicked:", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "assets/css/styles.css";
  }

  if (mode == "blue") {
    document.getElementById("theme-style").href = "assets/css/blue.css";
  }

  if (mode == "green") {
    document.getElementById("theme-style").href = "assets/css/green.css";
  }

  if (mode == "purple") {
    document.getElementById("theme-style").href = "assets/css/purple.css";
  }

  localStorage.setItem("theme", mode);
}

// function darkMode() {
	 
//   let theme = document.getElementById("dark-mode").getAttribute("data-mode");
  
//   if (theme === "light") {
//     document.getElementById("dark-mode").setAttribute("data-mode", "blue");
// 	document.getElementById("dark-mode").innerHTML= '<i class="fa-solid fa-moon"> </i>';
//     setTheme("blue");
// 	localStorage.setItem("theme", "blue");
//   } else {
//     document.getElementById("dark-mode").setAttribute("data-mode", "light");
// 	document.getElementById("dark-mode").innerHTML= '<i class="fa-solid fa-sun-bright"> </i>';
//     setTheme("light");
// 	localStorage.setItem("theme", "light");
//   }

//   // document.getElementById('dark-mode').setAttribute('data-mode', 'light');
// }
