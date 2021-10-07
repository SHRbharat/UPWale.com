let products = [
    {
        name: 'Boat bassHeads 225',
        image1: './images/BOAT_BASSHEADS_225-1.JPG',
        image2: './images/BOAT_BASSHEADS_225-2.JPG',
		image3: './images/BOAT_BASSHEADS_225-3.JPG',
		image4: './images/BOAT_BASSHEADS_225-4.JPG',
        price: '1290',
        brand: 'Boat',
		type: 'Earbuds',
		id: '01',
		desc: 'The noise-cancelling microphone enables trouble free receiving of calls or undeterred sessions of musical extravaganza.Made to fit you and your lifestyle, providing a smooth grip for an extra secure and comfortable fit for your ears'
    },
    {
        name: 'Boat bassHeads 100',
        image1: './images/BOAT_BASSHEAD_100-1.JPG',
        image2: './images/BOAT_BASSHEAD_100-2.JPG',
		image3: './images/BOAT_BASSHEAD_100-3.JPG',
		image4: './images/BOAT_BASSHEAD_100-4.JPG',
        price: '999',
        brand: 'Boat',
		type: 'Earbuds',
		id: '02',
		desc: 'The perfect way to add some style and stand out from the crowd with the boAt BassHeads 100 "Hawk" inspired earphones. Impedance 16Ω, Sensitivity (dB) 92db ±3db, Frequency Response 20Hz-20KHz.The stylish BassHeads 100 superior coated wired earphones are a definite fashion statement - wear your attitude with its wide variety of collection'
    },
    {
        name: 'Boat Rockerz 510 Wireless',
        image1: './images/boAt Rockerz 510 Wireless-1.JPG',
        image2: './images/boAt Rockerz 510 Wireless-2.JPG',
		image3: './images/boAt Rockerz 510 Wireless-3.JPG',
		image4: './images/boAt Rockerz 510 Wireless-4.JPG',
        price: '3990',
        brand: 'Boat',
		type: 'Wireless Headphones',
		id: '03',
		desc: 'Its 50mm drivers promises to deliver a thumping sound which you could never have imagined.Rockerz 510 promises a battery back up of upto 20 hours and a standyby time of 250 hours'
    },
    {
        name: 'BoAt 100 Wireless',
        image1: './images/boAt 100 Wireless-1.JPG',
        image2: './images/boAt 100 Wireless-2.JPG',
		image3: './images/boAt 100 Wireless-3.JPG',
		image4: './images/boAt 100 Wireless-4.JPG',
        price: '2990',
        brand: 'Boat',
		type: 'Wireless Earbuds',
		id: '04',
		desc: 'Enjoy the instant wireless connectivity with Bluetooth v5.0 and that too with the provision of being connected to two devices simultaneously via Dual Pairing on 100 Wireless.Premium HD Sound Quality: Fill your senses with the pleasure of pure ethereal sound because the boAt 100 Wireless carries dynamic 10mm drivers that can even capture pin drop silences.'
    },
	{
        name: 'Sony MDR-100AAP WIRELESS',
        image1: './images/Sony MDR-100AAP WIRELESS-1.JPG',
        image2: './images/Sony MDR-100AAP WIRELESS-2.JPG',
		image3: './images/Sony MDR-100AAP WIRELESS-3.JPG',
		image4: './images/Sony MDR-100AAP WIRELESS-4.JPG',
        price: '12990',
        brand: 'Sony',
		type: 'Wireless Headphones',
		id: '05',
		desc: 'Make your style statement with eye-catching design and colors.Enjoy the subtlest nuances of sound with high-resolution audio.Smartphone-compatible with in-line remote mic.40mm HD driver unit for dynamic range.Titanium-coated diaphragm domes minimize distortion'
    },
	{
        name: 'Sony MDR-ZX310AP Wired',
        image1: './images/Sony MDR-ZX310AP Wired-1.JPG',
        image2: './images/Sony MDR-ZX310AP Wired-2.JPG',
		image3: './images/Sony MDR-ZX310AP Wired-3.JPG',
		image4: './images/Sony MDR-ZX310AP Wired-4.JPG',
        price: '2190',
        brand: 'Sony',
		type: 'Headphones',
		id: '06',
		desc: 'Hands-free phone calls,Powerfull , high-quality , balanced sound,Stereo headphones'
    },
	{
        name: 'Sony WF-SP800N WIRELESS',
        image1: './images/Sony WF-SP800N WIRELESS-1.jpg',
        image2: './images/Sony WF-SP800N WIRELESS-2.jpg',
		image3: './images/Sony WF-SP800N WIRELESS-3.jpg',
		image4: './images/Sony WF-SP800N WIRELESS-4.jpg',
        price: '18990',
        brand: 'Sony',
		type: 'Wireless Earbuds',
		id: '07',
		desc: "Noise Cancellation: When you need that special playlist to take your workout to the next level, NC blocks out distractions, like the sounds of the gym or the street, so it's just you and the beat.Extra Bass: WF-SP800N features EXTRA BASS for seriously powerful, punchy low-end sound. Your favourite basslines never sounded so good"
    },
	{
        name: 'PHILIPS Audio TAE1126',
        image1: './images/PHILIPS Audio TAE1126-1.JPG',
        image2: './images/PHILIPS Audio TAE1126-2.JPG',
		image3: './images/PHILIPS Audio TAE1126-3.JPG',
		image4: './images/PHILIPS Audio TAE1126-4.JPG',
        price: '690',
        brand: 'Philips',
		type: 'Earbuds',
		id: '08',
		desc: 'Perfect in-ear seal blocks out external noise.Integrated microphone & call button.3 interchangeable rubber ear caps for optimal fit in all ear.A 1.2 m long cable that is ideal for outdoor use'
    },
	{
        name: 'Philips SHE3700RD ',
        image1: './images/Philips SHE3700RD-1.JPG',
        image2: './images/Philips SHE3700RD-2.JPG',
		image3: './images/Philips SHE3700RD-3.JPG',
		image4: './images/Philips SHE3700RD-4.JPG',
        price: '399',
        brand: 'Philips',
		type: 'Earbuds',
		id: '09',
		desc: 'A high quality, glossy and colourful coating creates a sleek look while adding an extra protective surface.Acoustic system: Closed, Voice Coil: Copper, Frequency response: 11- 22 000 Hz.Cable Connection: Two-parallel, symmetric, Cable Length: 1.2 m'
    },
	{
        name: 'Philips TAPH802BK WIRELESS',
        image1: './images/Philips TAPH802BK WIRELESS-1.JPG',
        image2: './images/Philips TAPH802BK WIRELESS-2.JPG',
		image3: './images/Philips TAPH802BK WIRELESS-3.JPG',
		image4: './images/Philips TAPH802BK WIRELESS-4.JPG',
        price: '4990',
        brand: 'Philips',
		type: 'Wireless Headphones',
		id: '10',
		desc: 'DESIGN: Soft ear-cups with compact flat-folding design makes these wireless headphones easy to carry..SPECIAL FEATURE: These over-ear headphones with sleek design gives excellent passive noise isolation..CONNECTIVITY: Its 5.0 bluetooth connectivity gives you a complete hasslefree wireless audio enjoyment.'
    },
	{
        name: 'Beats Flex Wireless',
        image1: './images/Beats Flex Wireless-1.JPG',
        image2: './images/Beats Flex Wireless-2.JPG',
		image3: './images/Beats Flex Wireless-3.JPG',
		image4: './images/Beats Flex Wireless-4.JPG',
        price: '4451',
        brand: 'Beats',
		type: 'Wireless Earbuds',
		id: '11',
		desc: 'Magnetic earbuds with Auto-Play/Pause.Up to 12 hours of listening time.All-day comfort with Flex-Form cable and four eartip options.Powered by the Apple W1 headphone chip for seamless connectivity'
    },
	{
        name: 'Beats Ep Wired',
        image1: './images/Beats Ep Wired-1.JPG',
        image2: './images/Beats Ep Wired-2.JPG',
		image3: './images/Beats Ep Wired-3.JPG',
		image4: './images/Beats Ep Wired-4.JPG',
        price: '8000',
        brand: 'Beats',
		type: 'Headphones',
		id: '12',
		desc: 'Beats EP wired on-ear headphone delivers masterfully tuned sound..Durable, lightweight design reinforced with stainless steel'
    }
]


//functions

//to hide except specified type
function hideType(id){
	for (let i = 0; i < 12; i++) {
        if (products[i].type != id) {
            document.getElementById(products[i].id).style.display = "none";
        }
	}
}

//to hide except specified brand
function hideBrand(id){
	for (let i = 0; i < 12; i++) {
        if (products[i].brand != id) {
            document.getElementById(products[i].id).style.display = "none";
        }
	}
}

//to hide outside price range
function priceRange(min,max){
	for (let i = 0; i < 12; i++) {
        if ( (products[i].price <= min) || (products[i].price >= max) ) {
            document.getElementById(products[i].id).style.display = "none";
        }
	}
}

//function to retrieve data on other page(local storage of browser)

function transferKey(id){
	localStorage.setItem("prodID",id);
}

function setFilter(cat,value){
	localStorage.setItem("Category",cat);
	localStorage.setItem("Value",value);
}

function prodPage(){
	if(localStorage.getItem("Category") == "Type"){
		hideType(localStorage.getItem("Value"));
	}
	if(localStorage.getItem("Category") == "Brand"){
		hideBrand(localStorage.getItem("Value"));
	}
	if(localStorage.getItem("Category") == "Price"){
		let min,max;
		if(localStorage.getItem("Value") == 1){
			min = 0;
			max = 1000;
		}
		if(localStorage.getItem("Value") == 2){
			min = 1000;
			max = 3000;
		}
		if(localStorage.getItem("Value") == 3){
			min = 3000;
			max = 6000;
		}
		if(localStorage.getItem("Value") == 4){
			min = 6000;
			max = 100000;
		}
		priceRange(min,max);
	}
	setFilter("None","None");
}

function setPage(){
	document.getElementById("main image").src = products[localStorage.getItem("prodID") - 1].image1;
	document.getElementById("2 image").src = products[localStorage.getItem("prodID") - 1].image2;
	document.getElementById("3 image").src = products[localStorage.getItem("prodID") - 1].image3;
	document.getElementById("4 image").src = products[localStorage.getItem("prodID") - 1].image4;
	
	document.getElementById("prodName").innerHTML = products[localStorage.getItem("prodID") - 1].name;
	document.getElementById("prodBrand").innerHTML = products[localStorage.getItem("prodID") - 1].brand;
	document.getElementById("prodPrice").innerHTML = products[localStorage.getItem("prodID") - 1].price;
	document.getElementById("prodDesc").innerHTML = products[localStorage.getItem("prodID") - 1].desc;
}

//FOR PRODUCT-DETAILS PAGE
function updateImg(img){
	let main = document.getElementById("main image").src;
	document.getElementById("main image").src = document.getElementById(img + " image").src;
	document.getElementById(img + " image").src = main;
}