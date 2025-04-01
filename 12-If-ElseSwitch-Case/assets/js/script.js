let dizel_price = 0.9;
let normal_price = 1;
let premium_price = 1.5;

let fuel_price = 0;
let fuel_normal = "";

let fuel = prompt(
  `fuel növünü seçin:\n1. Dizel (${dizel_price} AZN)\n2. normal (${normal_price} AZN)\n3. Premium (${premium_price} AZN)`
);

if (fuel !== "1" && fuel !== "2" && fuel !== "3") {
  alert("Lütfən, düzgün fuel Tipi daxil edin.");
}
else {
  if (fuel == "1") {
    fuel_price = dizel_price;
    fuel_normal = "Dizel";
  }
  
  else if (fuel == "2") {
    fuel_price = normal_price;
    fuel_normal = "normal";
  }
  else if (fuel == "3") {
    fuel_price = premium_price;
    fuel_normal = "Premium";
  }

  let miqdar = prompt("Almaq istədiyiniz yanacağın miqdarını daxil edin (litrlə):");
  let budce = prompt("Mövcud pulunuzu daxil edin (AZN):");

  let umumidir = fuel_price * miqdar;

  if (budce >= umumidir) {
    let qalan = budce - umumidir;
    alert(
      "Alış uğurla tamamlandı!\nSeçilmiş fuel: " +
        fuel_normal +
        "\nÜmumi dəyər: " +
        umumidir +
        " AZN\nQalan balans: " +
        qalan +
        " AZN"
    );
  }
  else {
    let eksik = umumidir - budce;
    alert(
      "Kifayət qədər pul yoxdur!\nSeçilmiş fuel: " +
        fuel_normal +
        "\nÜmumi dəyər: " +
        umumidir +
        " AZN\nCari balans: " +
        budce +
        " AZN\nƏskik məbləğ: " +
        eksik +
        " AZN"
    );
  }
}

// task 2 ///////

let winter = "Dekabr, Yanvar, Fevral";
let summer = "Mart, Aprel, May";
let spring = "İyun, İyul, Avqust";
let autumn = "Sentyabr, Oktyabr, Noyabr";

let season = prompt(`Fəsil seç: 
1. Qış
2. Yaz
3. Yay
4. Payız`);

switch (season) {
  case "1":
    alert(`Qış ayları: ${winter}`);
    break;
  case "2":
    alert(`Yaz ayları: ${summer}`);
    break;
  case "3":
    alert(`Yay ayları: ${spring}`);
    break;
  case "4":
    alert(`Payız ayları: ${autumn}`);
    break;
  default:
    alert(`Düzgün daxil et!`);
    break;
}
