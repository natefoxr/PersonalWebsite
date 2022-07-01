
const development = false
if(development == true) {
    // local server
    $(document).ready(function() {
        $('.changelink-a1').replaceWith('<a class="nav-link text-light fs-4 px-3 changelink-a1" href="./content/about.html">About Me</a>')
        $('.changelink-m1').replaceWith('<a class="nav-link text-light fs-4 px-3 changelink-m1" href="./content/myCode.html">My Code</a>')
        $('.changelink-r1').replaceWith('<a class="nav-link text-light fs-4 px-3 changelink-r1" href="./content/resume.html">Resume</a>')
        $('.changelink-a').replaceWith('<a class="nav-link text-light fs-4 px-3 changelink-a" href="./about.html">About Me</a>')
        $('.changelink-m').replaceWith('<a class="nav-link text-light fs-4 px-3 changelink-m" href="./myCode.html">My Code</a>')
        $('.changelink-r').replaceWith('<a class="nav-link text-light fs-4 px-3 changelink-r" href="./resume.html">Resume</a>')
    })
}

    
