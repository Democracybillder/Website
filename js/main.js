var bill = {
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

$(".form-control").change(function() {
			alert("Input value: " + $(".form-control").val());
});

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

// Produce Bills

for (i = 0; i < 5; i++)  {
	var bill = $("<div />").addClass("row bill");
	var legislatorImage = $("<div />").addClass("col-md-2 col-centered legImage");
	var legislatorHeadshot = $("<img />").addClass("img-circle");
	var legislatorNameContainer = $("<p />").addClass("nameContainer");
	var legislatorName = $("<a />").addClass("PoliticanNames");
	var translationsColumn = $("<div />").addClass("col-md-8");
	var maintranslation = $("<h1 />").addClass("maintranslation");
	var translationsPane = $("<div />").addClass("translations pane");

	var interactionColumn = $("<div />").addClass("col-md-2");
	var like = $("<button />").addClass("btn vote-up btn-lg test");
	var likeSpan = $("<span />").addClass("glyphicon glyphicon-thumbs-up");
	var likeSpanSpan = $("<span />").addClass("badge");
	var dislike = $("<button />").addClass("btn vote-down btn-lg");
	var dislikeSpan = $("<span />").addClass("glyphicon glyphicon-thumbs-down");
	var dislikeSpanSpan = $("<span />").addClass("badge");
	var follow = $("<button />").addClass("btn add-to-mybills btn-lg");
	var followSpan = $("<span />").addClass("label label-default");
	var voteCount = $("<p />").addClass("votes");

	bill.appendTo("#bill-container")
		.append([legislatorImage, translationsColumn, interactionColumn]);
	legislatorImage.append([legislatorHeadshot, legislatorNameContainer]);
	legislatorName.appendTo(legislatorNameContainer);
	translationsColumn.append([maintranslation, translationsPane]);

	like.attr("type", "button");
	dislike.attr("type", "button");
	follow.attr("type", "button");
	voteCount.text("600 votes");
	interactionColumn.append([like, dislike, follow, voteCount]);
	
	likeSpan.attr("aria-hidden", "true")
		.appendTo(like);
	likeSpanSpan.text("5")
		.appendTo(likeSpan);

	dislikeSpan.attr("aria-hidden", "true")
		.appendTo(dislike);
	dislikeSpanSpan.text("5")
		.appendTo(dislikeSpan);

	followSpan.text("follow")
		.appendTo(follow);

// console.log("got to the end of bill loop!");
}
// Produce Translations
for (i = 0; i < 5; i++)  {

	var translation = $("<div />").addClass("row");
	var translatorImage = $("<div />").addClass("col-md-3");
	var translatorHeadshot = $("<img />").addClass("img-circle");
	var translatorNameContainer = $("<p />").addClass("center-block");
	var translatorName = $("<a />");
	var translationTextBubble = $("<div />").addClass("col-md-9 triangle-border left");
	var translationText = $("<p />");
	translation.appendTo(".translations")
		.append([translatorImage,translationTextBubble]);
	translatorHeadshot.attr({
		'src': "https://pbs.twimg.com/profile_images/456240049776902144/9FNdHosY_400x400.jpeg",
		'alt': "moms demand action",
		'href': '#'});
	translatorImage.append([translatorHeadshot, translatorNameContainer]);
	translatorName.attr('href','#')
		.text("Moms demand action")
		.appendTo(translatorNameContainer);
	translationText.text("I am a translation here me roar longer longer longer longer longer longer longer longer longer longer longer longer longer longerlonger longer longer longer longer longer longerlonger longer longer longer longer longer longer")
		.appendTo(translationTextBubble);

	if (i % 2 === 0)  {
		translatorImage.addClass("pull-right");
		translatorHeadshot.addClass("pull-right");
		translationTextBubble.removeClass("left")
			.addClass("right pull-right");
	}
}

$(".legImage").children("img").attr({
	"src": "http://www.sesamestreet.org/cms_services/services?action=download&uid=dbf13ec8-16cd-11dd-a1a2-3f408a4274b3",
	"alt": "elmo"
	});
$(".legImage").find("a").text("Senator Elmo").attr("href", "#");

$(".maintranslation").addClass("state").text("America Feeding Puppies");

$(".maintranslation").click(function(){
            $(this).next().slideToggle();	
    });
// compare "nameContainer" and "center-block" css to see if can be combined
