const urls = [
	'https://jsonplaceholder.typicode.com/posts/1',
	'https://jsonplaceholder.typicode.com/posts/2',
	'https://jsonplaceholder.typicode.com/posts/3',
	'https://jsonplaceholder.typicode.com/posts/4',
	'https://jsonplaceholder.typicode.com/posts/5',
	'https://jsonplaceholder.typicode.com/posts/6',
	'https://jsonplaceholder.typicode.com/posts/7',
	'https://jsonplaceholder.typicode.com/posts/8',
	'https://jsonplaceholder.typicode.com/posts/9',
	'https://jsonplaceholder.typicode.com/posts/10',
]

async function* generate() {
	let i = 0;
	while (urls) {
		if (urls[i]) {
			await new Promise(resolve => setTimeout(resolve, 3000));

			const response = await fetch(urls[i])
			i++
			yield response.json()
		} else {
			break;
		}
	}
}

(async () => {
	for await (let value of generate()) {
		console.log(value);
	}
})();