import React from 'react';

const AddProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [error, setError] = React.useState(true)

    const AddProduct = async () => {
        if (!name || !price || !category || !company) 
        {
            setError(true)
            return false;
        }
        else {
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product", {
            method: "post",
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json();
        console.warn(result);
    }}

    return (
        <section class="vh-100 ">
            <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                <div class="container h-95">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div class="card  border rounded-lg border-info" >
                                <div class="card-body p-5 ">
                                    <h2 class="text-center mb-5">Add Product</h2>
                                    <form>
                                        <div class="form-outline mb-3">
                                            <label class="form-label" >Enter Product Name</label>
                                            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Enter product name' class="form-control border border-info form-control-lg" />
                                            {error && !name && <span className='text-danger'> Enter Valid Name </span>}
                                        </div>

                                        <div class="form-outline mb-3">
                                            <label class="form-label">Enter Product Price</label>
                                            <input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} placeholder='Enter product price' class="form-control border border-info form-control-lg" />
                                            {error && !price && <span className='text-danger'> Enter Valid Price </span>}

                                        </div>

                                        <div class="form-outline mb-3">
                                            <label class="form-label" >Enter Product Category</label>
                                            <input type="text" value={category} onChange={(e) => { setCategory(e.target.value) }} placeholder='Enter product category' class="form-control border border-info form-control-lg" />
                                            {error && !category && <span className='text-danger'> Enter Valid Category </span>}

                                        </div>
                                        <div class="form-outline mb-3">
                                            <label class="form-label">Enter Product Company</label>
                                            <input type="text" value={company} onChange={(e) => { setCompany(e.target.value) }} placeholder='Enter product company' class="form-control border border-info form-control-lg" />
                                            {error && !company && <span className='text-danger'> Enter Valid Company </span>}

                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <button type="button " onClick={AddProduct}
                                                class="btn btn-success bg-info btn-block btn-lg gradient-custom-4 text-body">Add Product</button>
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

export default AddProduct; 