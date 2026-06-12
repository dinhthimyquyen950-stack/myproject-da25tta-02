const products = [
    {
        id: "1",
        name: "<b>Vòng tay handmade</b>",
        price: "34k",
        description: "Vòng tay handmade dây rút ba màu: hồng phấn, hồng nhạt và vàng.<br>",
        image: "../assets/images/vongtay.webp",
        link: "chi-tiet.html",
    },

    {
        id: "2",
        name: "<b>Móc khóa</b>",
        price: "55k",
        description: "Công dụng : làm móc khoá treo chìa khoá xe, chìa khoá nhà, làm móc khoá treo balo, làm quà tặng",
        image: "../assets/images/mockhoa.webp",
        link: "chi-tiet.html",
    },

    { 
        id: "3",
        name: "<b>Dây đeo điện thoại</b>",
        price: "58k",
        description: "Màu sắc: xanh dương, trắng, hồng<br>Kích thước: 15cm + 5cm phần dây đeo <br>Chất liệu: hạt nhựa, dây sáp, charm gốm.",
        image: "../assets/images/daydeodt.webp",
        link: "chi-tiet.html",
    },

    {
        id:"4",
        name: "<b>Sticker</b>",
        price: "10k",
        description: "Kích thước: 9.5 * 20CM<br>Màu sắc: Như được hiển thị<br>Trọng lượng: 10g<br>Số lượng: 1 cái ",
        image: "../assets/images/sticker.webp",
        link: "chi-tiet.html",
    },

    {
        id:"5",
        name: "<b>Giá đỡ laptop</b>",
        price: "183k",
        description: "Có 7 mức để điều chỉnh và tạo góc độ mới Góc nhìn có thể điều chỉnh 15 ° - 45 °<br>Giúp ngồi đúng tư thế, thẳng cột sống, tránh gù lưng, vẹo cột sống, mỏi lưng, mỏi vai gáy.<br>Giữ khoảng cách an toàn với mắt, bảo vệ mắt tránh cận thị, các tật về mắt..",
        image: "../assets/images/giado.webp",
        link: "chi-tiet.html",
    },
     {
        id:"6",
        name: "<b>Bóp viết hoa nhí</b>",
        price: "70k",
        description: "Túi đựng bút vải bông KAMI TB55 hoa nhí Hộp bút vải lông mềm họa tiết gấu thỏ ,túi đựng mỹ phẩm phong cách Hàn Quốc<br>Hộp bút vải bông hoạ tiết gấu Hàn Quốc đa năng với ngăn lớn, có thể đáp ứng nhu cầu người dùng khác nhau.<br>Túi đựng bút cute sức chứa lớn lên tới hơn 30 bút và các loại phụ kiện lớn như washi tape, highlight, sticker,...",
        image: "../assets/images/bopviet.webp",
        link: "chi-tiet.html",
    },
    {
        id: "7",
        name: "<b>Vở lò xo</b>",
        price: "35k",
        description: "Sổ lò xo kích thước B5 (17x25cm) với 120 trang định lượng giấy (độ dày giấy) 100GSM - đảm bảo dày hơn vở học sinh bình thường nên cho dù bạn dùng 3 lớp mực highlight vẫn không bị lem đâu nha!!! Bìa nhựa mặt trước và mặt sau hạn chế được việc quăn góc. <br>Lưu ý: đây là sổ lò xo, không thêm bớt giấy và mở còng được như sổ còng (binder) ",
        image: "../assets/images/notebook.webp",
        link: "chi-tiet.html",
    },
    {
        id:"8",
        name: "<b>Bút xóa</b>",
        price: "7k",
        description: "Kích thước: 5 * 5 * 5cm<br>Màu: Xanh lam / xanh lá cây / trắng / hồng<br>Trọng lượng: 1 CÁI 27g / A Bộ 127g<br>Chất liệu: Nhựa ",
        image: "../assets/images/butxoa.webp",
        link: "chi-tiet.html",
    },
];

function createItem(obj) {
    // xác định khung chứa product-list
    const listProduct = document.getElementById("product-list");

    // tạo 1 container có class="item"
    const item = document.createElement("div");
    item.setAttribute("class", "item col card");

    // tạo container chứa hình ảnh
    const containerImage = document.createElement("div");
    containerImage.setAttribute("class", "image card-body");
    
    // tạo ảnh
    const img = document.createElement("img");
    img.setAttribute("src", obj.image);
    img.setAttribute("alt", obj.name);
    img.setAttribute("style", "width:100%; max-width:150px;");
    img.setAttribute("class", "card-img-top rounded-circle");

    // đưa ảnh vào khung chứa ảnh
    containerImage.appendChild(img);

    // tạo container chứa thông tin sản phẩm
    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class", "info");

    // tạo <p> chứa tên sản phẩm
    const nameProduct = document.createElement("p");
    nameProduct.innerHTML = obj.name;
    nameProduct.setAttribute("class", "card-title text-dark");

    // tạo <p> chứa giá sản phẩm
    const price = document.createElement("p");
    price.innerHTML = obj.price + "/1 sản phẩm";

    // tạo <p> chứa mô tả ngắn
    const description = document.createElement("p");
    description.innerHTML = obj.description;

    // tạo <a> chứa liên kết
    const linkProduct = document.createElement("a");
    linkProduct.innerHTML = "Xem chi tiết";
    linkProduct.href = obj.link + "?masp=" + obj.id;
    linkProduct.setAttribute("class", "btn btn-info");

    // gắn các phần tử vào khung chứa info
    containerInfo.appendChild(nameProduct);
    containerInfo.appendChild(price);
    containerInfo.appendChild(description);
    containerInfo.appendChild(linkProduct);

    // thêm khung chứa image và info vào item
    item.appendChild(containerImage);
    item.appendChild(containerInfo);

    // thêm item vào danh sách sản phẩm
    listProduct.appendChild(item);
}

function loadAllProducts(objArray) {
    let i;
    for (i = 0; i < objArray.length; i++) {
        createItem(objArray[i]);
    }
}