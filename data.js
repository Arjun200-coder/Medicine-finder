const medicines = [
    {
      name: "Disprin",
      price: "₹8.20",
      manufacturer: "Reckitt Benckisir",
      image: "https://5.imimg.com/data5/AK/EE/AW/SELLER-46942003/disprin-tablet.jpg",
      link: "https://www.1mg.com/otc/disprin-otc339942"
    },
    {
      name: "Digene",
      price: "₹8.40 for 10tbl",
      manufacturer: "Abbott",
      image: "https://5.imimg.com/data5/SELLER/Default/2020/12/UJ/JW/SA/69042153/digene-syrup.jpeg ",
      link: "https://www.1mg.com/otc/digene-tablet-mint-otc126688"
    },
    {
      name: "Benadryl",
      price: "₹58.00 for 100ml",
      manufacturer: "J&J",
      image: "https://c8.alamy.com/comp/C5RKEE/benadryl-allegy-sinus-tablets-C5RKEE.jpg",
      link: "https://www.1mg.com/otc/benadryl-cough-formula-syrup-otc315048"
    },
    {
      name: "Dolo 650",
      price: "₹10.50 for 15 tablets",
      manufacturer: "Micro Labs",
      image: "https://www.shutterstock.com/editorial/image-editorial/MeT3I540OdD0E8weNDIwMzI=/dolo-650-paracetamol-tablet-recorded-most-prescribed-1500w-12773147c.jpg",
      link: "https://www.1mg.com/drugs/dolo-650-tablet-6766"
    },
    {
        name: "Daraprin",
        price: "₹250.00",
        manufacturer: "Indica Laboratories",
        image: "https://dwaey.com/medrg/upload/1723992724.png",
        link: "https://www.1mg.com/drugs/daramin-25mg-tablet-201707 "
      },
      {
        name: "Daramin",
        price: "₹15.00",
        manufacturer: "Indica Laboratories",
        image: "https://www.netmeds.com/images/product-v1/600x600/1136339/daramin_25mg_tablet_10s_742022_0_0.jpg ",
        link: "https://www.1mg.com/drugs/daramin-25mg-tablet-201707 "
      },
      {
        name: "Zytiga",
        price: "₹75000",
        manufacturer: "Mylan Pharma ",
        image: "https://assets.mrmed.in/product-images/product-images-1719919503102-367500702-Zytiga%20250mg%20Tablet_103434.jpg",
        link: " https://www.apollopharmacy.in/medicine/mytera-250mg-tablet-120-s"
      },
      {
        name: "Glivec",
        price: "₹6600",
        manufacturer: "Natco Pharma ",
        image: "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/a0f76dfdb04146cfb0ec1f5099800eb6.jpg",
        link: "https://www.1mg.com/drugs/glivec-400mg-tablet-236606?srsltid=AfmBOornCUHbHOOOrbzDerFlKlCNwkmwUZQQ-SVLiJocqFiRtcstyCwq&wpsrc=Google+Organic+Search"
      },
      {
        name: "Veenat",
        price: "₹1500",
        manufacturer: "Natco Pharma ",
        image: "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/a5f53d8d234d45a695d7c6f59707c652.jpg",
        link: "https://www.1mg.com/drugs/veenat-400-tablet-14360?srsltid=AfmBOoozkKt5QjS2GyIzsogcO_R2FtOGzBoVQFn3fwsoCUwofa590wBc&wpsrc=Google+Organic+Search "
      },
      {
        name: "Paracetamol",
        price: "₹20-30 per tablets",
        manufacturer: "GlaxoSmithKline ",
        image: "https://5.imimg.com/data5/SELLER/Default/2022/9/QR/AF/MV/69966959/paracip-paracetamol-650-tablet.jpg ",
        link: " https://www.1mg.com/search/all?filter=true&name=Paracetamol"
      },
      {
        name: "Caplop",
        price: "₹20-30 per tablets",
        manufacturer: "GSK ",
        image: "https://drugstreet.in/wp-content/uploads/2023/12/1000046750.jpg ",
        link: " https://www.1mg.com/search/all?name=calpol"
      },
      {
        name: "Abitate",
        price: "₹29000",
        manufacturer: "RPG Life Sciences ",
        image: "https://assets.mrmed.in/product-images/product-images-1632405352428-700552497-100012_1.jpg ",
        link: " https://www.apollopharmacy.in/medicine/abitate-250mg-tab-120-s"
      },
      {
        name: "Combiflam",
        price: "₹20-30 per tablets",
        manufacturer: " Sanofi",
        image: "https://images.apollo247.in/pub/media/catalog/product/c/o/combiflam_tablet_20_s-1.png?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w ",
        link: "https://www.1mg.com/search/all?filter=true&name=Combiflam "
      },
      {
        name: "Brufen",
        price: "₹20-30 per tablets",
        manufacturer: "Abott ",
        image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUmWwHGkFj5M1SKY0GM-af-pHOyLMcLqRdQ&s",
        link: " https://www.1mg.com/search/all?name=brufen"
      },
      {
        name: "ORS",
        price: "₹ 15-25 per sachet",
        manufacturer: "Dabur ",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/W81928/prolyte-ors-orange-drink-sachet-21-gm-2-1654249497.jpg ",
        link: "https://www.1mg.com/search/all?name=ors "
      },
      {
        name: "Electral",
        price: "Rs 15-25 per sachet ",
        manufacturer: "FDC Ltd ",
        image: "https://m.media-amazon.com/images/I/81jrDrIJoNL.jpg ",
        link: "https://www.1mg.com/search/all?name=ors "
      },
      {
        name: "Vicks Vaporub",
        price: "Rs 40-60 for 25g",
        manufacturer: "Procter & Gamble ",
        image: " https://cdn01.pharmeasy.in/dam/products_otc/181140/vicks-vaporub-50ml-relief-from-cold-cough-headache-and-body-pain-2-1677525570.jpg",
        link: " https://www.1mg.com/search/all?name=Vicks%20Vaporub&st=vivks%20vaporup&sl=Vicks%20Vapor,Vicks%20Vaporub&s=Vicks%20Vaporub"
      },
      {
        name: "Amrutanjan",
        price: "Rs 40-60 for 25g",
        manufacturer: "Amrutanjan Healthcare ",
        image: "https://cdn01.pharmeasy.in/dam/products_otc/010715/amrutanjan-strong-doub-50-ml-2-1674209955.jpg?dim=400x0&dpr=1&q=100 ",
        link: "https://www.1mg.com/search/all?filter=true&name=Amrutanjan%20balm "
      },
      {
        name: "Benadryl",
        price: "Rs 50-80 per bottle (100 ml)",
        manufacturer: "Johnson & Johnson ",
        image: " https://images.apollo247.in/pub/media/catalog/product/b/e/ben0053_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w",
        link: "https://www.1mg.com/search/all?filter=true&name=Benadryl "
      },
      {
        name: "Augmentin 1000 Duo Tablet",
        price: "₹1000",
        manufacturer: " Alkem Laboratories ",
        image: "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/bodminug3xmfcubbrdix.jpg?format=auto ",
        link: " https://www.1mg.com/drugs/augmentin-1000-duo-tablet-163191"
      },
      {
        name: "Crestor",
        price: "₹732",
        manufacturer: "Astrazeneca ",
        image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Jd-k1uea3upVeTJNmtS8y9ASkNOwsxN8Uw&s",
        link: "https://www.1mg.com/drugs/crestor-40mg-tablet-932668 "
      },
      {
        name: "Lantus",
        price: "₹634",
        manufacturer: "Sanofi India Ltd ",
        image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3pt0WVYQOROwvBFQi4lo5Fy0HvifJla0VUw&s",
        link: "https://www.1mg.com/drugs/lantus-solostar-100iu-ml-solution-for-injection-69758 "
      },
      {
        name: "Basalog",
        price: "₹481",
        manufacturer: " Bicon",
        image: " https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/0c379a5816da4e63b74cd6889b2d382a.jpg?format=auto",
        link: "https://www.1mg.com/drugs/basalog-100iu-ml-refill-cartridge-164232 "
      },
      {
        name: "Tamiflu",
        price: "₹1238",
        manufacturer: "Roche Products India Pvt Ltd ",
        image: " https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/4/shutterstock_170422580.jpg",
        link: " https://www.1mg.com/drugs/tamiflu-75mg-capsule-682558"
      },
      {
        name: "Fluvir",
        price: "₹447",
        manufacturer: "Hetero Drugs Ltd ",
        image: "https://images.apollo247.in/pub/media/catalog/product/f/l/flu0174.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w ",
        link: "https://www.1mg.com/drugs/fluvir-75mg-capsule-25088 "
    },
    {
        name: "Eliquis",
        price: "₹1086",
        manufacturer: "Pfizer Ltd ",
        image: "https://5.imimg.com/data5/SELLER/Default/2022/9/KS/UI/TA/136059498/eliquis-5mg-tablet.jpg ",
        link: " https://www.1mg.com/drugs/eliquis-5mg-tablet-172700"
    },
    {
        name: "Apigat",
        price: "Rs 533",
        manufacturer: "Nacto Pharma Ltd",
        image: "https://www.practostatic.com/practopedia-images/v3/res-750/apigat-2-5-mg-tablet-30-s_15fa3947-9fad-47f2-bbed-8d5f500e66e9.JPG",
        link: "https://www.1mg.com/drugs/apigat-5-tablet-540276"
    }
];
