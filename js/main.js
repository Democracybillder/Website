var bill123 = [
{
    "id": 691612,
    "description": {
        "id": 0,
        "scope": "state",
        "title": "Levy And Assessment Of Local Taxes",
        "state": "RI",
        "description": "Permits a municipality, where there is a budget commission, to charge a tax of up to fifteen percent (15%) of the qualified low-income housing's current year's gross scheduled rent.",
        "votes": {"yay": 88, "nay": 5},
        "following": 600
    },
    "sponsor":  [
    	"Senator Elmo",
    	{
    		"src":"http://www.sesamestreet.org/cms_services/services?action=download&uid=dbf13ec8-16cd-11dd-a1a2-3f408a4274b3",
    		"alt": "elmo"
    	}
    ],
    "log": {
            "status_date": "2015-01-22T00:00:00Z",
            "status": 1,
            "last_action_date": "2015-01-22T00:00:00Z",
            "last_action": "Introduced, referred to Senate Finance"
        },
    "translations":  {
    	"EdSource":["Would eliminate willful defiance or disruption of school activities as a reason to expel students and would limit its use in suspensions.",
    	{'src': "http://upload.wikimedia.org/wikipedia/commons/thumb/0/08/No_Logo_logo.svg/1280px-No_Logo_logo.svg.png",
		'alt': "EdSource"},"Student discipline",5003],
    	"LA School Report":["The bill eliminates “willful defiance” suspensions and expulsions for the next 3 1/2 years for children in grades K-3 for disruptive behavior and eliminates expulsions for all students.",
    	{'src': "http://laschoolreport.com/wp-content/uploads/2013/07/lasr-logo3.png",
		'alt': "LA School Report"},"Limiting Willful Defiance Suspensions",123],
    	"Anti Defamation League":["The new law prohibits for all students expulsion for willful defiance—which can be as minor as a dress code violation or failure to hand in homework—and prohibits for students in grades K–3 suspensions for willful defiance.",
    	{'src': "http://template.adl.org/files/2012/10/ADL-Web_MG-light-300-150x150.png",
		'alt': "ADL"},"Reduce Harsh Student Discipline Practices",75],
		"Fight Crime: Invest in Kids":["An appropriate, logical approach to address undesirable student behavior that promotes alternatives to suspension and keeps kids in the classroom and off the streets.",
    	{'src': "http://www.fightcrime.org/wp-content/uploads/2011/11/logo1.gif",
		'alt': "Fight Crime: Invest in Kids"},"Common sense school discipline policies",75]
    }
},
{
    "id": 1111111,
    "description": {
        "id": 0,
        "scope": "state",
        "title": "Levy And Assessment Of Local Taxes",
        "state": "RI",
        "description": "Permits a municipality, where there is a budget commission, to charge a tax of up to fifteen percent (15%) of the qualified low-income housing's current year's gross scheduled rent.",
        "votes": {"yay": 26, "nay": 1543},
        "following": 125
    },
    "sponsor":  [
    	"Senator Big Bird",
    	{
    		"src":"http://static.musictoday.com/store/bands/2117/product_large/6EAM0965.JPG",
    		"alt": "big-bird"
    	}
    ],
    "log": {
            "status_date": "2015-01-22T00:00:00Z",
            "status": 1,
            "last_action_date": "2015-01-22T00:00:00Z",
            "last_action": "Introduced, referred to Senate Finance"
        },
    "translations":  {
    	"Fight for the Future":["a secretive agreement negotiated behind closed doors by government bureaucrats and more than 600 corporate lobbyists. It threatens everything you care about: democracy, jobs, the environment, and the Internet.",
    	{'src': "https://www.stopfasttrack.com/images/orgs/fftf.png",
		'alt': "FFTF"},"Don't betray democracy!",5003],
    	"Sierra Club":["It could strip our government's power to manage U.S. gas and oil exports, opening the floodgates for fracking, sacrificing our air and water quality in order to feed foreign markets.",
    	{'src': "http://action.sierraclub.org/site-inc/350/Sierra_club_logo2_3.JPG",
		'alt': "Sierra Club"},"Environmental Devistation",123],
    	"Public Citizen":["President Obama is asking Congress to delegate to him extreme Fast Track authority to railroad into place job-killing trade agreements like the Trans-Pacific Partnership (TPP).",
    	{'src': "https://www.citizen.org/view.image?Id=1140",
		'alt': "Public Citizen"},"An Undemocratic Path to Unfair 'Trade'",75],
    	"Global Exchange":["Allows for the expansion of privileges and protections for big business at the expense of workers, family farms, the environment and democracy at home and around the world.",
    	{'src': "http://energy-reality.org/wp-content/uploads/2013/06/global-exchange-logo-e1348032449308.png",
		'alt': "GE"},"Corporate Interests and Privitization",15],
    	"Corporate Accountability International":["The TPP reaches far beyond the confines of trade and threatens countries’ sovereign right to pass and defend public health and environmental policies by granting corporations legal authority to challenge them directly on trade grounds through the investor-state dispute mechanism.",
    	{'src': "https://www.stopcorporateabuse.org/sites/default/files/logo_0.png",
		'alt': "CAI"},"Railroads the TPP through Congress",2]
    }
}
];

// Produce Bill Shells


function createLegislatorImage()  {
	var legislatorHeadshot = $("<img />").addClass("img-circle"),
	legislatorNameContainer = $("<p />").addClass("nameContainer"),
	legislatorName = $("<a />").addClass("PoliticianNames");

	legislatorName.appendTo(legislatorNameContainer);
	return $("<div />").addClass("col-md-2 col-centered legImage")
		.attr("href", "#")
		.append([legislatorHeadshot, legislatorNameContainer]);
}

function createTranslationsColumn()  {
	var maintranslation = $("<h1 />").addClass("maintranslation"),
	translationsPane = $("<div />").addClass("translations pane");

	return $("<div />").addClass("col-md-8")
		.append([maintranslation, translationsPane]);
}

function createInteractionColumn()  {
	var like = $("<button />").addClass("btn vote-up btn-lg"),
	likeSpan = $("<span />").addClass("glyphicon glyphicon-thumbs-up"),
	likeSpanSpan = $("<span />").addClass("badge like"),
	dislike = $("<button />").addClass("btn vote-down btn-lg"),
	dislikeSpan = $("<span />").addClass("glyphicon glyphicon-thumbs-down"),
	dislikeSpanSpan = $("<span />").addClass("badge dislike"),
	follow = $("<button />").addClass("btn add-to-mybills btn-lg"),
	followSpan = $("<span />").addClass("label label-default"),
	voteCount = $("<p />").addClass("votes");
	
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

// Produce Translation Shells

function createLeftTranslation()  {
// Creates left oriented translation shell
	var translationTextBubble = $("<div />").addClass("col-md-9 triangle-border left"),
	translatorImage = createTranslatorImage(),
	translationText = $("<p />").appendTo(translationTextBubble),
	translation = $("<div />").addClass("row")
		.append([translatorImage,translationTextBubble]);
		return translation
}

function createRightTranslation()  {
// Creates right oriented translation shell
	var translationTextBubble = $("<div />").addClass("col-md-9 triangle-border right pull-right"),
	translatorImage = createTranslatorImage(1).addClass("pull-right"),
	translationText = $("<p />").appendTo(translationTextBubble),
	translation = $("<div />").addClass("row")
		.append([translatorImage,translationTextBubble]);
	return translation
}

function createTranslatorImage(right)  {
// Creates shell for translator image and name
	right = right || 0;
	var translatorContainer = $("<div />"),
	translatorHeadshotContainer = HeadshotContainer(),
	translatorNameContainer = createTranslationNameContainer();
	if (right === 1)  {
		translatorContainer.addClass("pull-right")};
	return $("<div />").addClass("col-md-3")
	.append((translatorContainer)
	.append([translatorHeadshotContainer, translatorNameContainer]));
}

function HeadshotContainer()  {
	var translatorHeadshot = $("<img />").addClass("img-circle center-block"),
	translatorheadshotContainer = $("<div />").addClass("center-block");
	return translatorheadshotContainer.append(translatorHeadshot);
}

function createTranslationNameContainer()  {
	var translatorName = $("<a />"),
	centerBlock = $("<div />").addClass("center-block");
	translatorName.attr('href','#');
	return $("<p />").addClass("nameContainer")
		.append(centerBlock
		.append(translatorName));
}

function createTranslationEndorseButton()  {
	var endorse = $("<button />").addClass("btn endorse btn-lg"),
	endorseSpan = $("<span />").addClass("label label-default"),
	endorsementCount = $("<p />").addClass("endorsements");
	endorse.attr("type", "button");
	endorseSpan.appendTo(endorse)
		.text("Endorse Translation");
	return $("<div />").append([endorse, endorsementCount])
}

function createBillTranslation(translationCounter)  {
// Takes translation count to determine left/ right and initializes translation construction
		if (translationCounter % 2 === 0)  {
			return createLeftTranslation();
		} else {
			return createRightTranslation();
		}
}

// Parse Bill Object**********************************************

function insertDescription(interactionColumn, descriptionObject)  {
	var following = descriptionObject["following"],
	yayVotes = descriptionObject["votes"]["yay"],
	nayVotes = descriptionObject["votes"]["nay"];
	$(interactionColumn).find(".votes").text(following); 
	$(interactionColumn).find(".like").text(yayVotes);
	$(interactionColumn).find(".dislike").text(nayVotes);
	return interactionColumn; 
}

function insertSponsor(sponsorColumn, sponsorObject)  {
	var imgSrc = sponsorObject["1"]["src"],
	imgAlt = sponsorObject["1"]["alt"],
	sponsorName = sponsorObject["0"];
	$(sponsorColumn).children("img").attr({
		"src": imgSrc,
		"alt": imgAlt
		});
	$(sponsorColumn).find("a").text(sponsorName);
	return sponsorColumn;
}

function insertTranslations(translationColumn, translationObject)  {
// Takes translation object and inputs each translation to the given bill
	var translationCounter = 1; 
	for (var key in translationObject)  {
		if (translationObject.hasOwnProperty(key)) {
			var newTranslation = createBillTranslation(translationCounter);
			translationCounter++;
			var object = translationObject[key];
			$(newTranslation).children(".col-md-9").find("p").text(object[0]);
			$(newTranslation).find("a").text(key);
			$(newTranslation).find("img")
					.attr({
					'src': object[1]["src"],
					'alt': object[1]["alt"]});
			$(translationColumn).children(".translations").append(newTranslation);
		}
	}
	return translationColumn;
}

function insertBills(billArray)  {
// Takes array of bills and inserts them into page
	for (var bill in billArray)  {
		insertBill(billArray[bill]);
	}
}

function insertBill(billObject)  {
	var billDescription = compileBillFollowing(billObject["description"]),
	billSponsor = compileBillSponsor(billObject["sponsor"]),
	billTranslation = compileTranslationsPane(billObject["translations"]),
	bill = $("<div />").addClass("row bill").append([billSponsor, billTranslation, billDescription]);
		$(bill).appendTo("#bill-container");		
}

function compileBillFollowing(billDescription)  {
 	var interactionColumn = createInteractionColumn();
 	return insertDescription(interactionColumn, billDescription);
 }

function compileBillSponsor(billSponsor)  {
	var sponsorColumn = createLegislatorImage();
	return insertSponsor(sponsorColumn, billSponsor);
}

function compileTranslationsPane(billTranslations)  {
	var translationColumn = createTranslationsColumn();
	return insertTranslations(translationColumn, billTranslations);
}


	
insertBills(bill123);

// Need to find another way for .maintranslation (the title)


$(".maintranslation").text("bill title");

$(".form-control").change(function() {
			alert("Input value: " + $(".form-control").val());
});

$(".maintranslation").click(function(){
            $(this).next().slideToggle();
        });



