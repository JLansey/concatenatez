$.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  }
});

function cats(beginAt, gif, video) {
	this.beginAt = beginAt;
	this.gif = gif;
	this.video = video;
}

function onYouTubePlayerReady(playerId) {
	$("#myytplayer").attr("style", "z-index: 1;");
	ytplayer = document.getElementById("myytplayer");
	ytplayer.addEventListener("onStateChange", "onytplayerStateChange");
	ytplayer.addEventListener("onError", "onytplayerError");
	ytplayer.setVolume(100);
	ytplayer.seekTo(theCats[rand].beginAt);
	ytplayer.playVideo();
}

function onytplayerStateChange(newState) {
	if (newState == -1) {
		if ($("#blank .almost").not("visible")) $("#blank .almost").fadeIn(300);
	}
	if (newState == 1 && typeof $("#kitty").attr("data-started") == "undefined") {
		$(".almost span").text("almost there!");
		$("#kitty").attr("data-started","true").fadeIn(300, function(){
			setTimeout(function(){
				$("#permalink").css({left: 0, top: $("#permalink").height() * -1});
				$("#footer").css({opacity: 0});
				$("#footer ul").css({display: "block"});
				$("#footer").css({top: $(window).height() + $("#footer").height(), left: $(window).width() - $("#footer").width() - 6});
				$("#permalink").animate({top: 7, opacity: 1});
				$("#socialmedia").fadeIn();
				$("#footer").animate({top: $(window).height() - $("#footer").height() - 30, opacity: 1});
			},700);
		});
	}
	if (newState == 0) window.location.href = "/";
}

function loadAnotherKitty() {
	swfobject.removeSWF("ytapiplayer");
	$("#ytapiplayer").remove();
	$('<div id="ytapiplayer"><img src="/fb-logo.png"></div>').insertAfter("#permalink");
	$("#blank strong").css({textDecoration: "none"});
	$("#blank strong:first").css({"text-decoration":"underline"});
	$(".almost span").text("couldn't buffer the song! trying another cat and another song…");
	$(".almost").fadeIn(300);
	setTimeout(function(){
		rand = Math.round(Math.random()*(theCats.length - 1));
		$("#kitty").data("video", theCats[rand].video).attr("src", theCats[rand].gif);
	},700);
}

function parseresults(data) {
	if ("error" in data) {
		loadAnotherKitty();
	} else {
		var title = data.title;
		$("#info").html('<br /><span><a class=\"youtube\" title=\"Link to audio source\">&nbsp;</a>' + data.data.title + " <a href=\"http://www.youtube.com/watch?v=" + data.data.id + "\" target=\"_blank\"><em>view on YouTube</em></a></span>").show();
		var params = { allowScriptAccess: "always" };
		var atts = { id: "myytplayer" };
		swfobject.embedSWF("http://www.youtube.com/v/" + data.data.id + "?enablejsapi=1&playerapiid=ytplayer&version=3",
		                      "ytapiplayer", "400", "400", "8", null, null, params, atts, swfoCallback);
	}
}

function onytplayerError(playerId) {
	loadAnotherKitty();
}

function getYouTubeInfo(video) {
	$.jsonp({
		url: "http://gdata.youtube.com/feeds/api/videos/" + video + "?v=2&alt=jsonc&callback=parseresults",
	});
}

function swfoCallback(data) {
}

var rand = '';
var theCats = [];
theCats.push(new cats('0','/images/running.gif', '6Vx4J_NtNPk')); //0 flashdance - maniac
theCats.push(new cats('0','/images/e9906e9a-3bd0-4b92-ae96-4fc7c524f98a.gif', 'ClrGrxQD8QA')); //1 lou rawls - you'll never find another love like mine
theCats.push(new cats('0','/images/dancingcat.gif', 'Txq736EVa80')); //2 tragic error - tanzen
theCats.push(new cats('0','/images/qkDqh_The_fuck_was_that-s285x214-29996-580.gif', 'Ji7nNsBz8no')); //3 don corleone / the godfather
theCats.push(new cats('0','/images/t4bwezAizi5vheyfzqgZo1Bjo1_400.gif', '9EcjWd-O4jI')); //4 technotronic - pump up the jam
theCats.push(new cats('0','/images/tumblr_lv4limplnH1qz787to1_400.gif', 'wfBYoAt7p1Y')); //5 autechre - clipper
theCats.push(new cats('0','/images/53.gif', 'nfwD05XA2YQ')); //6 autechre - gantz graf
theCats.push(new cats('0','/images/40.gif', 'bY-oMCmrvPM')); //7 mr. president - coco jambo
theCats.push(new cats('0','/images/35.gif', 'iPUmE-tne5U')); //8 katrina & the waves - walking on sunshine
theCats.push(new cats('0','/images/27.gif', 'EdBZeCtaaLY')); //9 run dmc - bounce
theCats.push(new cats('0','/images/2.gif', 'UC86yQAzaxg')); //10 ludacris - move bitch
theCats.push(new cats('0','/images/4d7cddd4544445ad1e9483d0d6b7dd86.gif', '0NSFOgw1PqQ')); //11 singin' in the rain - mint royale
theCats.push(new cats('0','/images/cat-tongue.gif', 'yunSRfnsVck')); //12 trolololololo
theCats.push(new cats('0','/images/catgifpage84.gif', 'Z0a8YCL9Kek')); //13 lil' louis - video clash
theCats.push(new cats('0','/images/11.gif', '0m4xDxRtH6k')); //14 acos coolkas -free flight (ichisan mix)
theCats.push(new cats('0','/images/tumblr_lk875maJ881qc72lz.gif', 'QH2-TGUlwu4')); //15 nyan cat
theCats.push(new cats('0','/images/tumblr_lpl4rzh5Yl1qijm74o1_500.gif', 'rYBUDRSeeeE')); //16 choice - acid eiffel
theCats.push(new cats('0','/images/tumblr_lsxjzwG4Hy1qgzaeko1_500.gif', 'OKbLI8EufNo')); //17 phuture - acid tracks
theCats.push(new cats('0','/images/tumblr_lsdu4xjKIH1r45mcto1_500.gif', 'vJcAnEk_hgE')); //18 fear and loathing in las vegas soundtrack - song 2 - one toke over the line
theCats.push(new cats('0','/images/UlLkh.gif', '83h_oF56Wks')); //19 pimpinela - olvidame y pega vuelta
theCats.push(new cats('0','/images/thunder.gif', '46ODcj51Tmk')); //20 thundercats theme song
theCats.push(new cats('0','/images/catgifpage82.gif', 'psOfz7Wr77I')); //21 audrey's dance - from twin peaks soundtrack
theCats.push(new cats('0','/images/b6d459acf3c306c90f836bb312852f78.gif', 'LKM_8dXD65U')); //22 vitalic - you prefer cocaine
theCats.push(new cats('0','/images/36.gif', 'AeTgx_pj6m8')); //23 kool & the gang - celebration
theCats.push(new cats('0','/images/47.gif', 'izGwDsrQ1eQ')); //24 george michael - careless whisper
theCats.push(new cats('0','/images/tumblr_lugw9wsjHU1qzi1qgo1_250.gif', 'jhUkGIsKvn0')); //25 carl douglas - kung fu fighting
theCats.push(new cats('0','/images/tumblr_lk0oxyafUr1qbhtrto1_400.gif', 'NIzyoKsWTA4')); //26 ministry - NWO
theCats.push(new cats('0','/images/tumblr_luj0a13Dfy1qcw1zto1_400.gif', 'U5TqIdff_DQ')); //27 james brown - i feel good
theCats.push(new cats('5','/images/tumblr_ls592twkOg1qcapd0o1_500.gif', 'fJ9rUzIMcZQ')); //28 queen - bohemian rhapsody
theCats.push(new cats('11','/images/tumblr_lq3u6w1ZUi1qbt59oo1_500.gif', 'WNpGCmwXVFA')); //29 las chicas del can - juana la cubana
theCats.push(new cats('0','/images/tumblr_lv8ohpMtMO1qdrnl5o1_500.gif', 'gZdHqEFK0ew')); //30 yello - oh yeah
theCats.push(new cats('59','/images/tumblr_lv57uojPhv1qfjjglo3_250.gif', 'PGNiXGX2nLU')); //31 dear or alive - you spin me round
theCats.push(new cats('0','/images/catgifpage72.gif', 'O3erBcUTj0U')); //32 kill bill 1 ost - ironside excerpt (quincy jones)
theCats.push(new cats('69','/images/tumblr_ls5m19PYlN1qcapd0o1_500.gif', 'qORYO0atB6g')); //33 beastie boys - intergalactic
theCats.push(new cats('10','/images/4cd2624c4fc742cdfb5a47b4523d7543809b545a_m.gif', 'j5C6X9vOEkU')); //34 banana phone
theCats.push(new cats('17','/images/tumblr_lqh7oaCrhA1qbt59oo1_400.gif', 'LfmrHTdXgK4')); //35 queen - flash
theCats.push(new cats('20','/images/catgifpage30-1.gif', 'lC6vZOgYduk')); //36 air - sexy boy
theCats.push(new cats('12','/images/7375125409.gif', '2hClJ4WRhbg')); //37 daddy yankee - gasolina
theCats.push(new cats('2','/images/catsareeverywhere.tumblr.gif', 'W7J92Vv5w58')); //38 lionel richie - all night long
theCats.push(new cats('5','/images/catgifpage100.gif', 'GD3VsesSBsw')); //39 carmina burana - oh fortuna
theCats.push(new cats('0','/images/verycherrypeel.tumblr.gif', '7IiLZ0dvDWU')); //40 jordy - dur dur d'etre bebe
theCats.push(new cats('2','/images/tumblr_lkkfw2IWzp1qadw96o1_500.gif', '4eGQ5VFt7P4')); //41 keyboard cat song
theCats.push(new cats('0','/images/983625.gif', 'XiBYM6g8Tck')); //42 los del rio - macarena 
theCats.push(new cats('0','/images/tumblr_ljejnhbREk1qcn249o1_500.gif', 'z5rRZdiu1UE')); //43 beastie boys - sabotage
theCats.push(new cats('0','/images/tumblr_lizhjnJIp91qdqgwf.gif', 'tr-yOUwnuGY')); //44 roni size and cypress hill - child of the wild west
theCats.push(new cats('14','/images/tumblr_limn9aFJV71qcn249o1_400.gif', 'tPB84Plv8tc')); //45 kriss kross - jump
theCats.push(new cats('100','/images/tumblr_lrgvtpf8N01r037lwo1_500.gif', '1qsgBF7ZIsk')); //46 gheorghe zamfir - the lonely shepherd
theCats.push(new cats('20.5','/images/tumblr_lfr7r8bcYe1qcn249o1_500.gif', 'ogoIxkPjRts')); //47 air supply - making love out of nothing at all
theCats.push(new cats('260','/images/tumblr_lgpu9cl3gm1qcn249o1_400.gif', 'D2hE4XO8rF4')); //48 manowar - hail and kill
theCats.push(new cats('0','/images/tumblr_lemtqvDq0Z1qcn249o1_500.gif', 'fc2ACoBmKK8')); //49 kill bill vol 1 - green hornet
theCats.push(new cats('15','/images/tumblr_lel3qdTJoY1qcn249o1_400.gif', 'VBdSqk78nHw')); //50 tom jones - what's new pussycat
theCats.push(new cats('56','/images/tumblr_lee9z4mejl1qcn249o1_400.gif', '1mdgLn5BFRQ')); //51 hot chip - over and over
theCats.push(new cats('0','/images/tumblr_l59iq9m61J1qcn249o1_250-1.gif', 'i1rvLst5bts')); //52 reel 2 real - i like to move it
theCats.push(new cats('0','/images/tumblr_l4zvowhoEZ1qcn249o1_250.gif', 'CJKyTNQSbWo')); //53 kraftwerk - the model
theCats.push(new cats('16','/images/tumblr_l5d3911dhG1qcn249o1_500.gif', 'otCpCn0l4Wo')); //54 mc hammer - can't touch this
theCats.push(new cats('43','/images/plastikman.gif', '0wJHvOaJdi0')); //55 plastikman - ping pong
theCats.push(new cats('18','/images/roxbury.gif', 'Gsj7pMbMpSQ')); //56 haddaway - what is love
theCats.push(new cats('0.5','/images/bij.gif', 'vgdBhTl44Yc')); //57 alphaville - big in japan
theCats.push(new cats('0','/images/what.gif', 'Cj8JrQ9w5jY')); //58 lcd soundsystem - daft punk is playing at my house
theCats.push(new cats('1','/images/tumblr_lsylnpmlTC1r4y6xto1_500.gif', 'J83jBZ4dK0Y')); //59 western saloon piano
theCats.push(new cats('28','/images/tumblr_lu9o1eOBVr1qhed4wo1_250.gif', 'ZvCI-gNK_y4')); //60 jaws theme
theCats.push(new cats('0','/images/tumblr_lrd09pcM1f1qdt23mo5_250-1.gif', '9DkrSwIROxI')); //61 machete machete machete machete
theCats.push(new cats('91','/images/catgifpage43.gif', 'OgcY6qlzdf8')); //62 daft punk - veridis quo
theCats.push(new cats('191','/images/anigif_enhanced-buzz-3054-1323296437-22.gif', 'NjTLKKgcVxM')); //63 depeche mode - get the balance right (combination mix)
theCats.push(new cats('0.7','/images/tumblr_lugq7ebwNz1qg3fqqo1_400.gif', 'WewhSwe3pnw')); //64 ace of base - all that she wants
theCats.push(new cats('13.8','/images/funny-pictures-gifs-rolling-cat.gif', 'ynfk7izWNE8')); //65 james brown - get on up
theCats.push(new cats('0','/images/tumblr_lj8yprbouu1qc7554.gif', 'lX-EW53XVkM')); //66 squarepusher - illegal dustbin
theCats.push(new cats('0','/images/10847.gif', 'VgSMxY6asoE')); //67 survivor - eye of the tiger
theCats.push(new cats('31','/images/tumblr_lg3i47epIK1qght7mo1_500-2.gif', 'OeYN_hyR9YI')); //68 major lazer - hold the line
theCats.push(new cats('62','/images/lazorcat.gif', '5NtzU8Xz4tI')); //69 ellen allien - washing machine is speaking
theCats.push(new cats('0','/images/tumblr_luy6omZT381qaf67i.gif', 'wGuCvFdrWPg')); //70 jose feliciano - feliz navidad
theCats.push(new cats('35','/images/tumblr_lt2e1kUOTt1qzt824o2_250.gif', 'SLVHEPYEBLU')); //71 plastikman - spastik (dubfire rework)
theCats.push(new cats('0','/images/zNDfB.gif', '0S43IwBF0uM')); //72 the chemical brothers - star guitar
theCats.push(new cats('0.6','/images/tumblr_lkx04suye01qe1ucbo1_400.gif', '7w1Qo1awwI4')); //73 raf - self control
theCats.push(new cats('0','/images/ijaefiae_92dwid.gif', 'uPU4DJG4phg')); //74 polygon window - polygon window
theCats.push(new cats('15.5','/images/tumblr_l8r9hlbd6p1qcjwayo1_400.gif', 'sSiyA1cLTWQ')); //75 ministry - psalm 69
theCats.push(new cats('114','/images/tumblr_lpjaopydHb1qigppno1_250.gif', 'XflfiylNNXY')); //76 beastie boys - three mc's and one dj
theCats.push(new cats('120','/images/684ac231jw1do71rb7alug.gif', 'wlq0lYB3iSM')); //77 van halen - jump
theCats.push(new cats('0','/images/funny-gifs-striking-the-air.gif', 'n4RjJKxsamQ')); //78 scorpions - wind of change
theCats.push(new cats('1','/images/tumblr_lzqcxkguGa1qbx8fio1_500.gif', 'OlKyP-nM8Vk')); //79 sterac electronics - destination reached
theCats.push(new cats('120','/images/tumblr_lye4k4rYAu1qf9ykco1_500.gif', 'IrPWkIRWY9U')); //80 giorgio moroder - chase
theCats.push(new cats('0','/images/AR7B7.gif', 'KTCkkIU1uig')); //81 kuruki - just a cat
theCats.push(new cats('0','/images/tumblr_lzrs23ZiLu1qidarg.gif', '6TUeUL7EW9M')); //82 theme from psycho (violins)
theCats.push(new cats('0','/images/tumblr_m022rjxPqz1r45099o1_500.gif', 'EfNVxGSIIfs')); //83 margot - voci giaga
theCats.push(new cats('7','/images/tumblr_lr4x51OsSy1qjvsoxo4_250.gif', 'z2gfDO_8ggQ')); //84 juno reactor - burly brawl
theCats.push(new cats('6.7','/images/tumblr_lzc0hcz38B1ql1xx0o1_500.gif', 'fKkvR4y8X5Q')); //85 toni basil- hey mickey
theCats.push(new cats('0','/images/qpu7U.gif', 'OB_fDwBMkCQ')); //86 the trashmen, surfin' bird
theCats.push(new cats('8','/images/tumblr_lwcvlhx71A1qg39ewo1_500.gif', 'wpNk860pTO4')); //87 harry belafonte - jump in the line
theCats.push(new cats('0','/images/78.gif', 'K60Dp8wu70k')); //88 volta cab - ice (cisco cisco remix)
theCats.push(new cats('14','/images/tennis.gif', 'XeEl0M7MQYk')); //89 zomby - tears in the rain
theCats.push(new cats('0','/images/space.gif', 'i7_edU9T2Ho')); //90 lindstrom - i feel space
theCats.push(new cats('0','/images/rain.gif', 'uz8R0CQzhB8')); //91 matador - 124 tonetool
theCats.push(new cats('15','/images/spaceboy.gif', 'cwdssHTfPJQ')); //92 david bowie & pet shop boys - hallo spaceboy
theCats.push(new cats('65.3','/images/fallin.gif', '1lWJXDG2i0A')); //93 tom petty - free falling
theCats.push(new cats('30','/images/robots.gif', 'jRJWAzXocYU')); //94 anthony rother - destroy him my robots
theCats.push(new cats('0','/images/breadkitty.gif', '9OFpfTd0EIs')); //95 billy idol - eyes without a face
theCats.push(new cats('63','/images/catbunny.gif', 'xat1GVnl8-k')); //96 bloodhound gang - the bad touch
theCats.push(new cats('1','/images/tumblr_ls03mo8LSS1qcffkqo1_500.gif', 'hsNsC0Cdp2c')); //97 edith piaf - non je ne regrette rien
theCats.push(new cats('5','/images/anigif_enhanced-buzz-3021-1323296390-36.gif', 'FwDmHHvUVmE')); //98 el zorro opening spanish latino
theCats.push(new cats('6','/images/tumblr_m91zerfWvj1qdlh1io1_500.gif', '0AIlz08fZos')); //99 queen - friends will be friends
theCats.push(new cats('4','/images/tumblr_le81iu7n6M1qcn249o1_500.gif', '9bZkp7q19f0')); //100 psy - gangnam style
theCats.push(new cats('0','/images/trentcats.gif', 'sy1ODfPsIXs')); //101 trentemoller - moan
theCats.push(new cats('0','/images/dglD1.gif', 'k3Fa4lOQfbA')); //102 jane birkin and serg gainsbourg - je t'aime moi non plus
theCats.push(new cats('23','/images/2ZqgimXE7ket8CqEFzKy1Q2.gif', 'MYsBvZRXF7A')); //103 ministry - just one fix
theCats.push(new cats('2','/images/tumblr_m1upcan3E01r53h4fo1_250.gif', 'soDZBW-1P04')); //104 nazareth - love hurts
theCats.push(new cats('10','/images/gifs_011.gif', 'A0pjGVyQtfI')); //105 karen kamon - manhunt
theCats.push(new cats('1','/images/mgmcat.gif', 'iHU53NedhkQ')); //106 metro golwyn mayer intro (lion roar)
theCats.push(new cats('7','/images/tumblr_leq68p4No21qcn249o1_250.gif', 'Y-aqy9BYqDM')); //107 propellerheads - spybreak!
theCats.push(new cats('0','/images/sinkkitty.gif', 'XFkzRNyygfk')); //108 radiohead - creep
theCats.push(new cats('0','/images/82900628.gif', 'KC58HzENhoQ')); //109 refused - rather be dead
theCats.push(new cats('1','/images/trio.gif', 'sQgd6MccwZc')); //110 destiny's child - say my name
theCats.push(new cats('6','/images/tumblr_lq5e3ivdNo1qji1ylo1_500.gif', 'XSCJJkFgt_w')); //111 fine young cannibals - she drives me crazy
theCats.push(new cats('3','/images/swcat.gif', 'g0uplUvP_Qg')); //112 stars wars theme
theCats.push(new cats('1','/images/tuxedocat.gif', 'FxcssgFNi5Y')); //113 domino - this business of love
theCats.push(new cats('0','/images/tumblr_ltzn6xs6oH1qzrdsmo1_250.gif', 'SbyAZQ45uww')); //114 nancy sinatra - these boots are made for walkin
theCats.push(new cats('20','/images/toolcat.gif', 'uCEeAn6_QJo')); //115 tool - aenema
theCats.push(new cats('0','/images/1qVZm.gif', '0FOhJVOPwJg')); //116 the hacker - masterplan (feat miss kittin)
theCats.push(new cats('0','/images/trentcat2.gif', '7jQbITg0MSk')); //117 trentemoller - miss you
theCats.push(new cats('0','/images/tumblr_maz9xnwx9I1r3gb3zo1_400.gif', 'lVtfCkXyKW8')); //118 the cure - trust
theCats.push(new cats('22','/images/vitaliccat.gif', '651UYYxrfh0')); //119 vitalic - birds
theCats.push(new cats('0','/images/97c90ab641c0b12742a7537013e685364be7468f_m.gif', 'wGPlCLf9AZ8')); //120 rockwell - somebody's watching me
theCats.push(new cats('22.4','/images/popcorn.gif', 'OSRCemf2JHc')); //121 gershon kingsley - popcorn
theCats.push(new cats('124.5','/images/pachanga.gif', 'P4MdAKmfELs')); //122 pachanga boys - poem for the youth
theCats.push(new cats('0','/images/drexciya.gif', '7ti13Mu1KW4')); //123 drexciya - devil ray cove
theCats.push(new cats('23','/images/pingpong.gif', 'fXSWSbrVPe0')); //124 need2beat - ping pong song
theCats.push(new cats('0','/images/salsacat.gif', 'HNpcYM4siZQ')); //125 hector lavoe - la murga
theCats.push(new cats('5.5','/images/tommy_the_cat.gif', 'r4OhIU-PmB8')); //126 primus - tommy the cat
theCats.push(new cats('0','/images/yawn.gif', 'wcN_AEOQv4s')); //127 the romantics - talking in your sleep
theCats.push(new cats('0','/images/catfan.gif', 'HyB3ha2nCKs')); //128 midisports - desafinado

$(document).ready(function() {	

	//$.fn.snow({ maxSize: 100, minSize: 25});

	var url = (window.location != window.parent.location) ? document.referrer: document.location;
	if (url == "http://hipjesus.com/") {
		document.location.href = "http://zombo.com";
	} else {

		$("#blank").css({width: $(window).width(), height: $(window).height(), "padding-top": ($(window).height() / 2) - 100}).fadeIn(100);

		if (swfobject.hasFlashPlayerVersion("8")) {
			var qsKitty = $.getUrlVar('cat');
			if (typeof qsKitty != "undefined" && typeof theCats[qsKitty] != "undefined") rand = qsKitty;
			if (rand == '') rand = Math.round(Math.random()*(theCats.length - 1));
			$("#loading span:first").html('loading a <strong>cat</strong> and <strong>buffering a song</strong>');
			$("#permalink").html('<span><a class="permalink" title="Permalink to this procatinator" href="http://procatinator.com/?cat=' + rand + '">http://procatinator.com/?cat=' + rand + "</a></span><div id=\"info\"></div><br /><span class=\"other\"><a href=\"/\">Show me another cat &rarr;</a></span>");
			$("#blank strong:first").css({"text-decoration":"underline"});
			$('<img data-video="'+ theCats[rand].video + '" id="kitty" height="' + $(window).height() + '" width="' + $(window).width() + '" src="' + theCats[rand].gif + '" alt="" style="z-index: 900; position: absolute; top: 0; left: 0;" />').appendTo("body");
			$("#kitty").load(function(){
				$(".permalink").attr("href","http://procatinator.com/?cat="+rand).text("http://procatinator.com/?cat="+rand);
				$("#blank strong:last").css({"text-decoration":"underline"});
				getYouTubeInfo($(this).data("video"));
			});
		} else {
			$("#loading span:first").text("oops, there's a problem…");
			$('<div id="error"><p><strong>Flash Player</strong> is needed for the music</p><p>We are currently working on <strong>Procatinator for iOS</strong></p><p>In the meantime please visit us from a desktop computer with Flash</p></div>').insertAfter(".almost:last");
			$("#blank").css({width: $(window).width(), height: $(window).height(), "padding-top": ($(window).height() / 2) - ($("#loading").height() + 40)}).fadeIn(100);
		}
	}

	$(window).resize(function() {
		var kitty = $("#kitty");
		if (kitty.length > 0) {
			kitty.css({height: $(window).height(), width: $(window).width()});
			if (kitty.data("started")) $("#footer").css({top: $(window).height() - $("#footer").height() - 30, left: $(window).width() - $("#footer").width() - 6});
		}
		$("#blank").css({width: $(window).width(), height: $(window).height(), "padding-top": ($(window).height() / 2) - ($("#loading").height() + 40)}).fadeIn(100);
	});

});