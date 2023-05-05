export const iconHeight = {height:"0.6rem"}
export const IconHeight = {height:"2rem"}
export const hoverIconStyle = "bg-[#3CB878] text-white p-1 h-8 w-8";
export const spanStyle = "text-[#333333] uppercase text-md font-semibold";
export const ulStyle = "mt-7 text-xs font-semibold space-y-5";
export const liStyle = "cursor-pointer hover:text-[#3CB878]";
export const productsList = ["Accessories", "Men", "kids", "Watch", "Bags", "Laptops"];
export const productSize = ['XS', 'S', 'M', 'L', 'SL', 'XL', 'XXL'];
export const color = ["Black", "White", "Blue", "Yellow", "Green"];
export const hr = <hr className='w-[550px] ml-10 mb-10' />
export const hoverIconStyleOne = "bg-[#3CB878] text-white h-8 w-8 pl-1";
export const tableBtnStyle = "w-52 h-10 p-1 uppercase border px-5 border-gray-300 text-md  ";
export const lightIconColor = "text-gray-700 h-20";
export const darkIconColor = "text-gray-400 h-20";
export const MainIcon = "text-white bg-[#3CB878] w-5 h-5 rounded-full ml-3 text-center"
export const AdminIcon = "text-white bg-[#3CB878] w-4 h-4 rounded-full ml-3 text-center"
export const authStyle = "border-2 bg-[#3CB878] hover:bg-green-700 hover:border-green-700 uppercase border-[#3CB878] w-32 h-10 font-semibold text-white"
export const navbarLiStyle = "hover:text-[#3CB878] mt-6";
export const navbarPath = "/products";


export const heading = (name) => {
    return <h1 className={`${name === "price filter" && "mt-8 mb-4"} text-md font-semibold uppercase`}>{name}</h1>;
}

export const products = [{
    name:"Casual men wearing cool shoe x 1",
    price:"$ 200"
  },
  {
    name:"Casual men wearing cool shoe x 1",
    price:"$ 200",
  },
];

export const formOne = {
  name:"use coupon code", 
  lable:"enter your coupon here",
  placeHolder:"enter your coupon here"
}

export const formTwo = {
  name:"Use gift voucher",
  lable:"enter your gift voucher code here",
  placeHolder:"enter your gift voucher code here"
}

export const iconStyle = {
  fontSize:"10px", 
  marginTop:"-1.4rem"
}

export const IconStyle = {
  fontSize:"13px", 
  marginTop:"-0.7rem",
  marginLeft:"-0.7rem"
}



