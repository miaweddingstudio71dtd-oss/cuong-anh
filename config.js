/* config.js - cấu hình dễ chỉnh
   Nếu anh có iframe embed chính xác từ Google Maps (Share > Embed a map),
   paste src vào mapEmbed. Nếu không, mapEmbed để trống và script sẽ
   hiển thị một bản đồ tìm kiếm bằng mapUrl.
*/
const WEDDING_CONFIG = {
  groomName: "Nhật Cường ",
  brideName: " Vân Anh",

  weddingDate: "11/13/2025  08:30:00",
  location: " Thường Tín, Hà Nội",

  // link mở ngoài (mở app Google Maps trên điện thoại)
  mapUrl: "https://maps.app.goo.gl/vdALbaPfaqZd3pEEA",

  // link embed hiển thị trực tiếp trong trang
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4695.542154099331!2d105.85885417525098!3d20.821958780776086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ5JzE5LjEiTiAxMDXCsDUxJzQxLjEiRQ!5e1!3m2!1svi!2s!4v1761982014728!5m2!1svi!2s",

  heroImage: "assets/hero-cover.jpg",
  doorLeft: "assets/A.png",
  doorRight: "assets/B.png",

  music: "assets/Music.mp3",

  effectImage: "assets/effect.png",
  effectEnabled: true,

  videoUrl: "https://www.youtube.com/embed/0adNIRa2Fro",

  gallery: [
    {src:"assets/g1.jpg"},
    {src:"assets/g2.jpg"},
    {src:"assets/g3.jpg"},
    {src:"assets/g4.jpg"},
    {src:"assets/g5.jpg"},
    {src:"assets/g6.jpg"},
    {src:"assets/g7.jpg"},
    {src:"assets/g8.jpg"},
    {src:"assets/g9.jpg"},
    {src:"assets/g10.jpg"},
	{src:"assets/g11.jpg"},
    {src:"assets/g12.jpg"},
    {src:"assets/g13.jpg"},
    {src:"assets/g14.jpg"},
	{src:"assets/g15.jpg"},
    {src:"assets/g16.jpg"}
  ],

  invitation: {
    groomSide: {
      avatar: "assets/g1.jpg",
      name: "Nhật Cường",
      parents: "Bố: Trần Công Tân<br>Mẹ: Nguyễn Thị Nhàn",
      address: "Địa chỉ: 8 Tống Duy Tân"
    },
    brideSide: {
      avatar: "assets/g2.jpg",
      name: "Vân Anh",
      parents: "Bố: Nguyễn Khắc Thanh<br>Mẹ: Đỗ Thị Hương ",
      address: "Địa chỉ: Đông Cứu, Thượng Phúc , Hà Nội"
    }
  },

  qr: [
    {src: "assets/QR01.jpg", title: "NGUYEN THI VAN ANH", info: "Chân thành cảm ơn !"}
  ],
};
