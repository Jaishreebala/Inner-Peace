var menuOpen = false;
var showEntry = false;
var num = 1;


$(".footer .custon-button").click(function () {
    if ((this.innerText) == 'Next') {
        num++;
    }
    if ((this.innerText) == 'Back') {
        num--;
    }
    console.log(num)
    loadPage(num);
})
function loadPage(num) {
    $("body > div").hide();
    $(`.section-${num}`).css("display", "flex")
}
$(".menu-content li").click(function () {
    var sectionNum = $(this).index() + 1;
    menuOpen = false;
    $('.menu').removeClass('open');
    $('body').css(
        'background-color', '#ffffff'
    )
    num = sectionNum;
    if (sectionNum >= 1 && sectionNum <= 4) {
        $(`.section-${sectionNum}`).css("display", "flex")
    }
    $("header").css('background', 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)')
    $(".menu-content").hide();

})
$(".menu").click(function () {
    if (menuOpen == false) {
        menuOpen = true;
        $('.menu').addClass('open');
        $('body').css(
            'background-color', '#E0E8EB'
        )
        $("body > div").hide();
        $("header").css('background', 'transparent')
        $(".menu-content").css('display', 'flex');
    }
    else {
        menuOpen = false;
        $('.menu').removeClass('open');
        $('body').css(
            'background-color', '#ffffff'
        )
        $(`.section-${num}`).css("display", "flex")
        $("header").css('background', 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)')
        $(".menu-content").hide();

    }
})


$(".add-entry").click(function () {
    if (showEntry == false) {
        showEntry = true;
        $(".text-content").show();
        $(".add-entry").hide();
    }
    // else {
    //     showEntry = false;
    //     $(".text-content").hide();
    // }
})





// script for the styling of select
var x,
    i,
    j,
    selElmnt,
    a,
    b,
    c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) { /* For each option in the original select element,
create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) { /* When an item is clicked, update the original select box,
and the selected item: */
            var y,
                i,
                k,
                s,
                h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) { /* When the select box is clicked, close any other select boxes,
and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) { /* A function that will close all select boxes in the document,
except the current select box: */
    var x,
        y,
        i,
        arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
// end of sccript
