// QUESTÃO 01

function numbersDelimeted() {
  var a = Number(document.getElementById("number01").value);
  var b = Number(document.getElementById("number02").value);
  var array = [];

  for (i = a; i < b + 1; i++) {
    array.push(i);
  }
  document.getElementById("numbers").innerHTML =
    "Os valores entre " + a + " e " + b + " são: " + array;
}

// QUESTÃO 02

let itemList = [];

function addValue() {
  if (document.getElementById("itemToList").value == "") {
    return (document.getElementById("list").innerHTML = "");
  } else {
    let item = document.getElementById("itemToList").value;

    itemList.push(item);

    document.getElementById("list").innerHTML = "Item adicionado: " + item;
    document.getElementById("itemToList").value = "";
  }
}

function clearValue() {
  let size = itemList.length;
  for (i = 0; i <= size; i++) {
    itemList.pop(i);
  }

  document.getElementById("list").innerHTML = itemList + "Lista Vazia";
}

function showValue() {
  document.getElementById("list").innerHTML = itemList;
}

//QUESTÃO 03

let menList = [];
let womenList = [];

function addManWomanValue() {
  clearTable();
  if (document.getElementById("name").value == "") {
    return (document.getElementById("menWomenList").innerHTML = "");
  } else if (document.getElementById("gender").value == "M") {
    console.log("homem");

    let man = document.getElementById("name").value;

    menList.push(man);

    document.getElementById("menWomenList").innerHTML =
      man + " foi adicionado!";
    document.getElementById("name").value = "";
  } else {
    console.log("mulher");

    let woman = document.getElementById("name").value;

    womenList.push(woman);

    document.getElementById("menWomenList").innerHTML =
      woman + " foi adicionado!";
    document.getElementById("name").value = "";
  }
}

function clearFullList() {
  let sizeMen = menList.length;
  let sizeWomen = womenList.length;

  for (i = 0; i <= sizeMen; i++) {
    menList.pop(i);
  }
  for (i = 0; i <= sizeWomen; i++) {
    womenList.pop(i);
  }

  clearTable();
  document.getElementById("menWomenList").innerHTML = itemList + "Lista Vazia";
}

function showMenWoman() {
  clearTable();

  document.getElementById("womenList").innerHTML =
    "Lista Masculina : " + menList;

  document.getElementById("menList").innerHTML = "Lista Feminina: " + womenList;
}

function clearTable() {
  document.getElementById("womenList").innerHTML = "";
  document.getElementById("menList").innerHTML = "";
  document.getElementById("menWomenList").innerHTML = "";
}
