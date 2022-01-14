plaintext = document.getElementById('plaintext')
encrypt = document.getElementById('encrypt')

encrypt.addEventListener('click',function(e){
	console.log(plaintext.value.length)
	let s = plaintext.value
	document.getElementById('cyphertextoutput').innerHTML = ''
	let arr = document.getElementById('cyphertextoutput').innerHTML
	for(let i=0;i<s.length;i++)
	{
		let x = s.charCodeAt(i)
		if(x>=65 && x<=90)
		{
			x-=65
			x = 25-x;
			x+=65
			console.log(String.fromCharCode(x))
			arr+=(String.fromCharCode(x))
		}
		else if(x>=97 && x<=122)
		{
			x-=97
			x = 25-x
			x+=97
			console.log(String.fromCharCode(x))
			arr+=(String.fromCharCode(x))
		}
	}
	document.getElementById('cyphertextoutput').innerHTML = arr
})

cyphertext = document.getElementById('cyphertext')
decrypt = document.getElementById('decrypt')

decrypt.addEventListener('click',function(e){
	console.log(plaintext.value.length)
	let s = cyphertext.value
	document.getElementById('plaintextoutput').innerHTML = ''
	let arr = document.getElementById('plaintextoutput').innerHTML
	for(let i=0;i<s.length;i++)
	{
		let x = s.charCodeAt(i)
		if(x>=65 && x<=90)
		{
			x-=65
			x = 25-x;
			x+=65
			console.log(String.fromCharCode(x))
			arr+=(String.fromCharCode(x))
		}
		else if(x>=97 && x<=122)
		{
			x-=97
			x = 25-x
			x+=97
			console.log(String.fromCharCode(x))
			arr+=(String.fromCharCode(x))
		}
	}
	document.getElementById('plaintextoutput').innerHTML = arr
})
