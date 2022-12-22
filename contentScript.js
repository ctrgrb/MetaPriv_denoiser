(() => {
	setInterval(function () {
		chrome.storage.local.get(['key'], function(result) {
		  	const value = result.key;
		  	const stuff = value.split('\n||\n');
			const links = stuff[0].split('\n')
			const words = stuff[1].split(';');
			var post_elements = [];
			var latest_vid = false;

			if (window.location.href == "https://www.facebook.com/"){
				post_elements = Array.from(document.getElementsByClassName('x1ja2u2z xh8yej3 x1n2onr6 x1yztbdb'));
				console.log('Denoiser working on main page');
			} else if (window.location.href.startsWith('https://www.facebook.com/watch/latest')){
				post_elements = Array.from(document.getElementsByClassName('x1jx94hy xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xw7yly9 x1yztbdb x1dtb55y x1l90r2v x1swvt13 x1pi30zi xyamay9'));
				latest_vid = true;
				console.log('Denoiser working on latest video page');
			} else if (window.location.href.startsWith('https://www.facebook.com/watch')){
				post_elements = Array.from(document.getElementsByClassName('x1jx94hy x1lq5wgf xgqcy7u x30kzoy x9jhf4c x78zum5 x6ikm8r x10wlt62 x1n2onr6 xzueoph'));
				console.log('Denoiser working on main video page');
			} 

			post_elements.forEach(post => {
				const a = post.querySelectorAll('[role="link"]');
				var format_link = "";
				if (latest_vid){
					const link = a[1].getAttribute('href')
					format_link = "https://www.facebook.com" + link.split('/watch')[1]
				} else {
					const link = a[0].getAttribute('href')
					format_link = link.split('?__cft__')[0]
				}
				if (links.indexOf( format_link ) != -1 ){
					post.parentNode.removeChild(post)
					console.log('Filtered post from '+format_link);
				}else{
					const post_text = post.innerText.toLowerCase();
					for (let i = 0; i < words.length; i++) {
						const word = words[i].replace("\n","");
						if (word == ""){}
						else if (post_text.includes(word)){
							post.parentNode.removeChild(post);
							console.log('Filtered post containing keyword: "'+word+'"');
						}
					}
				}
				
			});

			
		});
	},3000);
})();