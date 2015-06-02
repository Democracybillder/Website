var bill123 = {
        "id": 691612,
        "description": {
            "id": 0,
            "title": "Levy And Assessment Of Local Taxes",
            "state": "RI",
            "description": "Permits a municipality, where there is a budget commission, to charge a tax of up to fifteen percent (15%) of the qualified low-income housing's current year's gross scheduled rent."
        },
        "log": [
            {
                "status_date": "2015-01-22T00:00:00Z",
                "status": 1,
                "last_action_date": "2015-01-22T00:00:00Z",
                "last_action": "Introduced, referred to Senate Finance"
            }
        ],
        "translations":  {
        	"1":"I am a translation here me roar longer longer longer longer longer longer longer longer longer longer longer longer longer longerlonger longer longer longer longer longer longerlonger longer longer longer longer longer longer",
        	"2":"I am a translation here me roar longer longer longer longer longer longer longer longer longer longer longer longer longer longerlonger longer longer longer longer longer longerlonger longer longer longer longer longer longer",
        	"3":"I am a translation here me roar longer longer longer longer longer longer longer longer longer longer longer longer longer longerlonger longer longer longer longer longer longerlonger longer longer longer longer longer longer",
        	"4":"I am a translation here me roar longer longer longer longer longer longer longer longer longer longer longer longer longer longerlonger longer longer longer longer longer longerlonger longer longer longer longer longer longer",
        	"5":"I am a translation here me roar longer longer longer longer longer longer longer longer longer longer longer longer longer longerlonger longer longer longer longer longer longerlonger longer longer longer longer longer longer",
        	"6":"I am a translation here me roar longer longer longer longer longer longer longer longer longer longer longer longer longer longerlonger longer longer longer longer longer longerlonger longer longer longer longer longer longer",
        }
        	
        };


// Produce Bill Shells

function createBill()  {
	return $("<div />").addClass("row bill")
		.appendTo("#bill-container");		
}

function createLegislatorImage()  {
	var legislatorHeadshot = $("<img />").addClass("img-circle");
	var legislatorNameContainer = $("<p />").addClass("nameContainer");
	var legislatorName = $("<a />").addClass("PoliticanNames");
	legislatorName.appendTo(legislatorNameContainer);
	return $("<div />").addClass("col-md-2 col-centered legImage")
		.append([legislatorHeadshot, legislatorNameContainer]);
}

function createTranslationsColumn()  {
	var maintranslation = $("<h1 />").addClass("maintranslation");
	var translationsPane = $("<div />").addClass("translations pane");
	return $("<div />").addClass("col-md-8")
		.append([maintranslation, translationsPane]);
}

function createInteractionColumn()  {
	var like = $("<button />").addClass("btn vote-up btn-lg");
	var likeSpan = $("<span />").addClass("glyphicon glyphicon-thumbs-up");
	var likeSpanSpan = $("<span />").addClass("badge");
	var dislike = $("<button />").addClass("btn vote-down btn-lg");
	var dislikeSpan = $("<span />").addClass("glyphicon glyphicon-thumbs-down");
	var dislikeSpanSpan = $("<span />").addClass("badge");	
	var follow = $("<button />").addClass("btn add-to-mybills btn-lg");
	var followSpan = $("<span />").addClass("label label-default");
	var voteCount = $("<p />").addClass("votes");
	
	(like, dislike, follow).attr("type", "button");
	likeSpan.attr("aria-hidden", "true");
	dislikeSpan.attr("aria-hidden", "true");
	likeSpan.appendTo(like);
	dislikeSpan.appendTo(dislike);
	likeSpanSpan.appendTo(likeSpan);
	dislikeSpanSpan.appendTo(dislikeSpan);
	followSpan.appendTo(follow)
		.text("Add");

	return $("<div />").addClass("col-md-2")
		.append([like, dislike, follow, voteCount]);
}

function loadBillShells(billNumber)  {
	for (i = 0; i < billNumber; i++)  {
		var bill = createBill();
		var legislatorImage = createLegislatorImage();
		var translationsColumn = createTranslationsColumn();
		var interactionColumn = createInteractionColumn();	
		
		bill.append([legislatorImage, translationsColumn, interactionColumn]);
	}
}

loadBillShells(10)

// Produce Translation Shells

function createLeftTranslation()  {
	var translationTextBubble = $("<div />").addClass("col-md-9 triangle-border left");
	var translatorImage = createTranslatorImage();
	var translationText = $("<p />").appendTo(translationTextBubble);

	return $("<div />").addClass("row")
		.appendTo(".translations")
		.append([translatorImage,translationTextBubble]);
}

function createRightTranslation()  {
	var translationTextBubble = $("<div />").addClass("col-md-9 triangle-border right pull-right");
	var translatorImage = createTranslatorImage(1).addClass("pull-right");
	var translationText = $("<p />").appendTo(translationTextBubble);

	return $("<div />").addClass("row")
		.appendTo(".translations")
		.append([translatorImage,translationTextBubble]);
}

function createTranslatorImage(right)  {
	right = right || 0;
	console.log(right);
	var translatorHeadshot = pullTranslatorHeadshot();
	var translatorNameContainer = createTranslationNameContainer();
	if (right === 1)  {
		translatorHeadshot.addClass("pull-right")};
	return $("<div />").addClass("col-md-3")
	.append([translatorHeadshot, translatorNameContainer]);
}


function pullTranslatorHeadshot()  {
	return $("<img />").addClass("img-circle")
		.attr({
		'src': "https://pbs.twimg.com/profile_images/456240049776902144/9FNdHosY_400x400.jpeg",
		'alt': "moms demand action",
		'href': '#'});
}

function createTranslationNameContainer()  {
	var translatorName = $("<a />");
	translatorName.attr('href','#')
		.text("Moms demand action");
	return $("<p />").addClass("center-block")
		.append(translatorName);
}

function createBillTranslations(translationsNumber)  {
	for (i = 0; i < translationsNumber; i++)  {
		if (i % 2 === 0)  {
			var translation = createLeftTranslation();
		} else {
			var translation = createRightTranslation();
		}	
	}
}

createBillTranslations(10)

/*

function addNewBill()  {
	var billInfo = ""  //get bill info
	var legislator = 'Senator Cookie' //parse
	var billText = "cookies mandatory at every restaurant"
	var billLog = []
	var bill = "" // html bill skeleton
	$("footer").before("put it all together here")
}


function addNewBill(bill)  {
	var billInfo = "";  //get bill info
	var legislator = 'Senator Cookie'; //parse
	var billText = "cookies mandatory at every restaurant";
	var billLog = [];
	var bill = ""; // html bill skeleton
	$("#bill-container").append(bill)
}


function addBills(json, billAmount)  {
	// billAmount is an int = number of bills to extract, json is all possible bills
	//var object = JSON && JSON.parse(json) || $.parseJSON(json);
	var data = eval(json);
	var billCount = 0;
	var i;

	for (i = 0; i < billAmount; i++) {
		//addNewBill(json[i]);
		$("#bill-container").append($("#eric"));
		billCount++;
	}

};

$("#bill-container").append($(".bill").clone(true, true));
*/


$(".form-control").change(function() {
			alert("Input value: " + $(".form-control").val());
});

$(".legImage").children("img").attr({
	"src": "http://www.sesamestreet.org/cms_services/services?action=download&uid=dbf13ec8-16cd-11dd-a1a2-3f408a4274b3",
	"alt": "elmo"
	});
$(".legImage").find("a").text("Senator Elmo").attr("href", "#");

$(".maintranslation").addClass("state").text("America Feeding Puppies");

$(".maintranslation").click(function(){
            $(this).next().slideToggle();	
});

$(".votes").text("600"); 
$(".badge").text("5"); 

$(".triangle-border").children("p").text("I am a translation here me roar longer longer longer longer longer longer longer longer longer longer longer longer longer longerlonger longer longer longer longer longer longerlonger longer longer longer longer longer longer");





