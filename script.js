function auth() {
	let login = 'name';
	let pas = '111';
	let enterLogin = prompt('Enter login');
		if (enterLogin === login) {
			let tryes = 3;
			for (i = 1; i<=3; i++) {
				let enterPas = prompt('Enter password');
				if (enterPas === pas) {
					alert('Welcome');
					break;
				}
				else {
					alert('Wrong password. ' + (tryes - i) + ' tryes left.');
				}
			}		
		}
		else {
			alert('Login is wrong. Try again.');
			auth();
		}
}
auth();