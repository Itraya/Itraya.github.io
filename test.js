const map = new Map([
	['PROTECTION', 1],
	['FIRE_PROTECTION', 2],
	['FEATHER_FALLING', 2],
	['BLAST_PROTECTION', 4],
	['PROJECTILE_PROTECTION', 2],
	['THORNS', 8],
	['RESPIRATION', 4],
	['DEPTH_STRIDER', 4],
	['AQUA_AFFINITY', 4],
	['SHARPNESS', 1],
	['SMITE', 2],
	['BANE_OF_ARTHROPODS', 2],
	['KNOCKBACK', 2],
	['FIRE_ASPECT', 4],
	['LOOTING', 4],
	['EFFICIENCY', 1],
	['SILK_TOUCH', 8],
	['UNBREAKING', 2],
	['FORTUNE', 4],
	['POWER', 1],
	['PUNCH', 4],
	['FLAME', 4],
	['INFINITY', 8],
	['LUCK_OF_THE_SEA', 4],
	['LURE', 4],
	['FROST_WALKER', 4],
	['MENDING', 4],
	['CURSE_OF_BINDNG', 8],
	['CURSE_OF_VANISHING', 8],
	['IMPALING', 4],
	['RIPTIDE', 4],
	['LOYALTY', 1],
	['CHANNELING', 8],
	['MULTISHOT', 4],
	['PIERCING', 1],
	['QUICK_CHARGE', 2],
	['SOULD_SPEED', 8],
	['SWIFT_SNEAK', 8],
	['SWEEPING_EDGE', 4],
])

const best = new Map([
	["TURTLE_SHELL", [
		{"enchantment": "MENDING", "level": 1, "unique": 0},
		{"enchantment": "UNBREAKING", "level": 3, "unique": 0},
		{"enchantment": "THORNS", "level": 3, "unique": 0},
		{"enchantment": "RESPIRATION", "level": 3, "unique": 0},
		{"enchantment": "AQUA_AFFINITY", "level": 1, "unique": 0},
		{"enchantment": "PROTECTION", "level": 4, "unique": 1},
		{"enchantment": "PROJECTILE_PROTECTION", "level": 4, "unique": 1},
		{"enchantment": "FIRE_PROTECTION", "level": 4, "unique": 1},
		{"enchantment": "BLAST_PROTECTION", "level": 4, "unique": 1}
	]],
	["HELMET", [
		{"enchantment": "MENDING", "level": 1, "unique": 0},
		{"enchantment": "UNBREAKING", "level": 3, "unique": 0},
		{"enchantment": "THORNS", "level": 3, "unique": 0},
		{"enchantment": "RESPIRATION", "level": 3, "unique": 0},
		{"enchantment": "AQUA_AFFINITY", "level": 1, "unique": 0},
		{"enchantment": "PROTECTION", "level": 4, "unique": 1},
		{"enchantment": "PROJECTILE_PROTECTION", "level": 4, "unique": 1},
		{"enchantment": "FIRE_PROTECTION", "level": 4, "unique": 1},
		{"enchantment": "BLAST_PROTECTION", "level": 4, "unique": 1}
	]],
	["CHESTPLATE", [
		{"enchantment": "MENDING", "level": 1, "unique": 0},
		{"enchantment": "UNBREAKING", "level": 3, "unique": 0},
		{"enchantment": "THORNS", "level": 3, "unique": 0},
		{"enchantment": "PROTECTION", "level": 4, "unique": 1},
		{"enchantment": "PROJECTILE_PROTECTION", "level": 4, "unique": 1},
		{"enchantment": "FIRE_PROTECTION", "level": 4, "unique": 1},
		{"enchantment": "BLAST_PROTECTION", "level": 4, "unique": 1}
	]],
	["LEGGINGS", [
		{"enchantment": "MENDING", "level": 1, "unique": 0},
		{"enchantment": "UNBREAKING", "level": 3, "unique": 0},
		{"enchantment": "THORNS", "level": 3, "unique": 0},
		{"enchantment": "SWIFT_SNEAK", "level": 3, "unique": 0},
		{"enchantment": "PROTECTION", "level": 4, "unique": 1},
		{"enchantment": "PROJECTILE_PROTECTION", "level": 4, "unique": 1},
		{"enchantment": "FIRE_PROTECTION", "level": 4, "unique": 1},
		{"enchantment": "BLAST_PROTECTION", "level": 4, "unique": 1}
	]],
	["BOOTS", [
		{"enchantment": "MENDING", "level": 1, "unique": 0},
		{"enchantment": "UNBREAKING", "level": 3, "unique": 0},
		{"enchantment": "THORNS", "level": 3, "unique": 0},
		{"enchantment": "FEATHER_FALLING", "level": 4, "unique": 0},
		{"enchantment": "SOUL_SPEED", "level": 3, "unique": 0},
		{"enchantment": "PROTECTION", "level": 4, "unique": 1},
		{"enchantment": "PROJECTILE_PROTECTION", "level": 4, "unique": 1},
		{"enchantment": "FIRE_PROTECTION", "level": 4, "unique": 1},
		{"enchantment": "BLAST_PROTECTION", "level": 4, "unique": 1},
		{"enchantment": "DEPTH_STRIDER", "level": 3, "unique": 2},
		{"enchantment": "FROST_WALKER", "level": 2, "unique": 2}
	]],
	["SWORD", [
		{"enchantment": "MENDING", "level": 1, "unique": 0},
		{"enchantment": "UNBREAKING", "level": 3, "unique": 0},
		{"enchantment": "FIRE_ASPECT", "level": 2, "unique": 0},
		{"enchantment": "LOOTING", "level": 3, "unique": 0},
		{"enchantment": "KNOCKBACK", "level": 2, "unique": 0},
		{"enchantment": "SWEEPING_EDGE", "level": 3, "unique": 0},
		{"enchantment": "SHARPNESS", "level": 5, "unique": 1},
		{"enchantment": "SMITE", "level": 5, "unique": 1},
		{"enchantment": "BANE_OF_ARTHROPODS", "level": 5, "unique": 1}
	]],
	["AXE", [
		{"enchantment": "MENDING", "level": 1, "unique": 0},
		{"enchantment": "UNBREAKING", "level": 3, "unique": 0},
		{"enchantment": "EFFICIENCY", "level": 5, "unique": 0},
		{"enchantment": "FORTUNE", "level": 3, "unique": 1},
		{"enchantment": "SILK_TOUCH", "level": 1, "unique": 1},
		{"enchantment": "SHARPNESS", "level": 5, "unique": 2},
		{"enchantment": "SMITE", "level": 5, "unique": 2},
		{"enchantment": "BANE_OF_ARTHROPODS", "level": 5, "unique": 2}
	]],
	["PICKAXE", [
		{"enchantment": "MENDING", "level": 1, "unique": 0},
		{"enchantment": "UNBREAKING", "level": 3, "unique": 0},
		{"enchantment": "EFFICIENCY", "level": 5, "unique": 0},
		{"enchantment": "FORTUNE", "level": 3, "unique": 1},
		{"enchantment": "SILK_TOUCH", "level": 1, "unique": 1}
	]],
	["SHOVEL", [
		{"enchantment": "MENDING", "level": 1, "unique": 0},
		{"enchantment": "UNBREAKING", "level": 3, "unique": 0},
		{"enchantment": "EFFICIENCY", "level": 5, "unique": 0},
		{"enchantment": "FORTUNE", "level": 3, "unique": 1},
		{"enchantment": "SILK_TOUCH", "level": 1, "unique": 1}
	]],
	["HOE", [
		{"enchantment": "MENDING", "level": 1, "unique": 0},
		{"enchantment": "UNBREAKING", "level": 3, "unique": 0},
		{"enchantment": "EFFICIENCY", "level": 5, "unique": 0},
		{"enchantment": "FORTUNE", "level": 3, "unique": 1},
		{"enchantment": "SILK_TOUCH", "level": 1, "unique": 1}
	]],
	["BOW", [
		{"enchantment": "UNBREAKING", "level": 3, "unique": 0},
		{"enchantment": "POWER", "level": 5, "unique": 0},
		{"enchantment": "PUNCH", "level": 2, "unique": 0},
		{"enchantment": "FLAME", "level": 1, "unique": 0},
		{"enchantment": "INFINITY", "level": 1, "unique": 1},
		{"enchantment": "MENDING", "level": 1, "unique": 1}
	]],
	["FISHING_ROD", [
		{"enchantment": "MENDING", "level": 1, "unique": 0},
		{"enchantment": "UNBREAKING", "level": 3, "unique": 0},
		{"enchantment": "LURE", "level": 3, "unique": 0},
		{"enchantment": "LUCK_OF_THE_SEA", "level": 3, "unique": 0}
	]],
	["TRIDENT", [
		{"enchantment": "MENDING", "level": 1, "unique": 0},
		{"enchantment": "UNBREAKING", "level": 3, "unique": 0},
		{"enchantment": "IMPALING", "level": 5, "unique": 0},
		{"enchantment": "CHANNELING", "level": 1, "unique": 1},
		{"enchantment": "LOYALTY", "level": 3, "unique": 2},
		{"enchantment": "RIPTIDE", "level": 3, "unique": 12}
	]],
	["CROSSBOW", [
		{"enchantment": "MENDING", "level": 1, "unique": 0},
		{"enchantment": "UNBREAKING", "level": 3, "unique": 0},
		{"enchantment": "QUICK_CHARGE", "level": 3, "unique": 0},
		{"enchantment": "PIERCING", "level": 4, "unique": 1},
		{"enchantment": "MULTISHOT", "level": 1, "unique": 1}
	]],
	["SHIELD", [
		{"enchantment": "MENDING", "level": 1, "unique": 0},
		{"enchantment": "UNBREAKING", "level": 3, "unique": 0}
	]],
	["ELYTRA", [
		{"enchantment": "MENDING", "level": 1, "unique": 0},
		{"enchantment": "UNBREAKING", "level": 3, "unique": 0}
	]]
])

class Enchantment {
	constructor(type, actual_level, max_level, unique) {
		this.type = type
		this.actual_level = actual_level
		this.max_level = max_level
		this.unique = unique
	}
	combine(enchant) {
		if (this.type != enchant.type)
			throw "pas le même type"
		if (this.actual_level == enchant.actual_level && this.actual_level < this.max_level)
			return ++this.actual_level
		return this.actual_level = this.actual_level > enchant.actual_level ? this.actual_level : enchant.actual_level
	}
}

const REPAIR = 2

function addEnchantments(enchantment1, enchantment2) {
	if (enchantment1.actual_level === enchantment2.actual_level && enchantment1.actual_level < enchantment1.max_level)
		return enchantment1.actual_level + 1
	return enchantment1.actual_level > enchantment2.actual_level ? enchantment1.actual_level : enchantment2.actual_level
}

function addEnchantment(enchantment1, enchantment2) {
	if (enchantment1 === enchantment2)
		return enchantment1 + 1
	return enchantment1 > enchantment2 ? enchantment1 : enchantment2
}

function isIncompatible(item, type) {
	const enchants = best.get(item.type)

	for (let enchant of item.enchants) {
		e = 0
	}
}

function canEnchant(item1, item2) {
	for (let enchant of item2.enchantments) {
		if (enchant.unique == 0)
			return true
		if (enchant.unique == 1) {
			let e = item1.enchantments.find((v) => v.unique == 1)
			if (!e || (e && e.type == enchant.type))
				return true
		}
		if (enchant.unique == 2) {
			let e = item1.enchantments.find((v) => v.unique == 2)
			if (!e || (e && e.type == enchant.type))
				return true
		}
		if (enchant.unique == 12) {
			let e = item1.enchantments.find((v) => v.unique == 1 || v.unique == 2 || v.unique == 12)
			if (!e || (e && e.type == enchant.type))
				return true
		}
	}
	return false
}

class Item {
	constructor(type, enchantments, actual_durability, max_durability, anvil_use_count) {
		this.type = type
		this.enchantments = enchantments
		this.actual_durability = actual_durability
		this.max_durability = max_durability
		this.anvil_use_count = anvil_use_count
	}
	combineCost(item) {
		var cost = 0
		if (this.anvil_use_count > 0)
			cost += Math.pow(2, this.anvil_use_count) - 1
		if (item.anvil_use_count > 0)
			cost += Math.pow(2, item.anvil_use_count) - 1
		let u1, u2 = false
		for (let enchant of this.enchantments) {
			if (enchant.unique == 1)
				u1 = true
			if (enchant.unique == 2)
				u2 = true
			if (enchant.unique == 12)
				u1 = u2 = true
		}
		item.enchantments.forEach((enchant) => {
			let i = 0
			while (this.enchantments[i] != undefined && this.enchantments[i].type != enchant.type)
				i++
			
			if (this.enchantments[i] != undefined && this.enchantments[i].type == enchant.type) {
				cost += addEnchantments(this.enchantments[i], enchant) * map.get(enchant.type)
			}
			else if (!((enchant.unique == 1 && u1 == true) || (enchant.unique == 2 && u2 == true) || (enchant.unique == 12 && (u1 == true | u2 == true)))) {
				cost += enchant.actual_level * map.get(enchant.type)
			}
		})
		if (this.actual_durability < this.max_durability)
			cost += 2
		return cost
	}
	combine(item) {
		var cost = 0
		if (this.anvil_use_count > 0)
			cost += Math.pow(2, this.anvil_use_count) - 1
		if (item.anvil_use_count > 0)
			cost += Math.pow(2, item.anvil_use_count) - 1
		let u1, u2 = false
		for (let enchant of this.enchantments) {
			if (enchant.unique == 1)
				u1 = true
			if (enchant.unique == 2)
				u2 = true
			if (enchant.unique == 12)
				u1 = u2 = true
		}
		item.enchantments.forEach((enchant) => {
			let i = 0
			while (this.enchantments[i] != undefined && this.enchantments[i].type != enchant.type)
				i++
			const unique = best.get(this.type).find((e) => e.enchantment == enchant.type).unique
			if (this.enchantments[i] != undefined && this.enchantments[i].type == enchant.type) {
				const newEnchant = new Enchantment(this.enchantments[i].type, this.enchantments[i].actual_level, this.enchantments[i].max_level, unique)
				cost += newEnchant.combine(enchant) * map.get(enchant.type)
				this.enchantments[i] = newEnchant
			}
			else if (!((enchant.unique == 1 && u1 == true) || (enchant.unique == 2 && u2 == true) || (enchant.unique == 12 && (u1 == true | u2 == true)))) {
					const newEnchant = new Enchantment(enchant.type, enchant.actual_level, enchant.max_level, unique)
					this.enchantments.push(newEnchant)
					cost += enchant.actual_level * map.get(enchant.type)
			}
		})
		if (this.actual_durability < this.max_durability)
		{
			cost += 2
			this.actual_durability += item.actual_durability + Math.floor(this.max_durability * 0.12)
			if (this.actual_durability > this.max_durability)
				this.actual_durability = this.max_durability
		}
		this.anvil_use_count = this.anvil_use_count > item.anvil_use_count ? this.anvil_use_count + 1 : item.anvil_use_count + 1
		return cost
	}
}

function lowest(items, i, j) {
	const cost1 = items[i].combineCost(items[j])
	const cost2 = items[j].combineCost(items[i])
	if (cost1 < cost2) {
		const res = items[i].combine(items[j])
		items.splice(j, 1)
		return res
	}
	const res = items[j].combine(items[i])
	items.splice(i, 1)
	return res
}

function lowestCombined(item1, item2) {
	const newItem = new Item(item1.type, [], item1.max_durability, item1.max_durability, 0)
	newItem.combine(item1)
	newItem.actual_durability = item1.actual_durability
	newItem.anvil_use_count--
	newItem.combine(item2)
	return newItem
}

function lowestCost(item1, item2) {
	const cost1 = item1.combineCost(item2)
	const cost2 = item2.combineCost(item1)
	return cost1 < cost2 ? cost1 : cost2
}

var t1 = new Item("TRIDENT", [new Enchantment("CHANNELING", 1, 1, 1)])
var t2 = new Item("TRIDENT", [new Enchantment("LOYALTY", 3, 3, 2)])
var t3 = new Item("TRIDENT", [new Enchantment("RIPTIDE", 3, 3, 12)])
var t4 = new Item("TRIDENT", [])


var h1 = new Item("HELMET", [new Enchantment("MENDING", 1, 1, 0), new Enchantment("AQUA_AFFINITY", 1, 1, 0), new Enchantment("PROTECTION", 2, 4, 1)], 363, 363, 0)
var h2 = new Item("HELMET", [new Enchantment("UNBREAKING", 1, 3, 0), new Enchantment("THORNS", 1, 3, 0), new Enchantment("RESPIRATION", 2, 3, 0)], 363, 363, 0)
var h3 = new Item("HELMET", [new Enchantment("THORNS", 1, 3, 0), new Enchantment("PROTECTION", 2, 4, 1)], 363, 363, 0)
var h4 = new Item("HELMET", [new Enchantment("UNBREAKING", 1, 3, 0), new Enchantment("THORNS", 1, 3, 0)], 363, 363, 0)
var h5 = new Item("HELMET", [new Enchantment("UNBREAKING", 1, 3, 0), new Enchantment("RESPIRATION", 2, 3, 0), new Enchantment("PROTECTION", 2, 4, 1)], 363, 363, 0)
var h6 = new Item("HELMET", [new Enchantment("THORNS", 1, 3, 0), new Enchantment("PROTECTION", 1, 4, 1)], 363, 363, 0)
var h7 = new Item("HELMET", [new Enchantment("RESPIRATION", 2, 3, 0)], 363, 363, 0)
var h8 = new Item("HELMET", [new Enchantment("UNBREAKING", 1, 3, 0), new Enchantment("PROTECTION", 1, 4, 1)], 363, 363, 0)

// let h = [h1, h2, h2, h3, h4, h5, h6, h7, h8]

let h = [h1, h2, h3, h4, h5, h6, h7, h8]

console.time("t")
test(h)
console.timeEnd("t")

var b1 = new Item("BOW", new Array(new Enchantment('POWER', 3, 5), new Enchantment('UNBREAKING', 3, 3), new Enchantment('FLAME', 1, 1)), true, 0)
var b2 = new Item("BOW", new Array(new Enchantment('INFINITY', 1, 1)), true, 0)
var b3 = new Item("BOW", new Array(new Enchantment('POWER', 3, 5)), true, 0)
var b4 = new Item("BOW", new Array(new Enchantment('POWER', 4, 5)), false, 0)

var bfinal = new Item("BOW", new Array(new Enchantment('POWER', 5, 5), new Enchantment('UNBREAKING', 3, 3), new Enchantment('FLAME', 1, 1), new Enchantment('INFINITY', 1, 1)), true, 0)

let b = [b1, b2, b3, b4]

function compareEnchant(item1, item2) {
	for (let enchant1 of item1.enchantments) {
		for (let enchant2 of item2.enchantments) {
			if (enchant1.type === enchant2.type && enchant1.actual_level < enchant2.actual_level) {
				return false
			}
		}
	}
	return true;
}

function test(items) {
	let minCost = Infinity
	let minCombination = []
	let bestItem = new Item("type", [], 0, 0, 0)
	
	function combineAll(items, costSoFar, combinationSoFar) {
		if (items.length === 1) {
			var go = false
			if (costSoFar < minCost && compareEnchant(items[0], bestItem)) {
				minCost = costSoFar
				minCombination = combinationSoFar
				bestItem = items[0]
				go = true
			}
			return ;
		}
		
		for (let i = 0; i < items.length; i++) {
			for (let j = 0; j < items.length; j++) {
				if (i != j && canEnchant(items[i], items[j])) {
					const combined = lowestCombined(items[i], items[j])
					const remainingItems = items.filter((_, index) => index !== i && index !== j)
					const newCombination = [...combinationSoFar, [items[i], items[j], items[i].combineCost(items[j])]]
					combineAll([...remainingItems, combined], costSoFar + items[i].combineCost(items[j]), newCombination)
				}
			}
		}
	}
	combineAll(items, 0, [])

	console.log("best", bestItem)
	return ([minCombination, minCost])
}

// test(b, bfinal);
/*
var max_durability = 0;

function getDurability(type) {
	if (type == "TURTLE_SHELL")
		return 275
	if (type == "HELMET")
		return 363
	if (type == "CHESTPLATE")
		return 528
	if (type == "LEGGINGS")
		return 495
	if (type == "BOOTS")
		return 429
	if (type == "SWORD")
		return 1561
	if (type == "AXE")
		return 1561
	if (type == "PICKAXE")
		return 1561
	if (type == "SHOVEL")
		return 1561
	if (type == "HOE")
		return 1561
	if (type == "BOW")
		return 384
	if (type == "FISHING_ROD")
		return 64
	if (type == "TRIDENT")
		return 250
	if (type == "CROSSBOW")
		return 465
	if (type == "SHIELD")
		return 336
	if (type == "ELYTRA")
		return 432
}

function displayItem(item) {
	var itemListDiv = document.getElementById("itemList")
	var itemDiv = document.createElement("div")
	itemDiv.textContent = "Type: " + item.type
	itemListDiv.appendChild(itemDiv)
}

function displayItem(item) {
	var itemListDiv = document.getElementById("itemList");
	var itemDiv = document.createElement("div");

	// Display item type
	var typeParagraph = document.createElement("p");
	typeParagraph.textContent = "Type: " + item.type;
	itemDiv.appendChild(typeParagraph);

	// Retrieve enchantments for the item type
	const enchantments = best.get(item.type);
	if (enchantments) {
		enchantments.forEach(enchantmentObj => {
			var enchantment = enchantmentObj.enchantment;
			var level = enchantmentObj.level;

			var selectElement = document.createElement("select");
			selectElement.setAttribute("name", enchantment);
			selectElement.setAttribute("max", level);
			selectElement.style.textDecoration = "line-through"
			
			for (let i = 0; i <= level; i++) {
				var optionElement = document.createElement("option");
				optionElement.setAttribute("value", i);
				var nb = ""
				if (i == 1 && level != 1)
					nb = "I"
				else if (i == 2)
					nb = "II"
				else if (i == 3)
					nb = "III"
				else if (i == 4)
					nb = "IV"
				else if (i == 5)
					nb = "V"
				if (i > 0)
					optionElement.textContent = `${enchantment} ${nb}`;
				else
					optionElement.textContent = `${enchantment}`;
				selectElement.appendChild(optionElement);
				selectElement.addEventListener('change', barreMoiCa)
			}
			
			itemDiv.appendChild(selectElement);
		});
		var inputElement = document.createElement("input")
		inputElement.setAttribute("type", "number")
		inputElement.setAttribute("id", "actual_durability")
		inputElement.setAttribute("placeholder", "Durabilité actuelle")
		itemDiv.appendChild(inputElement)

	} else {
		var errorParagraph = document.createElement("p");
		errorParagraph.textContent = "Enchantments not available for this item type.";
		itemDiv.appendChild(errorParagraph);
	}

	itemListDiv.appendChild(itemDiv); // Append the new div element to the item list
}

document.getElementById("add").disabled = true
document.getElementById("combine").disabled = true

function confirmChoice() {
	document.getElementById("itemType").disabled = true
	document.getElementById("durability").disabled = true
	document.getElementById("confirm").disabled = true
	document.getElementById("add").disabled = false
	document.getElementById("combine").disabled = false

	const type = document.getElementById("itemType").value
	max_durability = document.getElementById("durability").value
	if (max_durability.length == 0)
		max_durability = getDurability(type);
	else
		max_durability = Number(max_durability);
}

function addItem() {
	const type = document.getElementById("itemType").value
	var newItem = new Item(type, [], max_durability, max_durability, 0)
	displayItem(newItem)
}

function displayRes(minCost, minCombination) {
	var resDiv = document.getElementById("res")
	resDiv.innerHTML = ""
	var div = document.createElement("div")

	var typeParagraph = document.createElement("p")
	typeParagraph.textContent = "Total cost: " + minCost
	div.appendChild(typeParagraph)
	resDiv.appendChild(div)

	for (combinations of minCombination) {
		var combinationDiv = document.createElement("div")

		var txt = ""

		for (enchants of combinations[0].enchantments) {
			txt += enchants.type.charAt(0) + enchants.type.substring(1).toLowerCase() + " "
			// txt += enchants.type + " "
			if (enchants.actual_level == 1 && enchants.max_level != 1)
				txt += "I"
			else if (enchants.actual_level == 2)
				txt += "II"
			else if (enchants.actual_level == 3)
				txt += "III"
			else if (enchants.actual_level == 4)
				txt += "IV"
			else if (enchants.actual_level == 5)
				txt += "V"
			txt += " "
		}

		txt += "&emsp;+&emsp;"

		for (enchants of combinations[1].enchantments) {
			txt += enchants.type.charAt(0) + enchants.type.substring(1).toLowerCase() + " "
			// txt += enchants.type + " "
			if (enchants.actual_level == 1 && enchants.max_level != 1)
				txt += "I"
			else if (enchants.actual_level == 2)
				txt += "II"
			else if (enchants.actual_level == 3)
				txt += "III"
			else if (enchants.actual_level == 4)
				txt += "IV"
			else if (enchants.actual_level == 5)
				txt += "V"
			txt += " "
		}

		txt += "<br>" + "Coût intermédiaire: " + combinations[2]
		combinationDiv.innerHTML = txt
		resDiv.appendChild(combinationDiv)
	}
}

function combineItems() {
	var items = []; // Array to store all created items

	// Iterate over all item divs in the item list
	var itemListDiv = document.getElementById("itemList");
	var itemDivs = itemListDiv.getElementsByTagName("div");
	for (var i = 0; i < itemDivs.length; i++) {
		// Create an item object based on the div content (you may need to parse div content to extract item details)
		var item = createItemFromDiv(itemDivs[i]);
		items.push(item); // Add the item to the items array
	}
	// var final = createItemFromDiv(document.getElementById("finalItem").getElementsByTagName("div")[0], true)
	
	// Call your function to combine the items
	const res = test(items);

	const minCost = res[1]
	const minCombination = res[0]

	displayRes(minCost, minCombination)
}

function createItemFromDiv(itemDiv) {
	var itemType = ""; // Initialize itemType
	var enchantments = new Array(); // Initialize enchantments array
	
	// Find the paragraph element containing item type information
	var typeParagraph = itemDiv.querySelector("p");
	if (typeParagraph) {
		// Extract item type from the paragraph text content
		var typeMatch = typeParagraph.textContent.match(/Type:\s(.+)/);
		if (typeMatch) {
			itemType = typeMatch[1].trim(); // Extracted item type
		}
	}
	// Find select elements for enchantments within the item div
	var selectElements = itemDiv.querySelectorAll("select");
	selectElements.forEach(function(selectElement) {
		var enchantment = selectElement.getAttribute("name"); // Enchantment type
		var level = Number(selectElement.value); // Selected level (converted to integer)
		var max = Number(selectElement.getAttribute("max"))
		
		// Create an enchantment object and add it to the enchantments array
		// var enchantmentObj = { enchantment: enchantment, level: level };
		if (level != 0) {
			const unique = best.get(itemType).find((e) => e.enchantment == enchantment).unique
			var enchantmentObj = new Enchantment(enchantment, level, max, unique)
			enchantments.push(enchantmentObj);
		}
	});
	
	// Create and return the item object
	// var item = { type: itemType, enchantments: enchantments };
	var actual_durability_input = itemDiv.querySelector("input[type=number][id=actual_durability]");
	var actual_durability = actual_durability_input.value;
	if (actual_durability.length <= 0)
		actual_durability = max_durability;
	else
		actual_durability = Number(actual_durability);
	var item = new Item(itemType, enchantments, actual_durability, max_durability, 0)
	return item;
}

function barreMoiCa() {
	if (this.selectedIndex == 0)
		this.style.textDecoration = "line-through"
	else
		this.style.textDecoration = "none"

}
*/