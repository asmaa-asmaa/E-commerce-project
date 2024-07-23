import { ref } from "vue";
const productsMixin = () => {
  const categories = ref([]);
  const getProducts = async () => {
    await fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((res) => (categories.value = res.splice(0, 10)));
  };
  const prodCat = ref([]);
  const getProductsbycategory = async (category) => {
    await fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((res) => (prodCat.value = res.products.slice(0, 8)));
  };

  const pagiPro = ref([]);
  let pagg = ref(1);
  const getPagination = async () => {
    await fetch(`https://reqres.in/api/users?page=${pagg.value}&per_page=4
    `)
      .then((res) => res.json())
      .then((res) => (pagiPro.value = res));
  };
  const proName = ref({});
  const getProductbyname = async (id) => {
    await fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => (proName.value = res));
  };

  const countries = ref([]);
  const getCountries = async () => {
    await fetch(
      `https://countriesnow.space/api/v0.1/countries/info?returns=cities`
    )
      .then((res) => res.json())
      .then((res) => (countries.value = res.data.slice(150, 160)));
  };

  const imgArr = ref([
    "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/3.png",
    "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png",

    "https://cdn.dummyjson.com/products/images/home-decoration/Family%20Tree%20Photo%20Frame/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/1.png",
    "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/1.png",
    "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/1.png",
    "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/thumbnail.png",
    "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/thumbnail.png",
  ]);
  const allProducts = ref([]);
  const getAllproducts = async () => {
    await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => (allProducts.value = res.products));
  };
  getAllproducts();
  console.log(allProducts);

  return {
    getProducts,
    categories,
    getProductsbycategory,
    prodCat,
    imgArr,
    pagiPro,
    getPagination,
    pagg,
    proName,
    getProductbyname,
    getCountries,
    countries,
    getAllproducts,
    allProducts,
  };
};
export default productsMixin;
