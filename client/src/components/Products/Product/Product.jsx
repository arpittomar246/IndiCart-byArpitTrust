import "./Product.scss";
import {useNavigate} from "react-router-dom";
//import useFetch from "../../../hooks/useFetch";
//import prod from "../../../assets/products/earbuds-prod-1.webp"
const Product = ({id, data}) => {
    const navigate = useNavigate()
    // const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`)
    return <div className="product-card" onClick={() => navigate("/product/" + id)}>
        <div className="thumbnail">
            <img src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url} alt="" />
        </div>
        <div className="prod-details">
            <span className="name">{data.title}</span>
            <span className="price">&#8377;{data.price}</span>
        </div>
    </div>;
};

export default Product;
