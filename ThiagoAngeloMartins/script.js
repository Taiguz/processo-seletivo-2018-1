$navInfo = $('#navInfo');
$navBio = $('#navBio');
$navHobbies = $('#navHobbies');
$navAnimes = $('#navAnimes');
$navJogos = $('#navJogos');
$navFilmes = $('#navFilmes');
$contentSub = $('#contentSub');
$content = $('#content');
$pageDelete = $('#content');

$pageInfo = $('#pageInfo');
$pageBio = $('#pageBio');
$pageHobbies = $('#pageHobbies');
$pageAnimes = $('#pageAnimes');
$pageJogos = $('#pageJogos');
$pageFilmes = $('#pageFilmes');

navItens = [$navInfo, $navBio, $navHobbies, $navAnimes, $navJogos, $navFilmes];
pageItens = [$pageInfo, $pageBio, $pageHobbies, $pageAnimes, $pageJogos, $pageFilmes];


// no comeco 
var pageAtual = 0;

pageWidth = $contentSub.width() / 3;

$content.scrollLeft(pageWidth);

for (var i = 0; i < 3; i++) {

    $('.subPage').each(function(indice) {

        if (indice == i) {

            $(this).html(pageItens[i].html());

        }



    });

}


//
function MudarAtivo(elemento) {


    $('.navActive').removeClass('navActive');
    elemento.addClass('navActive');

}

function Navigate(elemento) {

    pageWidth = $contentSub.width() / 3;
    meio = pageWidth;
    final = pageWidth * 2;
    comeco = 0;
    console.log('tamanho: ' + pageWidth * 3);
    var ind = -1;

    for (var i = 0; i < navItens.length; i++) {

        if (elemento == navItens[i]) {

            ind = i;

        }
    }

    var value = pageAtual - ind;



    if (value < 0) {

        pageAtual = ind;

        $('.subPage').each(function(indice) {

            if (indice == 2) {

                $(this).html(pageItens[ind].html());

            }


        });

        $content.animate({ scrollLeft: final }, 230, function() {

            $content.scrollLeft(meio);
            $('.subPage').each(function(indice) {

                if (indice == 1) {
                    $pageDelete = $(this);
                }

            });

            var $tempPage = $pageDelete.detach();

            $contentSub.append($tempPage);


        });




    } else if (value > 0) {


        pageAtual = ind;

        $('.subPage').each(function(indice) {

            if (indice == 0) {

                $(this).html(pageItens[ind].html());

            }


        });

        $content.animate({ scrollLeft: comeco }, 230, function() {



            $content.scrollLeft(meio);

            $('.subPage').each(function(indice) {

                if (indice == 1) {
                    $pageDelete = $(this);
                }

            });

            var $tempPage = $pageDelete.detach();

            $contentSub.prepend($tempPage);



        });





    }


}

$navInfo.on("click", function() {
    MudarAtivo($navInfo);
    Navigate($navInfo, pageAtual);

});
$navBio.on("click", function() {
    MudarAtivo($navBio);
    Navigate($navBio, pageAtual);

});
$navHobbies.on("click", function() {
    MudarAtivo($navHobbies);
    Navigate($navHobbies, pageAtual);
});
$navAnimes.on("click", function() {
    MudarAtivo($navAnimes);
    Navigate($navAnimes, pageAtual);
});
$navJogos.on("click", function() {
    MudarAtivo($navJogos);
    Navigate($navJogos, pageAtual);
});
$navFilmes.on("click", function() {
    MudarAtivo($navFilmes);
    Navigate($navFilmes, pageAtual);
});

$content.on("scroll", function() {

    console.log($content.scrollLeft());

});