import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const UpdateProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails();
    }, [])

    const getProductDetails = async () => {
        console.warn(params);
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }

    const updateProduct = async () => {
        console.warn(name, price, category, company)
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: "put",
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json()
        console.warn(result)
        navigate('/')
    }

    return (
        <section class="vh-100 ">
            <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                <div class="container h-95">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div class="card  border rounded-lg border-info" >
                                <div class="card-body p-5 ">
                                    <h2 class="text-center mb-5">Update Product</h2>
                                    <form>
                                        <div class="form-outline mb-3">
                                            <label class="form-label" >Enter Product Name</label>
                                            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Enter product name' class="form-control border border-info form-control-lg" />
                                        </div>
                                        <div class="form-outline mb-3">
                                            <label class="form-label">Enter Product Price</label>
                                            <input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} placeholder='Enter product price' class="form-control border border-info form-control-lg" />
                                        </div>
                                        <div class="form-outline mb-3">
                                            <label class="form-label" >Enter Product Category</label>
                                            <input type="text" value={category} onChange={(e) => { setCategory(e.target.value) }} placeholder='Enter product category' class="form-control border border-info form-control-lg" />
                                        </div>
                                        <div class="form-outline mb-3">
                                            <label class="form-label">Enter Product Company</label>
                                            <input type="text" value={company} onChange={(e) => { setCompany(e.target.value) }} placeholder='Enter product company' class="form-control border border-info form-control-lg" />
                                        </div>
                                        <div class="d-flex justify-content-center">

                                            <Link onClick={updateProduct} to={"/"}>
                                                <button type="button " 
                                                    class="btn btn-success bg-info btn-block btn-lg gradient-custom-4 text-body">Update Product</button>
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UpdateProduct; 