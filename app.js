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
    $.get('https://api.github.com/users/natefoxr/repos', function(data) {
        data.forEach(element => {
            let description = element['description']
            if(description === null) {
                description = 'A project by FOXR'
            }
            let language = element['language']
            if(language === null) {
                language = 'N/A'
            }
            if(element['fork'] == false){
                $('.project-cards').append(
                    `<div class="col-md-6 col-xl-4">
                        <div class="card mx-md-4 my-2 bg-transparent">
                            <div class="card-body bg-transparent">
                                <h5 class="card-title text-capitalize fw-bold">${element['name']}</h5>
                                <p class="card-text">${description.substring(0,51)}...</p>
                                <p class="card-text">Created at ${element['created_at'].substring(0,10)}</p>
                                <p class="card-text">Last update ${element['updated_at'].substring(0,10)}</p>
                                <p class="card-text">Last push ${element['pushed_at'].substring(0,10)}</p>
                                <p class="card-text">Language: ${language}</p>
    
                                <a href="${element['html_url']}" target="_blank" class="btn btn-primary">Go to GitHub.com</a>
                            </div>
                        </div>
                    </div>`
                )
            }
      })
    })
})
