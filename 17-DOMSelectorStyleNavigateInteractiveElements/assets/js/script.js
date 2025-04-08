// 2 

const app = document.getElementById('app');
const card = document.createElement('div');
card.style.margin = '50px';
card.style.width = '300px';
card.style.border = '1px solid black';
card.style.padding = '10px';
card.className = 'card'; 
app.appendChild(card);


const heart = document.createElement('div');
heart.style.display = 'inline-flex';
heart.style.alignItems = 'center';
heart.style.justifyContent = 'center';
heart.style.width = '30px';
heart.style.height = '30px';
heart.style.borderRadius = '50%';
heart.style.backgroundColor = 'silver';
heart.style.position = 'absolute';
heart.style.top = '15px';
heart.style.right = '15px';
heart.style.cursor = 'pointer';
heart.className = 'heart';
card.appendChild(heart);

const imageContainer = document.createElement('div');
imageContainer.style.width = '100%';
imageContainer.style.height = '300px';
imageContainer.style.position = 'relative';
imageContainer.className = 'image';

const img = document.createElement('img');
img.style.width = '100%';
img.style.height = '100%';
img.style.borderRadius = '10px';
img.src = 'https://fastly.picsum.photos/id/161/200/300'; 
img.alt = '';
imageContainer.appendChild(img);

card.appendChild(imageContainer);


const cardContent = document.createElement('div');
cardContent.style.display = 'flex';
cardContent.style.flexDirection = 'column';
cardContent.style.alignItems = 'center';
cardContent.style.gap = '10px';
cardContent.style.marginTop = '20px';
cardContent.style.color = 'burlywood';
cardContent.className = 'cardContent';

const cardPrice = document.createElement('div');
cardPrice.style.display = 'inline-block';
cardPrice.style.padding = '5px';
cardPrice.style.borderRadius = '5px';
cardPrice.style.backgroundColor = 'rgb(95, 94, 91)';
cardPrice.textContent = '$99.99';
cardPrice.className = 'cardPrice';
cardContent.appendChild(cardPrice);

card.appendChild(cardContent);


const shopBtn = document.createElement('button');
shopBtn.style.width = '100%';
shopBtn.style.padding = '10px';
shopBtn.style.backgroundColor = 'skyblue';
shopBtn.style.border = 'none';
shopBtn.style.cursor = 'pointer';
shopBtn.style.color = 'white';
shopBtn.style.textTransform = 'uppercase';
shopBtn.style.borderRadius = '5px';
shopBtn.style.fontWeight = 'bold';
shopBtn.textContent = 'Add to Cart';
shopBtn.className = 'shopBtn';
card.appendChild(shopBtn);



// 2.1


const card = document.createElement("div");
card.style.border = "1px solid #ddd";
card.style.borderRadius = "10px";
card.style.overflow = "hidden";
card.style.width = "300px";
card.style.fontFamily = "Arial, sans-serif";
card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
card.style.margin = "20px";


const img = document.createElement("img");
img.src = "https://picsum.photos/200/300"; 
img.style.width = "100%";
img.style.height = "auto";
card.appendChild(img);


const info = document.createElement("div");
info.style.padding = "15px";


const subtitle = document.createElement("div");
subtitle.textContent = "DETACHED HOUSE • 5Y OLD";
subtitle.style.fontSize = "12px";
subtitle.style.color = "#555";
subtitle.style.marginBottom = "5px";
info.appendChild(subtitle);
const price = document.createElement("div");
price.textContent = "$750,000";
price.style.fontSize = "24px";
price.style.fontWeight = "bold";
price.style.marginBottom = "5px";
info.appendChild(price);


const address = document.createElement("div");
address.textContent = "742 Evergreen Terrace";
address.style.fontSize = "14px";
address.style.color = "#666";
address.style.marginBottom = "15px";
info.appendChild(address);


const features = document.createElement("div");
features.style.display = "flex";
features.style.justifyContent = "space-between";
features.style.marginBottom = "15px";

const bedrooms = document.createElement("div");
bedrooms.innerHTML = "3 Bedrooms";

const bathrooms = document.createElement("div");
bathrooms.innerHTML = "2 Bathrooms";

features.appendChild(bedrooms);
features.appendChild(bathrooms);
info.appendChild(features);

const realtorBox = document.createElement("div");
realtorBox.style.borderTop = "1px solid #eee";
realtorBox.style.paddingTop = "10px";

const realtorName = document.createElement("div");
realtorName.textContent = "Tiffany Heffnerer";
realtorName.style.fontWeight = "bold";

const realtorPhone = document.createElement("div");
realtorPhone.textContent = "(555) 555-4321";
realtorPhone.style.fontSize = "14px";
realtorPhone.style.color = "#444";

realtorBox.appendChild(realtorName);
realtorBox.appendChild(realtorPhone);
info.appendChild(realtorBox);

card.appendChild(info);

document.body.appendChild(card);
