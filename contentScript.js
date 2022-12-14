(() => {
	setInterval(function () {
		chrome.storage.local.get(['key'], function(result) {
		  	const value = result.key;
		  	const stuff = value.split('\n||\n');
			const links = stuff[0].split('\n')
			const words = stuff[1].split(';');
			
			const post_elements = Array.from(document.getElementsByClassName('x1ja2u2z xh8yej3 x1n2onr6 x1yztbdb'));

			post_elements.forEach(post => {
				const a = post.querySelectorAll('[role="link"]');
				const link = a[0].getAttribute('href')
				const format_link = link.split('?__cft__')[0]
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

			console.log('Denoiser working');			
		});
	},3000);
})();