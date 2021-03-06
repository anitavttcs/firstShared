function load_fucntion() {
  let root_div = document.getElementById("root");

  root_div.insertAdjacentHTML("beforeend", gallery_html());

  // root_div.classList.add("root_open"); // beállítja a flexbox-ot középre

  gallery_div = document.querySelector(".gallery");

  // szürke pont
  gallery_div.insertAdjacentHTML(
    "afterbegin",
    `
		<div id="grey_circle">
			<svg height="100" width="100">
  		<circle cx="50" cy="50" r="40" stroke="black" stroke-width="0" fill="grey" />
			</svg>
		</div>
	`
  );

  document.getElementById("grey_circle").classList.add("start_circle");

  let img_array = [
    `<img src="./images/6.e96dcfff.jpg" id="img_1" class="open_img" alt="">`,
    `<img src="./images/7.2d66e3ed.jpg" id="img_2" class="open_img" alt="">`,
    `<img src="./images/8.f4323fe0.jpg" id="img_3" class="open_img" alt="">`,
    `<img src="./images/9.c9233dac.jpg" id="img_4" class="open_img" alt="">`,
    `<img src="./images/10.5e22fdc3.jpg" id="img_5" class="open_img" alt="">`,
    `<img src="./images/11.a56b8aeb.jpg" id="img_6" class="open_img" alt="">`,
    `<img src="./images/12.b5a57fd7.jpg" id="img_7" class="open_img" alt="">`,
    `<img src="./images/13.3858c623.jpg" id="img_8" class="open_img" alt="">`,
    `<img src="./images/14.c732d2b3.jpg" id="img_9" class="open_img" alt="">`,
  ];

  let img_caption_array = [
    `<span>Questrial</span>`,
    `<span>Coriolis</span>`,
    `<span>Eclipse</span>`,
    `<span>Horizon</span>`,
    `<span>Gibbous</span>`,
    `<span>Interstellar</span>`,
    `<span>Neutron</span>`,
    `<span>Orbital</span>`,
    `<span>Supernova</span>`,
  ];

  for (let index = 0; index < img_array.length; index++) {
    setTimeout(function () {
      document.getElementById("grey_circle").style.display = "none"; //szürke kör eltűntetése
      let random_1 = Math.floor(Math.random() * 15) - 7; // dőlésszög-véletlen
      let random_2 = (Math.floor(Math.random() * 10) - 5) / 100 + 0.5; // dőlésszög-véletlen
      console.log(random_2);
      gallery_div.insertAdjacentHTML("afterbegin", img_array[index]);

      let counter = index + 1; //mert az elnevezések 1-el kezdődnek
      let element_temp = document.getElementById("img_" + counter);

      element_temp.style.transform = `
        rotate( ${random_1}deg) scale(${random_2})
        `;

      gallery_div.style.transform = `
        translateY(${index * -5}px)
        `;
        
      /*  "rotate(" +
        random_1 +
        "deg) scale(" +
        random_2 +
        ") translateY(" +
        index * -10 +
        "px)"; */
      element_temp.style.zIndex = index;

      if (index === img_array.length - 1) {
        // az utolsó elem után, jelenjen meg a tartalom
        setTimeout(function () {
          root_div.insertAdjacentHTML("afterbegin", content_html());

          setTimeout(function () {
            let content_div = root_div.querySelector("#content");
            content_div.classList.add("move");
          }, 100);

          setTimeout(function () {
            let p_div = root_div.querySelector("#content p");
            p_div.classList.add("move");
          }, 100);
        }, 1000);
      }
    
      setTimeout(function () {
        gallery_div.classList.add("explode");

        let img_element = document.getElementById("img_" + counter);
        img_element.classList.add("explode");

        img_element.outerHTML = "<div>" + img_element.outerHTML + "</div>";

        img_element = document.getElementById("img_" + counter);
        img_element.parentElement.classList.add("caption");
        img_element.parentElement.insertAdjacentHTML(
          "afterbegin",
          img_caption_array[counter - 1]
        );  
      }, 1100);
    }, 100 * index + 1500);
  }
} // end

window.addEventListener("load", load_fucntion);

//settimeout-gyakorlás
/* 
for (let index = 0; index < 20; index++) {	
		setTimeout(function(){
		console.log(index)
	}, 1000 * index);

} 
*/
