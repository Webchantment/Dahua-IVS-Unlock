const newOptions =
[
	{ name:"Abandoned Object", value:"LeftDetection" },
	{ name:"Missing Object", value:"TakenAwayDetection" },
	{ name:"Fast Moving", value:"MoveDetection" },
	{ name:"Parking Detection", value:"ParkingDetection" },
	{ name:"People Gathering", value:"RioterDetection" },
	{ name:"Loitering Detection", value:"WanderDetection" }
];

const selectObserver = new MutationObserver(() =>
{
	const selects = document.querySelectorAll("#ivs_ruleManager > * select");
	
	if (selects.length > 0)
	{
		//console.log(selects);
		selects.forEach(s =>
		{
			const currentValues = Array.from(s.querySelectorAll("option")).map(c => c.value);
			//console.log(currentValues);
			
			newOptions.forEach(n =>
			{
				if (!currentValues.includes(n.value))
				{	
					const newOption = document.createElement("option");
					newOption.value = n.value;
					newOption.text = n.name;
					
					s.add(newOption);
				}
			});
		});
	}
});
selectObserver.observe(document.body, { childList: true, subtree: true });