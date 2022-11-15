/*
(() => {
	let fbvar1, fbvar2;

	chrome.runtime.onMessage.addListener((obj, sender, response) => {
		const {type, value} = obj;

		if ( type === "NEW"){
			facebookOpened();
		}
	});

	const facebookOpened = () => {
		const elements = document.getElementsByClassName('x1lliihq');
		console.log(elements);
	}
})();

const boxes = document.querySelectorAll('.x1lliihq');

boxes.forEach(box => {
  box.remove();
});

var element = arguments[0];
element.parentNode.removeChild(element);	


const post_elements = Array.from(document.getElementsByClassName('x1ja2u2z xh8yej3 x1n2onr6 x1yztbdb'));

post_elements.forEach(post => {
	const b = $(post).getAttribute('href')
	console.log(b);
});


var elements = document.getElementsByClassName('x1lliihq');
console.log(elements);

for (let i = 0; i < elements.length; i++) {
  elements[i].parentNode.removeChild(elements[i]);
};
const links = [
"https://www.facebook.com/Rakuten-NFT-103793338757785/",
"https://www.facebook.com/floraborsiofficial",
"https://www.facebook.com/digitalblasphemy",
"https://www.facebook.com/nftmilionares/",
"https://www.facebook.com/SuperPhazed",
"https://www.facebook.com/nftparati",
"https://www.facebook.com/TheOfficialNFT",
"https://www.facebook.com/supernftsociety",
"https://www.facebook.com/KimKardashianGame/",
"https://www.facebook.com/KimKardashian",
"https://www.facebook.com/KourtneyKardashian",
"https://www.facebook.com/iskardashian/",
"https://www.facebook.com/RobKardashian",
"https://www.facebook.com/kimkardashin123",
"https://www.facebook.com/KhloeKardashian",
"https://www.facebook.com/KardashianJenner-Updates-1627949140576512/",
"https://www.facebook.com/KeepingUpWiththeKardashiansFans/",
"https://www.facebook.com/thekardashiansisters",
"https://www.facebook.com/kuwtksisters",
"https://www.facebook.com/kardashiankids/",
"https://www.facebook.com/KourtneyKardashian",
"https://www.facebook.com/KardashianJenner-Updates-1627949140576512/",
"https://www.facebook.com/KhloeKardashian",
"https://www.facebook.com/karjennews",
"https://www.facebook.com/ChelseaDeBoerFans",
"https://www.facebook.com/actressesearth",
"https://www.facebook.com/kardashiankids/",
"https://www.facebook.com/KeepingUpWiththeKardashiansFans/",
"https://www.facebook.com/KardashianAKhloe",
"https://www.facebook.com/BeingMaci",
"https://www.facebook.com/Kourtney-Kardashian-Fans-100776568837001/",
"https://www.facebook.com/thekardashiansisters",
"https://www.facebook.com/ToyotaNederland/",
"https://www.facebook.com/FootballWorldHD",
"https://www.facebook.com/Football365/",
"https://www.facebook.com/thefootballarenaa/",
"https://www.facebook.com/football2gether/",
"https://www.facebook.com/WorldFootball365days/",
"https://www.facebook.com/adidasfootballus/",
"https://www.facebook.com/TheFanBuzz.CollegeFootball/",
"https://www.facebook.com/footballlplanet/",
"https://www.facebook.com/GambiaFootballFederation",
"https://www.facebook.com/CanalplusFoot/",
"https://www.facebook.com/topeleven/",
"https://www.facebook.com/iamafreestyler/",
"https://www.facebook.com/chelseafcw/",
"https://www.facebook.com/nigeriafootball/",
"https://www.facebook.com/SquawkaFootballNews/",
"https://www.facebook.com/mirrorfootball/",
"https://www.facebook.com/NorwichCityFootballClub/",
"https://www.facebook.com/paulaluisepoetry"
]
//const request = window.indexedDB.open('pages.db');
//console.log(request);*/
(() => {
	const links = [
	"https://www.facebook.com/Rakuten-NFT-103793338757785/",
	"https://www.facebook.com/floraborsiofficial",
	"https://www.facebook.com/digitalblasphemy",
	"https://www.facebook.com/nftmilionares/",
	"https://www.facebook.com/SuperPhazed",
	"https://www.facebook.com/nftparati",
	"https://www.facebook.com/TheOfficialNFT",
	"https://www.facebook.com/supernftsociety",
	"https://www.facebook.com/KimKardashianGame/",
	"https://www.facebook.com/KimKardashian",
	"https://www.facebook.com/KourtneyKardashian",
	"https://www.facebook.com/iskardashian/",
	"https://www.facebook.com/RobKardashian",
	"https://www.facebook.com/kimkardashin123",
	"https://www.facebook.com/KhloeKardashian",
	"https://www.facebook.com/KardashianJenner-Updates-1627949140576512/",
	"https://www.facebook.com/KeepingUpWiththeKardashiansFans/",
	"https://www.facebook.com/thekardashiansisters",
	"https://www.facebook.com/kuwtksisters",
	"https://www.facebook.com/kardashiankids/",
	"https://www.facebook.com/KourtneyKardashian",
	"https://www.facebook.com/KardashianJenner-Updates-1627949140576512/",
	"https://www.facebook.com/KhloeKardashian",
	"https://www.facebook.com/karjennews",
	"https://www.facebook.com/ChelseaDeBoerFans",
	"https://www.facebook.com/actressesearth",
	"https://www.facebook.com/kardashiankids/",
	"https://www.facebook.com/KeepingUpWiththeKardashiansFans/",
	"https://www.facebook.com/KardashianAKhloe",
	"https://www.facebook.com/BeingMaci",
	"https://www.facebook.com/Kourtney-Kardashian-Fans-100776568837001/",
	"https://www.facebook.com/thekardashiansisters",
	"https://www.facebook.com/ToyotaNederland/",
	"https://www.facebook.com/FootballWorldHD",
	"https://www.facebook.com/Football365/",
	"https://www.facebook.com/thefootballarenaa/",
	"https://www.facebook.com/football2gether/",
	"https://www.facebook.com/WorldFootball365days/",
	"https://www.facebook.com/adidasfootballus/",
	"https://www.facebook.com/TheFanBuzz.CollegeFootball/",
	"https://www.facebook.com/footballlplanet/",
	"https://www.facebook.com/GambiaFootballFederation",
	"https://www.facebook.com/CanalplusFoot/",
	"https://www.facebook.com/topeleven/",
	"https://www.facebook.com/iamafreestyler/",
	"https://www.facebook.com/chelseafcw/",
	"https://www.facebook.com/nigeriafootball/",
	"https://www.facebook.com/SquawkaFootballNews/",
	"https://www.facebook.com/mirrorfootball/",
	"https://www.facebook.com/NorwichCityFootballClub/",
	"https://www.facebook.com/paulaluisepoetry"
	]

	chrome.runtime.onMessage.addListener((obj, sender, response) => {
		const {type, value} = obj;

		if ( type === "NEW"){
			setInterval(function () {
			const post_elements = Array.from(document.getElementsByClassName('x1ja2u2z xh8yej3 x1n2onr6 x1yztbdb'));

			//boxes[0].remove()
			post_elements.forEach(post => {
				const a = post.querySelectorAll('[role="link"]');
				const link = a[0].getAttribute('href')
				const format_link = link.split('?__cft__')[0]
				if (links.indexOf( format_link ) != -1 ){
					post.parentNode.removeChild(post)
					console.log(format_link);
				}
				

			});
			console.log('   ');
			console.log('   ');
		},3000);
		}
	});


})();



