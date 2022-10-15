// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import DATA from "../Data";
// import { useDispatch } from "react-redux";

// const ProductDetail = () => {

//   const { proid } = useParams();
//   const [product, setProduct] = useState([]);

//   const productfetch= DATA.filter((x)=>x.id === proid.id);
//   setProduct(productfetch);
//   console.log(product);
  // const [cartBtn, setCartBtn] = useState("Add to Cart");

//   /* Now we need a product id which is pass from the product page. */

//   // const proid = useParams();
//   // const product = DATA.filter((x) => x.id === proid.id);
//   // const product = proDetail[0];
//   // console.log(proDetail);

//   // //we need to store useDispatch in a varible
//   // const dispatch = useDispatch();

  // const handleCart = (product) =>{
  //       if(cartBtn==="Add to Cart"){
  //         dispatch(addItem(product));
  //         setCartBtn("Remove from Cart");
  //       }else{
  //         dispatch(delItem(product));
  //         setCartBtn("Add to Cart");
  //       }
  // }

//   return (
//     <>
//       <div className="container my-5 py-3">
//         <div className="row">
//           <div className="col-md-6 d-flex justify-content-center mx-auto product">
//             <img
//               src={product.img}
//               alt={product.title}
//               height="400px"
//               width="400px"
//             />
//           </div>
//           <div className="col-md-6 d-flex flex-column justify-content-center">
//             <h1 className="display-5 fw-bold">{product.title}</h1>
//             <hr />
//             <h2 className="my-4">${product.price}</h2>
//             <p className="lead">{product.desc}</p>
//             {/* <button className="btn btn-outline-primary my-5">
//               <i class="fa fa-cart-plus" aria-hidden="true"></i> {cartBtn}
//             </button> */}
//           </div>
//         </div>
//       </div>
//     </>

//     // <div>ajay</div>
//   );
// };

// export default ProductDetail;
