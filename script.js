function $(selector)  { return document.querySelector(selector);    }
function $$(selector) { return document.querySelectorAll(selector); }
function htmlify(html) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;
    return wrapper.firstChild;
}

const UNAME = "nahom";
const PWORD = "ebssa";

(function() {

    window.addEventListener("DOMContentLoaded", function(event) {

        const bodyOriginalStyle = document.body.style
        document.body.style = "overflow: hidden"

        const $modalLogin = htmlify(`<div class="modal --fullscreen"><h1>Login</h1><input type="text" placeholder="Username" /><input type="Password" placeholder="Password" /><button>Log in</button></div>`)
        const $txtUsername = $modalLogin.querySelector(`input[type="text"]`)
        const $txtPassword = $modalLogin.querySelector(`input[type="password"]`)
        const $btnLogin    = $modalLogin.querySelector("button")

        $btnLogin.addEventListener("click", function(event) {
            // console.log($txtUsername.value, $txtPassword.value)
            if ($txtUsername.value == `${PWORD}` && $txtPassword.value == `${UNAME}`)
            {
                $modalLogin.classList.add("--anim-disapear")
                document.body.style = bodyOriginalStyle
            }
        })

        document.body.appendChild($modalLogin)

    })


})()