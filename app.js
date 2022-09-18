$(document).ready(function() {
    if (typeof window.ethereum == 'undefined') {
        $('.eth-10').replaceWith('<button class="eth-5 rounded fw-bold border border-0 my-3 p-2"><a href="https://metamask.io/download/" target="_blank" class="text-decoration-none text-dark">Install Metamask</a></button>')
        $('.eth-5').replaceWith('<button class="eth-5 rounded fw-bold border border-0 my-3 p-2"><a href="https://metamask.io/download/" target="_blank" class="text-decoration-none text-dark">Install Metamask</a></button>')
    }      
    $.get('https://api.github.com/users/natefoxr/repos', function(data) {
        data.forEach(element => {
            let description = element['description'];
            if(description === null) {
                description = 'A project by FOXR';
            }
            let language = element['language']
            if(language === null) {
                language = 'N/A';
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
                                <div class="text-center">
                                    <a href="${element['html_url']}" target="_blank" class="btn btn-primary">Go to GitHub.com</a>
                                </div>
                            </div>
                        </div>
                    </div>`
                );
            }
        });
    });
    // $('.formsubmit').on('click', function() {
    //     const email = $('.emailinput').val();
    //     const message = $('.messageinput').val();
    //     $('.emailinput').val("")
    //     $('.messageinput').val("")
    //     console.log("Your response has been recorded.");
    //     console.log("Email: ", email);
    //     console.log("Message: ", message);
    // })
    $('.eth-5').on('click', function() {
        if (typeof window.ethereum !== 'undefined') {
            var Web3 = require('web3');
            var web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');
            ethereum.request({ method: 'eth_requestAccounts' });
            web3.eth.getAccounts()
                .then(e => {
                    let account=e[0]
                    $('.eth-text').text(`Connected with account ${account.substring(0,4)}...${account.substring(account.length - 4)}`)
            })
         }
        else{
            alert("Please install MetaMask to use this function!");
            console.log('MetaMask not installed!');
        }
    })
    $('.eth-10').on('click', function() {
        if (typeof window.ethereum !== 'undefined') {
            var Web3 = require('web3');
            var web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');
            ethereum.request({ method: 'eth_requestAccounts' });
            web3.eth.getAccounts()
                .then(e => {
                    let account=e[0]
                    $('.eth-text').text(`Connected with account ${account.substring(0,4)}...${account.substring(account.length - 4)}`)
            })
         }
        else{
            alert("Please install MetaMask to use this function!");
            console.log('MetaMask not installed!');
        }
    })
});
