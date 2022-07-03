$(document).ready(function() {
    const development = true
    if(development == true) {
        // local server
        $('.changelink-i1').replaceWith('<a class="nav-link text-light fs-4 px-3 hoveri changelink-i1" href="./index.html">Home</a>')
        $('.changelink-a1').replaceWith('<a class="nav-link text-light fs-4 px-3 hovera changelink-a1" href="./content/about.html">About Me</a>')
        $('.changelink-m1').replaceWith('<a class="nav-link text-light fs-4 px-3 hoverm changelink-m1" href="./content/myCode.html">My Code</a>')
        $('.changelink-r1').replaceWith('<a class="nav-link text-light fs-4 px-3 hoverr changelink-r1" href="./content/resume.html">Resume</a>')
        $('.changelink-i').replaceWith('<a class="nav-link text-light fs-4 px-3 hoveri changelink-i1" href="../index.html">Home</a>')
        $('.changelink-a').replaceWith('<a class="nav-link text-light fs-4 px-3 hovera changelink-a" href="./about.html">About Me</a>')
        $('.changelink-m').replaceWith('<a class="nav-link text-light fs-4 px-3 hoverm changelink-m" href="./myCode.html">My Code</a>')
        $('.changelink-r').replaceWith('<a class="nav-link text-light fs-4 px-3 hoverr changelink-r" href="./resume.html">Resume</a>')
    }
})
