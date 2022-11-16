(() => {
	setInterval(function () {
		chrome.storage.local.get(['key'], function(result) {
		  	const value = result.key;
			const links = value.split('\n')
			
				const post_elements = Array.from(document.getElementsByClassName('x1ja2u2z xh8yej3 x1n2onr6 x1yztbdb'));

				post_elements.forEach(post => {
					const a = post.querySelectorAll('[role="link"]');
					const link = a[0].getAttribute('href')
					const format_link = link.split('?__cft__')[0]
					if (links.indexOf( format_link ) != -1 ){
						post.parentNode.removeChild(post)
						console.log('Filtered post from '+format_link);
					}
					

				});
				console.log('Denoiser working');			
		});
	},3000);
})();