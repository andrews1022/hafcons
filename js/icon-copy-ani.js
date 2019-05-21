$(document).ready(function () {

    // CDN button animation + CDN link copy to clipboard
    $('.jq-para-cdn-btn').click(function(){
        $('.jq-para-cdn-btn').toggleClass('animate bounceIn');
        var cdnBtn = new ClipboardJS('.jq-para-cdn-btn');
    })

});