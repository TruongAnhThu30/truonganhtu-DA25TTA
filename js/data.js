const products = [
  {
    id: "nu1",
    name: "Quần Jeans Nữ",
    price: "399.000₫",
    desc: "Năng động, cá tính",
    img: "../assets/images/6.jpg",
    detail: "Quần jeans nữ form ôm, dễ phối đồ, phù hợp đi học đi chơi."
  },
  {
    id: "nu2",
    name: "Váy Thời Trang",
    price: "299.000₫",
    desc: "Nữ tính, hiện đại",
    img: "../assets/images/4.jpg",
    detail: `
  Váy thời trang nữ phong cách hiện đại, thiết kế trẻ trung giúp tôn dáng và mang lại sự tự tin cho người mặc. 
 </br> Chất liệu mềm mại, thoáng mát, phù hợp mặc đi học, đi chơi hoặc dạo phố. 
 </br> Dễ phối với giày sneaker hoặc cao gót, mang lại nhiều phong cách khác nhau từ năng động đến thanh lịch.
`
  },
  {
    id: "nu3",
    name: "Áo Thun Unisex",
    price: "250.000₫",
    desc: "Thoải mái, dễ phối",
    img: "../assets/images/5.webp",
    detail: `

      Chất liệu cotton cao cấp, mềm mại, thấm hút mồ hôi tốt, giúp bạn luôn thoải mái trong mọi hoạt động.<br>

      Form áo rộng vừa phải, dễ phối với quần jeans, short hoặc chân váy để tạo nhiều phong cách khác nhau.<br>

      Phù hợp mặc đi học, đi chơi, đi làm hoặc hoạt động ngoài trời. Đây là item basic nhưng không bao giờ lỗi thời.
    `
  },
{
    id: "nu4",
    name: "Outfit năng động",
    price: "399.000₫",
    desc: "Phong cách trẻ trung",
    img: "../assets/images/a02.jfif",
   detail: `
        Outfit năng động thiết kế trẻ trung, phù hợp xu hướng thời trang hiện đại, mang lại phong cách cá tính và thoải mái cho người mặc.<br>
        Chất liệu thoáng mát, dễ phối đồ, phù hợp đi học, đi chơi hoặc dạo phố.
        `
  },
   {
    id: "nu5",
    name: "Váy jean trắng",
    price: "199.000₫",
    desc: "Năng động, dễ phối đồ",
    img: "../assets/images/ao1.jfif",
    detail: `
Váy jean trắng thiết kế đơn giản nhưng nổi bật, mang lại vẻ trẻ trung và năng động.<br>
Chất liệu denim mềm, dễ phối với nhiều loại áo và giày khác nhau.
`
  },

  {
    id: "nu6",
    name: "Set đồ thanh lịch",
    price: "450.000₫",
    desc: "Ấm áp, cá tính",
    img: "../assets/images/ao3.jfif",
    detail: `
Set đồ thanh lịch mang phong cách nhẹ nhàng, sang trọng, phù hợp nhiều dịp khác nhau.<br>
Chất liệu vải mềm, thoáng mát, giúp người mặc luôn thoải mái và tự tin.
`
  },
{
  id: "nu7",
  name: "Quần Jeans Nữ",
  price: "399.000₫",
  desc: "Năng động, cá tính",
  img: "../assets/images/6.jfif",
  detail: `
Quần jeans nữ thiết kế trẻ trung, ôm dáng nhẹ giúp tôn lên vẻ đẹp tự nhiên của cơ thể.<br>
Chất liệu denim co giãn nhẹ, thoải mái khi mặc cả ngày dài, phù hợp đi học và đi chơi.
`
},
{
  id: "nu8",
  name: "Áo Kiểu",
  price: "450.000₫",
  desc: "Phong cách thanh lịch",
  img: "../assets/images/ao4.jpg",
  detail: `
Áo kiểu nữ phong cách thanh lịch, hiện đại, giúp người mặc trở nên sang trọng và tinh tế hơn.<br>
Chất liệu vải mềm, thoáng mát, dễ phối với chân váy hoặc quần tây.
`
},
{
  id: "nu9",
  name: "Outfit năng động",
  price: "289.000₫",
  desc: "Năng động, trẻ trung",
  img: "../assets/images/ao5.jpg",
  detail: `
Outfit năng động thiết kế hiện đại, mang lại phong cách trẻ trung và cá tính cho người mặc.<br>
Chất liệu thoáng mát, dễ phối đồ, phù hợp đi học, đi chơi hoặc dạo phố.
`
},
{
  id: "nu10",
  name: "Áo Sweater",
  price: "329.000₫",
  desc: "Thoải mái, ấm áp",
  img: "../assets/images/ao6.jpg",
  detail: `
Áo sweater nữ thiết kế đơn giản, mang lại cảm giác ấm áp và thoải mái khi mặc.<br>
Chất liệu dày dặn, phù hợp thời tiết se lạnh hoặc đi học, đi chơi.
`
},
{
  id: "nu11",
  name: "Chân váy trắng",
  price: "599.000₫",
  desc: "Sang trọng, thời thượng",
  img: "../assets/images/ao7.jpg",
  detail: `
Chân váy trắng thiết kế thanh lịch, giúp tôn dáng và mang lại vẻ ngoài sang trọng.<br>
Dễ phối với áo sơ mi hoặc áo kiểu, phù hợp đi làm hoặc dự tiệc nhẹ.
`
},
{
  id: "nu12",
  name: "Váy đi tiệc",
  price: "179.000₫",
  desc: "Năng động, cá tính",
  img: "../assets/images/ao8.jpg",
  detail: `
Váy đi tiệc thiết kế nổi bật, giúp bạn trở nên thu hút trong mọi buổi tiệc.<br>
Chất liệu mềm mại, nhẹ nhàng, tạo cảm giác thoải mái khi mặc.
`
},
{
  id: "nu13",
  name: "Áo Thun",
  price: "249.000₫",
  desc: "Thoáng mát, năng động",
  img: "../assets/images/ao8.png",
  detail: `
Áo thun thể thao thiết kế năng động, phù hợp cho các hoạt động ngoài trời.<br>
Chất liệu thoáng khí, thấm hút mồ hôi tốt, mang lại cảm giác dễ chịu.
`
},
{
  id: "nam14",
  name: "Áo Thun Nam Basic",
  price: "220.000₫",
  desc: "Trẻ trung, năng động",
  img: "../assets/images/nam1.jpg",
  detail: `
    Áo thun nam basic thiết kế đơn giản nhưng hiện đại, phù hợp nhiều phong cách khác nhau.<br>
    Chất liệu cotton mềm mại, thoáng mát, thấm hút mồ hôi tốt giúp mặc cả ngày vẫn thoải mái.
  `
},

{
  id: "nam15",
  name: "Áo Nam Đi Du Lịch Hè",
  price: "299.000₫",
  desc: "Thoải mái, hiện đại",
  img: "../assets/images/nam2.jfif",
  detail: `
    Áo du lịch hè dành cho nam với thiết kế năng động, phù hợp các chuyến đi chơi, du lịch.<br>
    Vải nhẹ, thoáng khí, dễ giặt và nhanh khô, giúp bạn luôn thoải mái khi vận động.
  `
},

{
  id: "nam16",
  name: "Áo Khoác Nam",
  price: "450.000₫",
  desc: "Phong cách cá tính",
  img: "../assets/images/nam3.png",
  detail: `
    Áo khoác nam phong cách hiện đại, giúp giữ ấm và tạo điểm nhấn thời trang mạnh mẽ.<br>
    Form áo chuẩn, dễ phối với jeans hoặc áo thun bên trong.
  `
},

{
  id: "nam17",
  name: "Quần Jeans Nam",
  price: "399.000₫",
  desc: "Năng động mỗi ngày",
  img: "../assets/images/nam4.jpeg",
  detail: `
    Quần jeans nam thiết kế trẻ trung, phù hợp đi học, đi làm hoặc đi chơi.<br>
    Chất liệu denim bền đẹp, co giãn nhẹ giúp dễ dàng vận động.
  `
},

{
  id: "nam18",
  name: "Áo Sơ Mi Nam",
  price: "279.000₫",
  desc: "Thoải mái",
  img: "../assets/images/nam5.jpg",
  detail: `
    Áo sơ mi nam lịch lãm, phù hợp môi trường công sở và sự kiện quan trọng.<br>
    Chất vải mịn, ít nhăn, dễ ủi và giữ form tốt khi mặc.
  `
},

{
  id: "nam19",
  name: "Áo Hoodie Nam",
  price: "420.000₫",
  desc: "Ấm áp, trẻ trung",
  img: "../assets/images/nam6.jfif",
  detail: `
    Áo hoodie nam phong cách streetwear, phù hợp thời tiết lạnh hoặc đi chơi.<br>
    Vải nỉ dày dặn, giữ ấm tốt nhưng vẫn thoải mái khi vận động.
  `
},

{
  id: "nam20",
  name: "Set Thời Trang Nam",
  price: "599.000₫",
  desc: "Xu hướng 2026",
  img: "../assets/images/nam7.jpg",
  detail: `
    Set đồ nam theo xu hướng hiện đại 2026, mang phong cách trẻ trung và nổi bật.<br>
    Dễ phối, phù hợp đi chơi, chụp ảnh hoặc dạo phố.
  `
},

{
  id: "nam21",
  name: "Sơ Mi Nam Trắng",
  price: "250.000₫",
  desc: "Đẳng cấp, thời thượng",
  img: "../assets/images/nam9.webp",
  detail: `
    Áo sơ mi trắng nam đơn giản nhưng sang trọng, phù hợp mọi hoàn cảnh.<br>
    Dễ phối với quần tây hoặc jeans, tạo phong cách lịch lãm.
  `
},

{
  id: "nam22",
  name: "Quần Kaki Nam",
  price: "199.000₫",
  desc: "Thoải mái",
  img: "../assets/images/nam11.png",
  detail: `
    Quần kaki nam form chuẩn, mang lại sự thoải mái khi mặc hàng ngày.<br>
    Chất vải bền, ít nhăn, dễ phối đồ với áo thun hoặc sơ mi.
  `
},

{
  id: "nam23",
  name: "Outfit Nam Hiện Đại",
  price: "300.000₫",
  desc: "Hiện đại",
  img: "../assets/images/nam12.jfif",
  detail: `
    Outfit nam phong cách hiện đại, trẻ trung và dễ mặc trong nhiều dịp.<br>
    Thiết kế đơn giản nhưng vẫn tạo điểm nhấn thời trang.
  `
},
{
  id: "giay24",
  name: "Giày Thể Thao",
  price: "799.000₫",
  desc: "Êm ái, thời trang",
  img: "../assets/images/7.jfif",
  detail: `
    Giày thể thao thiết kế hiện đại, mang lại sự thoải mái khi di chuyển.<br>
    Đế êm, nhẹ, phù hợp đi học, đi chơi hoặc vận động hằng ngày.
  `
},

{
  id: "giay25",
  name: "Blazer Nam",
  price: "699.000₫",
  desc: "Đẳng cấp, thời thượng",
  img: "../assets/images/nam8.jfif",
  detail: `
    Blazer nam phong cách lịch lãm, phù hợp đi làm và sự kiện quan trọng.<br>
    Form đứng dáng, dễ phối với sơ mi hoặc áo thun bên trong.
  `
},

{
  id: "giay26",
  name: "Giày Sneaker Trắng",
  price: "599.000₫",
  desc: "Trẻ trung, dễ phối đồ",
  img: "../assets/images/giay1.jfif",
  detail: `
    Sneaker trắng basic dễ phối đồ, phù hợp nhiều phong cách khác nhau.<br>
    Chất liệu bền, đế êm giúp di chuyển thoải mái cả ngày.
  `
},

{
  id: "giay27",
  name: "Giày Thể Thao Nam",
  price: "799.000₫",
  desc: "Êm ái, năng động",
  img: "../assets/images/giay2.jfif",
  detail: `
    Giày thể thao nam thiết kế khỏe khoắn, phù hợp vận động và đi lại nhiều.<br>
    Đế chống trơn trượt, hỗ trợ di chuyển an toàn.
  `
},

{
  id: "giay28",
  name: "Giày Thể Thao Hiện Đại",
  price: "649.000₫",
  desc: "Phong cách hiện đại",
  img: "../assets/images/giay3.jfif",
  detail: `
    Thiết kế trẻ trung theo xu hướng thời trang mới.<br>
    Nhẹ, êm và phù hợp nhiều hoạt động hàng ngày.
  `
},

{
  id: "giay29",
  name: "Giày Chạy Bộ",
  price: "899.000₫",
  desc: "Nhẹ nhàng, thoải mái",
  img: "../assets/images/giay4.jfif",
  detail: `
    Giày chạy bộ chuyên dụng giúp giảm áp lực lên chân khi vận động.<br>
    Thoáng khí, hỗ trợ tốt khi tập luyện thể thao.
  `
},

{
  id: "giay30",
  name: "Giày Nữ",
  price: "699.000₫",
  desc: "Phong cách trẻ trung",
  img: "../assets/images/giay6.jfif",
  detail: `
    Giày nữ thiết kế nhẹ nhàng, dễ phối với váy hoặc quần jean.<br>
    Mang lại sự thoải mái và nữ tính khi sử dụng.
  `
},

{
  id: "giay31",
  name: "Giày Bata",
  price: "599.000₫",
  desc: "Cổ điển, cá tính",
  img: "../assets/images/giay7.jfif",
  detail: `
    Giày bata phong cách đơn giản, mang hơi hướng cổ điển.<br>
    Phù hợp đi học, đi chơi và dễ phối đồ.
  `
},

{
  id: "giay32",
  name: "Giày Búp Bê",
  price: "899.000₫",
  desc: "Năng động, êm ái",
  img: "../assets/images/giay8.jfif",
  detail: `
    Giày búp bê nữ tính, nhẹ nhàng và dễ mang.<br>
    Phù hợp đi học, đi làm hoặc dạo phố.
  `
},

{
  id: "giay33",
  name: "Giày Nữ Thoáng Khí",
  price: "799.000₫",
  desc: "Nhẹ nhàng, thoáng khí",
  img: "../assets/images/giay9.jpg",
  detail: `
    Giày nữ thiết kế thoáng khí, phù hợp sử dụng cả ngày dài.<br>
    Êm chân, dễ phối đồ và cực kỳ thoải mái.
  `
},

{
  id: "giay34",
  name: "Giày Bốt Thời Thượng",
  price: "1.299.000₫",
  desc: "Thời thượng, đẳng cấp",
  img: "../assets/images/giay10.webp",
  detail: `
    Giày bốt phong cách sang trọng, phù hợp thời tiết lạnh hoặc outfit cá tính.<br>
    Chất liệu bền, giữ form tốt và tăng độ thời trang cho người mang.
  `
},
{
  id: "non35",
  name: "Nón Kết Basic",
  price: "149.000₫",
  desc: "Đơn giản, trẻ trung",
  img: "../assets/images/pk1.jfif",
  detail: `
    Nón kết basic với thiết kế đơn giản, trẻ trung, phù hợp cho cả nam và nữ.<br>
    Chất liệu bền đẹp, thoáng mát, dễ phối cùng nhiều phong cách thời trang khác nhau.
  `
},

{
  id: "non36",
  name: "Nón Kết Thời Trang",
  price: "179.000₫",
  desc: "Cá tính, năng động",
  img: "../assets/images/pk2.jfif",
  detail: `
    Nón kết thời trang mang phong cách cá tính, tạo điểm nhấn nổi bật cho trang phục.<br>
    Thiết kế hiện đại, ôm vừa vặn, thích hợp đi học, đi chơi hoặc du lịch.
  `
},

{
  id: "non37",
  name: "Kính Mát Thời Trang",
  price: "249.000₫",
  desc: "Sang trọng, hiện đại",
  img: "../assets/images/pk3.png",
  detail: `
    Kính mát thời trang với kiểu dáng hiện đại, giúp bảo vệ mắt trước ánh nắng mặt trời.<br>
    Phù hợp sử dụng hằng ngày và dễ kết hợp với nhiều phong cách thời trang.
  `
},

{
  id: "non38",
  name: "Kính Chống Tia UV",
  price: "299.000₫",
  desc: "Bảo vệ mắt, thời thượng",
  img: "../assets/images/pk4.png",
  detail: `
    Kính chống tia UV giúp hạn chế tác hại của ánh nắng, bảo vệ đôi mắt hiệu quả.<br>
    Thiết kế thời trang, gọng nhẹ, mang lại cảm giác thoải mái khi sử dụng.
  `
},

{
  id: "non39",
  name: "Ví Da Nam",
  price: "299.000₫",
  desc: "Lịch lãm, sang trọng",
  img: "../assets/images/pk5.jfif",
  detail: `
    Ví da nam được thiết kế sang trọng với nhiều ngăn tiện lợi để đựng tiền và thẻ.<br>
    Chất liệu da cao cấp, đường may chắc chắn, phù hợp sử dụng hằng ngày hoặc làm quà tặng.
  `
},

{
  id: "non40",
  name: "Túi Xách Nữ HAPAS",
  price: "1.000.000₫",
  desc: "Thanh lịch, thời trang",
  img: "../assets/images/pk6.jfif",
  detail: `
    Túi xách nữ HAPAS mang phong cách thanh lịch, phù hợp đi làm, đi chơi hoặc dự tiệc.<br>
    Thiết kế rộng rãi, chất liệu cao cấp cùng kiểu dáng hiện đại giúp tôn lên vẻ đẹp của người sử dụng.
  `
},

{
  id: "non41",
  name: "Túi Xách Nữ",
  price: "1.200.000₫",
  desc: "Thanh lịch",
  img: "../assets/images/pk8.jfif",
  detail: `
    Túi xách nữ thiết kế tinh tế với kiểu dáng hiện đại, dễ phối cùng nhiều loại trang phục.<br>
    Không gian chứa rộng rãi, chất liệu bền đẹp, thích hợp sử dụng hằng ngày hoặc trong những dịp đặc biệt.
  `
}
];
