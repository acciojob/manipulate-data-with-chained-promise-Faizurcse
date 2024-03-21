//your JS code here. If required.
let arr = [1, 2, 3, 4]

const p1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
	const newArr = arr.filter((i)=>{
			if(i%2!==0){
				return i
			}
		})
		  resolve(newArr)
	},1000)
})

const p2 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
	const newArr1 = arr.map((i)=>{
			if(i%2===0){
				return (i * 2)
			}
		else{
			return i
		}
		})
		  resolve(newArr1)
	},2000)
})

p1.then((data)=>{
	document.getElementById('output').innerText = data
	return p2
}).then((data1)=>{
	document.getElementById('output').innerText = data1

})

