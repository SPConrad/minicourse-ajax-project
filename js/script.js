
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    var $streetAdd = $('#street').val();
    var $cityAdd = $('#city').val();
    var concatAdd = $streetAdd + ", " + $cityAdd;

    var nytUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    nytUrl += '?' + $.param({'api-key': "ea708178954d4c4ab302f6d7e8c16d9b", 'q': $cityAdd});

    console.log(nytUrl);

    // load streetview

    concatAdd = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + concatAdd;

    var fullAppend = '<img class="bgimg" src="' + concatAdd +'">';

    // YOUR CODE GOES HERE!

    $body.append(fullAppend);

    $.ajax({
        dataType: "json",
        url: nytUrl, 
        method: 'GET',
    }).done(function(result) {
        console.log(result.response.docs[0]);
    }).fail(function(err){
        throw err;
    })


    return false;
};

$('#form-container').submit(loadData);
