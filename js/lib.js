const products = [
    {
        id: "1",
        name: "Vòng tay handmade",
        price: "34k",
        description: "Vòng tay handmade dây rút ba màu: hồng phấn, hồng nhạt và vàng.",
        image: "../assets/images/vongtay.webp",
        link: "chi-tiet.html",
    },
    {
        id: "2",
        name: "Móc khóa",
        price: "55k",
        description: "Dùng làm móc khóa treo chìa khóa, balo hoặc làm quà tặng nhỏ xinh.",
        image: "../assets/images/mockhoa.webp",
        link: "chi-tiet.html",
    },
    {
        id: "3",
        name: "Dây đeo điện thoại",
        price: "58k",
        description: "Màu sắc: xanh dương, trắng, hồng.<br>Kích thước: 15cm + 5cm phần dây đeo.<br>Chất liệu: hạt nhựa, dây sáp, charm gốm.",
        image: "../assets/images/daydeodt.webp",
        link: "chi-tiet.html",
    },
    {
        id: "4",
        name: "Sticker",
        price: "10k",
        description: "Kích thước: 9.5 x 20cm.<br>Màu sắc: như hình hiển thị.<br>Trọng lượng: 10g.",
        image: "../assets/images/sticker.webp",
        link: "chi-tiet.html",
    },
    {
        id: "5",
        name: "Giá đỡ laptop",
        price: "183k",
        description: "Có 7 mức điều chỉnh, tạo góc nhìn từ 15 đến 45 độ. Giúp ngồi đúng tư thế, giảm mỏi lưng, vai gáy và giữ khoảng cách an toàn với mắt.",
        image: "../assets/images/giado.webp",
        link: "chi-tiet.html",
    },
    {
        id: "6",
        name: "Bóp viết hoa nhí",
        price: "70k",
        description: "Túi đựng bút vải bông họa tiết dễ thương, sức chứa lớn, phù hợp để đựng bút, mỹ phẩm hoặc phụ kiện nhỏ.",
        image: "../assets/images/bopviet.webp",
        link: "chi-tiet.html",
    },
    {
        id: "7",
        name: "Vở lò xo",
        price: "35k",
        description: "Sổ lò xo kích thước B5, 120 trang, giấy 100GSM dày dặn. Bìa nhựa giúp hạn chế quăn góc khi sử dụng.",
        image: "../assets/images/notebook.webp",
        link: "chi-tiet.html",
    },
    {
        id: "8",
        name: "Bút xóa",
        price: "7k",
        description: "Kích thước: 5 x 5 x 5cm.<br>Màu: xanh lam, xanh lá cây, trắng, hồng.<br>Chất liệu: nhựa.",
        image: "../assets/images/butxoa.webp",
        link: "chi-tiet.html",
    },
];

function createItem(obj) {
    const listProduct = document.getElementById("product-list");
    if (!listProduct) return;

    const item = document.createElement("article");
    item.className = "product-card";

    const img = document.createElement("img");
    img.src = obj.image;
    img.alt = obj.name;

    const nameProduct = document.createElement("h2");
    nameProduct.textContent = obj.name;

    const price = document.createElement("p");
    price.className = "price";
    price.textContent = obj.price + " / sản phẩm";

    const description = document.createElement("p");
    description.className = "description";
    description.innerHTML = obj.description;

    const linkProduct = document.createElement("a");
    linkProduct.textContent = "Xem chi tiết";
    linkProduct.href = obj.link + "?masp=" + obj.id;
    linkProduct.className = "button-link";

    item.appendChild(img);
    item.appendChild(nameProduct);
    item.appendChild(price);
    item.appendChild(description);
    item.appendChild(linkProduct);
    listProduct.appendChild(item);
}

function loadAllProducts(objArray) {
    for (let i = 0; i < objArray.length; i++) {
        createItem(objArray[i]);
    }
}
