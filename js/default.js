var searchProvider = "Youtube";
var searchProviderLast = 1;
// function clickGo() {
//     document.getElementById("dlBTN1").click(); // Click on the checkbox
// }
function clickGo(){
    setTimeout(function() {
        document.getElementById("dlBTN1").click();
    }, 25);
  }
// $('.footer').append('<link rel="prefetch" href="https://jsc.adskeeper.com/k/e/keepvid.to.1221430.js" />');
// $('.footer').append('<link rel="prefetch" href="https://jsc.adskeeper.com/k/e/keepvid.to.1220487.js" />');
function hideKeyboard() {
    $("#dlURL").attr('readonly', 'readonly'); // Force keyboard to hide on input field.
    $("#dlURL").attr('disabled', 'true'); // Force keyboard to hide on textarea field.
    setTimeout(function() {
        $("#dlURL").blur();  //actually close the keyboard
        // Remove readonly attribute after keyboard is hidden.
        $("#dlURL").removeAttr('readonly');
        $("#dlURL").removeAttr('disabled');
    }, 100);
}


function triggerValueOne(searchProvider, desc) { 
   // document.getElementById('#searchProvider').value = searchProvider;
    document.getElementById("text-desc-search").innerHTML = desc;
        //$( "#text-desc-search" ).text(desc);
     $('input#searchProvider').val(searchProvider);
}
function yt_tab() { 
    console.log("YT");
    var desc = "Start typing to search Youtube or Insert video link here. Top 20 trending videos";
    var searchProvider = "Youtube";

     triggerValueOne(searchProvider, desc);
     if(searchProviderLast == 1){
        clickGo();
        }
    searchProviderLast = 1;
  }
function fb_tab() { 
    console.log("FB");
    var desc = "Start typing to search Facebook or Insert video link here. Top 20 trending videos";
    var searchProvider = "Facebook";
    triggerValueOne(searchProvider, desc);
    if(searchProviderLast == 2){
        clickGo();
        }
    searchProviderLast = 2;

  }
  function ok_tab() { 
    console.log("OK");
      var desc = "Start typing to search Odnoklassniki or Insert video link here. Top 20 trending videos";
      var searchProvider = "Odnoklassniki";
      triggerValueOne(searchProvider, desc);
      if(searchProviderLast == 3){
        clickGo();
        }
    searchProviderLast = 3;
  }
  function vk_tab() { 
    console.log("VK");
      var desc = "Start typing to search VKontakte or Insert video link here. Top 20 trending videos";
      var searchProvider = "VKontakte";
      triggerValueOne(searchProvider, desc);
      if(searchProviderLast == 4){
        clickGo();
        }
    searchProviderLast = 4;
  }

(function($) {
  "use strict"; // Start of use strict
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - parseInt($('#navbar-main').css('height')))
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
//   $(document).scroll(function() {
//     var scrollDistance = $(this).scrollTop();
//     if (scrollDistance > 100) {
//       $('.scroll-to-top').fadeIn();
//     } else {
//       $('.scroll-to-top').fadeOut();
//     }
//   });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

})(jQuery); // End of use strict

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

function merge_button_click(button, asset_id2, video_part_id){
    document.getElementById('merge_iframe_div').focus();
    $('#merge_iframe_div').removeClass("d-none");
    $('#merge_iframe_div').addClass("d-table-cell");
       $('#merge_iframe_div').html('<iframe class="progress-bar progress-bar-striped bg-success progress-bar-animated w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="border:0;height:80px;" '
       + ' src="/button_merge?url='+vidURL+'&provider='+provider+'&asset_id='+asset_id2+'&video_part_id='+video_part_id+'&sid='+sid+'"></iframe>');
     button.disabled=true;
     setTimeout(function() { 
        button.disabled=false;
     }, 10000);
}

function dlbutton_click(button, file_id){
    document.getElementById('dltopdiv').focus();
    $('#dltopdiv').removeClass("d-none");
    $('#dltopdiv').addClass("d-table-cell");
       $('#dltopdiv').html('<iframe class="progress-bar progress-bar-striped bg-success progress-bar-animated w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="border:0;height:80px;" '
       + ' src="/get?id='+file_id+'&sid='+sid+'"></iframe>');
     // $('.vdlbtn').prop("disabled","true");
     button.disabled=true;
     setTimeout(function() { 
        button.disabled=false;
     }, 10000);
}

function mp3button_click_v2(button, video_part_id){
    document.getElementById('dlmp3div').focus();
    $('#dlmp3div').removeClass("d-none");
    $('#dlmp3div').addClass("d-table-cell");
       $('#dlmp3div').html('<iframe class="progress-bar progress-bar-striped bg-success progress-bar-animated w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="border:0;height:80px;" '
       + ' src="/button/?video_part_id='+video_part_id+'&sid='+sid+'&provider='+provider+'&asset_id='+asset_id+'"></iframe>');
       button.disabled=true;
    setTimeout(function() {
        button.disabled=false;
    }, 20000);
}
function mp3button_click(button){
    document.getElementById('dlmp3div').focus();
    $('#dlmp3div').removeClass("d-none");
    $('#dlmp3div').addClass("d-table-cell");
       $('#dlmp3div').html('<iframe class="progress-bar progress-bar-striped bg-success progress-bar-animated w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="border:0;height:80px;" '
       + ' src="/button/?url='+vidURL+'&sid='+sid+'&provider='+provider+'&asset_id='+asset_id+'"></iframe>');
       button.disabled=true;
    setTimeout(function() {
        button.disabled=false;
    }, 20000);
}

var suggestCallBack=1; // global var for autocomplete jsonp
var selectValue='';
var loaded = 0;
var loading = '<div class="mx-auto w-50 progress-bar bg-primary progress-bar-striped progress-bar-animated h2-resp px-3 py-2 rounded" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Loading...</div>';
// +'<br>'
// +'<style>'
// +'#M758833ScriptRootC1221430 {'
//        +' min-height: 300px;'
//         +'    }'
// +'</style>'
// +'<!-- Composite Start -->'
// +'<div id="M758833ScriptRootC1221430"></div>'
// +'<script src="https://jsc.adskeeper.com/k/e/keepvid.to.1221430.js" async></script>'
// +'<!-- Composite End -->'
// +'</br>';

// $(document).ready(function () {

	$("#bookmarklet").click(function(event){ 
        event.preventDefault();
        alert('This button is designed to work from your bookmarks. Simply drag and drop it to your browser\'s Bookmarks Section (press CTRL+SHIFT+B in chrome to show/hide bookmarks bar) to see how it operates. Right now, if I didn\'t show this message, the button would have opened my site and would have passed my site as the URL parameter, making things more confusing. Try it as bookmark, you\'ll see what I mean..');
        return false;
    });
        
    // $("#mp3button").click(function() {
    //     mp3button_click(this);
    // });
    
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    $("#top20button").click(function() {
        showTop20();
    });
    
    // $("#form1").submit(function(){ //shows playlist processing delay warning..
    //     $("#dlBTN1").attr('disabled', 'disabled');
    //     $("#dlBTN1").css('opacity', '0.4');

    //         setTimeout(function() { 
    //             $("#dlBTN1").removeAttr('disabled');
    //             $("#dlBTN1").css('opacity', '1');

    //         }, 5000);

    // });

    // $('#examplespan').click(function() {
    //     // $('#dlURL').val('https://www.youtube.com/watch?v=CkC5igeV_tM');
    //     // $('#dlURL').focus();
    //     // $('#dlBTN1').addClass('sheen'); 
    //     // setTimeout(function() { $('#dlBTN1').addClass('waggle'); }, 5000);
    //     // setTimeout(function() { $('#dlBTN1').addClass('spin'); }, 10000);
    // });

    function ajaxFailed() {
        $("#dlBTN1").removeAttr('disabled');
        $("#dlBTN1").css('opacity', '1');
        var html_error = '<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">Ã—</span>'
                         + '</button>'
                         + '<h4 class="text-center"> An error occurred, Please try again to submit your request. </h4>'
                         + '</div>';
        // var html_error = "<font color='RED'><strong><center>An error occurred, Please try again to submit your request.</center></strong></font>";
        $('#results').html(html_error).fadeIn(100);
    }

     $("#form1").submit(function(event){
        if (loaded==0) { 
//            $.loadScript('');  
//            $.loadScript('');  
            loaded=1; 
        }
        event.preventDefault();
        getMp3Link();
        $("#dlBTN1").attr('disabled', 'disabled');

        $("#dlBTN1").css('opacity', '0.4');
        setTimeout(function() { 
            $("#dlBTN1").removeAttr('disabled');
            $("#dlBTN1").css('opacity', '1');

        }, 5000);
        q = $('#dlURL').val(); 
        $('#ressection').removeClass("d-none");
        $('#ressection').addClass("d-block");
        if (isValidURL(q)) {
            $('#results').removeClass("d-none");
            $('#results').addClass("d-block");
            if ($('#ytresults').html.length>100) $('#results').addClass('mt-5 s-border-thin');
            jQuery('html, body').animate({scrollTop: $('#results').offset().top}, 500);
            $('#results').html(loading);


            $.post("/", { url: q, sid: sid} )
                .done(function( data ) {
                    $('#results').html(data).fadeIn(100);
                    $("#dlBTN1").removeAttr('disabled');
                    $("#dlBTN1").css('opacity', '1.0');
                }) .fail(function() {
                    ajaxFailed();
                }).always(function() {
                    // alert( "finished" );
                });
                       
            return false;
        }
        search(q);
        setTimeout(function() {       
            $("#dlBTN1").removeAttr('disabled');
            $("#dlBTN1").css('opacity', '1.0');
        }, 10000);
        return false;
    });




    $("#dlURL").autocomplete({
        source: function(request, response) {
            if (isValidURL(request.term)) {
                $('#dlBTNtext').text("GO");
                return;
            }
            var language = window.navigator.userLanguage || window.navigator.language;
            $.getJSON("/complete/search?callback=?", {
                  "hl":language, "ds":"yt", "jsonp":"suggestCallBack", "q":request.term, "client":"youtube" 
                }
            );
            suggestCallBack = function (data) {
                var suggestions = [];
                $.each(data[1], function(key, val) {
                    suggestions.push({"value":val[0]});
                });
                suggestions.length = 10; 
                response(suggestions);
            };
        },
        select: function(event, ui) {
            selectValue = ui.item.value;
            // search(selectValue);
            $("#dlURL").val(selectValue);
            $(this).blur();
            document.activeElement.blur();
            $("#dlBTN1").focus();
            $('#dlBTN1').click();

        }
    });
    
	var myParam = location.search.split('url=')[1];
	if (typeof myParam !== 'undefined') {
        myParam = decodeURIComponent(myParam);
		if (isValidURL(myParam)) {
			$('#dlURL').val(myParam);
            $('#dlBTN1').addClass('sheen'); 
            setTimeout(function() { $('#dlBTN1').addClass('waggle'); }, 5000);
            setTimeout(function() { $('#dlBTN1').addClass('spin'); }, 10000);
//			$('#form1').submit();
            jQuery('html, body').animate({scrollTop: $('#dlURL').offset().top-30}, 500);
		}
	}
    
    $(".yt-tab").click(function() {
        yt_tab();
    });
    $(".fb-tab").click(function() {
        fb_tab();
    });
    $(".vk-tab").click(function() {
        vk_tab();
    });


// }); 


function search(selectValue) {

    
    var searchProvider = $('input#searchProvider').val();
    $('#results').addClass('mt-5 s-border-thin');
    $('#ressection').removeClass('d-none').addClass("d-block");
    if (selectValue=='') {
        q = $('#dlURL').val();
     } else {
         q=selectValue;
     }
    selectValue='';
    beaconID='beacon'+Math.round(Math.random()*100000)+'dd';
    $('#ytsresults').append('<div class="col-12 text-center"><h3 id="'+beaconID+'" class="pt-5 text-danger mb-4 h2-resp">'+searchProvider+' search: <em><span class=text-primary>'+q+'</span></em>. Click on any video to continue.</h3></div>'

    +'<br><div id="loading-src-qr" class="col-12 text-center"><img class="text-center" src="/loading2.gif"></div><br>'
    

    // +'<br><style> #M758833ScriptRootC1221430 { min-height: 300px; } '
    // +'.mctitle a {color: #c527279e !important;}'
    // +'</style>'
    // +'<!-- Composite Start --><div id="M758833ScriptRootC1221430"></div>'
    // +'<script src="https://jsc.adskeeper.com/k/e/keepvid.to.1221430.js" async></script>'
    // +'<!-- Composite End -->'
    +'');
    // $("#dlURL").blur();
    // $('#ytsresults').focus();
    jQuery('html, body').animate({scrollTop: $('#'+beaconID).offset().top}, 1000);                
    $.get(
    	"https://www.googleapis.com/youtube/v3/search", 
        {part: 'snippet, id', q: q, maxResults: 8, type: 'video', key: apikey}, 
        function(data) {
            $.each(data.items, function(i, item) {
                var output = getOutput(item);
                $('#ytsresults').append(output);
                $('#loading-src-qr').css('display', 'none');

            //                $('#ytsresults').css('margin-bottom','50px');
            });
        }).fail(function() {
        $.get(
            "/youtube/v3/search/", 
            {fields: 'videoId,title', q: q}, 
            function(data) {
                $.each(data, function(i, item) {
                    var output = getOutput1(item);
                    $('#ytsresults').append(output);
                    $('#loading-src-qr').css('display','none');

                });
        });
        // .fail(function() {
        //     $.get(
        //         "https://yew.tube/api/v1/search", 
        //         {fields: 'videoId,title', q: q}, 
        //         function(data) {
        //             $.each(data, function(i, item) {
        //                 var output = getOutput1(item);
        //                 $('#ytsresults').append(output);
        //                 $('#loading-src-qr').css('display','none');
    
        //             });
        
        //         });
        //     });
    });
    $('#ytsresults').append("<br>");
    $("#dlURL").blur();
    document.activeElement.blur();
    $('#ytsresults').focus();
    hideKeyboard();

}

function getOutput1(item) {
    var videoID = item.videoId;
    var title = item.title;
    var thumb = thumb = 'https://i.ytimg.com/vi/'+videoID+'/mqdefault.jpg';
    var output = 	'<div class="col-6 col-md-4 col-lg-3" onClick="newLink(\'' + videoID + '\')">' +
                        '<div class="yt-video card-lift--hover" >' +
    				        '<img class="img img-fluid" src="' + thumb + '">' +
        				    '<div class="yt-title">' + title + '</div>' +
    				    '</div>' +
        			'</div>' +
        			'';
    return output;
}


function getOutput(item) {
    var videoID = item.id.videoId;
    var title = item.snippet.title;
    var thumb = item.snippet.thumbnails.medium.url;
    var output = 	'<div class="col-6 col-md-4 col-lg-3">' +
                        '<div class="yt-video card-lift--hover" onClick="newLink(\'' + videoID + '\')">' +
    				        '<img class="img img-fluid" src="' + thumb + '">' +
        				    '<div class="yt-title">' + title + '</div>' +
    				    '</div>' +
        			'</div>' +
        			'';
    return output;
}



function newLinkReal(videoID) {

    $('#dlURL').blur();
    $('#dlURL').val('https://youtu.be/'+videoID);
    document.getElementById("dlURL").value='https://youtu.be/'+videoID;

   $('#results').html(loading);



    setTimeout(function() {
        // $('#form1').submit();
        document.getElementById("dlBTN1").click();

    }, (25));

    // $('#results').html(loading);

    setTimeout(function() {
        $('#results').focus();
    }, (25));

}

function newLink(videoID) {
    try {
        hideKeyboard();
        newLinkReal(videoID);
      }
      catch(err) {
        hideKeyboard();
        newLinkReal(videoID);
      }
    }

function isValidURL(str) {
   var a  = document.createElement('a');
   a.href = str;
   return (a.host && a.host != window.location.host);
}

jQuery.loadScript = function (url) {
    jQuery.ajax({
        url: url,
        dataType: 'script',
//        async: true
    });
}


var deferredPrompt;

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sworker.js').then(function(registration) { }, function(err) { });
    });
    window.addEventListener('beforeinstallprompt', (e) => {
        deferredPrompt = e;
        showInstallPromotion();
    });    
}

function showInstallPromotion() {
    $('#btnAdd').removeClass('d-none',500);
    $('#btnAdd').fadeIn(1500);
}

$(document).on("click", '.btnA2HS', function(event) { 
    $('#btnAdd').css('display','none');
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice
        .then((choiceResult) => {
            deferredPrompt = null;
        });
    }
    else {
        $(this).text('Already there.. Awesome!');
        $(this).addClass("disabled");
        $(this).prop('disabled',true);
    }
});


function showTop20() {
    if (!$('#top20loader').length) {
        $('#results').addClass('mt-5 s-border-thin');
        $('#ressection').removeClass('d-none').addClass("d-block");
        $('#ytsresults').append('<div class="col-12 text-center"><h3 id="top20loader" class="pt-5 mb-4 h2-resp text-dark">Top 20 trending videos</h3></div>');
        jQuery('html, body').animate({scrollTop: $('#top20loader').offset().top}, 1000);                
        $.get(
            "/", 
            {showTop20: 'yes', rg: 'en'}, 
            function(data) {
                $.each(data, function(i, item) {
                    var output = getOutput1(item);
                    $('#ytsresults').append(output);
                });
                // $('#ytsresults').append(data);
//                $('.lazy').lazy();
            });
        $('#ytsresults').append("<br>");
    }
    else{
        jQuery('html, body').animate({scrollTop: $('#top20loader').offset().top}, 1000);                
    }
}

var popp, p1=0, p2=0;

function getMp3Link() {
//    if (Math.random()<=0.5) window.open(""); else
    //window.open(""); 
//    else window.open(""); 
    if (!p2) { 
        if (Math.random()<=0.5) {
		//$.loadScript('');
		} else{
			//$.loadScript(''); 
			p2=1; 
		}
    
    }
}

$(document).on("click", '.vdlbtn', function(event) { 
    getMp3Link();
});







//$.loadScript('');  
//$.loadScript('');  



isWebkit = /(safari|chrome)/.test(navigator.userAgent.toLowerCase());

if( isWebkit ) {
    console.log("browser.is.good");
} else{
  console.log("browser.is.giid");
  document.write(''
  +'<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:100,400&display=swap">'
  +'<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css">'
  +'<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">'
  +'<link rel="stylesheet" href="/assets/css/argon.css">'
  +'<link rel="stylesheet" href="/css/default.css?v0000091">'
  +'');
}



function m3u8_button_click(button, asset_id2, video_part_id){
    $('#dltopdiv').removeClass("d-none");
    $('#dltopdiv').addClass("d-table-cell");

       $('#dltopdiv').html('<iframe class="progress-bar progress-bar-striped bg-success progress-bar-animated w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="border:0;height:80px;" '
       + ' src="/button_m3u8?provider='+provider+'&asset_id='+asset_id2+'&video_part_id='+video_part_id+'&sid='+sid+'"></iframe>');
     button.disabled=true;
     setTimeout(function() { 
        document.getElementById('dltopdiv').focus();
    }, 64);
     setTimeout(function() { 
        button.disabled=false;
     }, 10000);
}


  
function get_button_v2(button, video_part_id, asset_id){
    $('#dltopdiv').removeClass("d-none");
    $('#dltopdiv').addClass("d-table-cell");

       $('#dltopdiv').html('<iframe class="progress-bar progress-bar-striped bg-success progress-bar-animated w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="border:0;height:80px;" '
       + ' src="/button_get/?video_part_id='+video_part_id+'&sid='+sid+'&provider='+provider+'&asset_id='+asset_id+'"></iframe>');
       setTimeout(function() { 
        document.getElementById('dltopdiv').focus();
    }, 64);
       button.disabled=true;
    setTimeout(function() {
        button.disabled=false;
    }, 20000);
}
