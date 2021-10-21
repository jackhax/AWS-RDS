usn = document.getElementById('usn')
nam = document.getElementById('nam')
cgpa = document.getElementById('cgpa')
radios = document.getElementsByName('cgpa');
query = ""

function urlencode(str) {
  str = (str + '').toString();

  // Tilde should be allowed unescaped in future versions of PHP (as reflected below), but if you want to reflect current
  // PHP behavior, you would need to add ".replace(/~/g, '%7E');" to the following.
  return encodeURIComponent(str)
    .replace('!', '%21')
    .replace('\'', '%27')
    .replace('(', '%28')
    .replace(')', '%29')
    .replace('*', '%2A')
    .replace('%20', '+');
}

function submit_form(){
	u = usn.value
	n = nam.value
	c = cgpa.value
	type = -1
	for (var radio of radios)
	    {
	        if (radio.checked) {
	            type = (radio.value);
	        }
	    }

	query2 = `select * from students_data where name like "%25${n}%" and usn like "%25${u}%"`

	if(c !== ''){
		query2 += ` and cgpa ${type} ${c}`
	}else{
		query2 += ` and cgpa > -1`
	}
	/*
	if(u.length === 12){
		query = `select * from students_data where usn = "${u}"`
	}else{

		for (var radio of radios)
	    {
	        if (radio.checked) {
	            type = (radio.value);
	        }
	    }

		if(n === '' && c === ''){
			console.log('Invalid options')
			return;
		}
		if(n!== ''){
			query = `select * from students_data where name like "%${n}%"`
		}
		if(c !== ''){
			query = `select * from students_data where cgpa ${type} ${parseFloat(c)}`
		}

		if(n!=='' && c!==''){
			query = `select * from students_data where cgpa ${type} ${parseFloat(c)} and name like "%${n}%"`
		}

		if(n!=='' && c!== '' && u!= ''){
			query = `select * from students_data where name like "%${n}%" and cgpa ${type} ${parseFloat(c)} and usn like "%${u}%"`
		}

		if(c!== '' && u!= ''){
			query = `select * from students_data where cgpa ${type} ${parseFloat(c)} and usn like "%${u}%"`
		}

		if(n!=='' && u!= ''){
			query = `select * from students_data where usn like "%${u}%" and name like "%${n}%"`
		}
	}
	*/
	query2 += ' order by cgpa desc;'
	console.log(query2)
	window.open(`https://mcshtbvduj.execute-api.ap-south-1.amazonaws.com/rds?q=${query2}`);
}