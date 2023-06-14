

// Kiểm tra xem trình duyệt có hỗ trợ Local Storage không
if (typeof(Storage) !== "undefined") {
    // console.log("có hỗ trợ");
    //Thêm dữ liệu vào LocalStorage

    // localStorage.setItem("username","namnv");
    // localStorage.setItem("password","admin");
    //Muốn lấy dữ liệu trong LocalStorage

    console.log(localStorage.getItem("username"));
    console.log(localStorage.getItem("password"));
    //xóa
    localStorage.removeItem("username");
    localStorage.clear();//xoa toàn bộ

}else{
    alert("Trình duyệt này không hỗ trợ local Storage")
}