import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let result = await fetch("http://localhost:5000/products",{
            headers:{
                authorization:JSON.parse(localStorage.getItem('token'))
            }
        });
        result = await result.json();
        setProducts(result);
    }
    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete"
        });
        result = await result.json()
        if (result) {
            getProducts();
        }
    }
    const searchHandle = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json();
            if (result) {
                setProducts(result)
            }
        } else{
            getProducts();
        }
    }

    return (

        <div className="product-list container-table container mt-5 p-20">
            <h1 className='plist'> Products List</h1>
            <div className='form-group col-xs-4'>
                <input type="text" className='search-product-box' placeholder='Search Product' onChange={searchHandle} />
            </div>
            <table className=" table table-hover striped-table">
                <thead style={{ padding: "10px" }}>
                    <tr>
                        <th>S. No</th>
                        <th>Name</th>
                        <th>Prise</th>
                        <th>Category</th>
                        <th>Company</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {

                        products.length > 0 ? products.map((item, index) =>
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price} </td>
                                <td>{item.category} </td>
                                <td>{item.company} </td>
                                <td className="text-right">
                                    <Link to={"/update/" + item._id}>
                                        <button className="button muted-button">
                                            Update
                                        </button>
                                    </Link>
                                </td>
                                <td className="text-left">
                                    <button onClick={() => deleteProduct(item._id)} className="button muted-button">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ) : <h1>No Result Found</h1>}

                </tbody>
            </table>
        </div>



    );
};

export default ProductList;