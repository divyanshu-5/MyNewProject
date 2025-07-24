import "./CheckOut.css";


function CheckOut() {

    return (

        <>

            <div class="container text-center">
                <div class="row align-items-start">

                    <div class="col-md-2"></div>

                    <div class="separation">  </div>

                    <div class="col-header">
                        <img class="header-image" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" />
                        <h2>Checkout Form</h2>
                        <p class="lead">Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                    </div>

                    <div class="col-md-2"></div>
                </div>
            </div>

            <div class="separation">  </div>
            <div class="separation">  </div>


            <div class="container">
                <div class="row align-items-start">

                    <div class="col-md-2"></div>

                    <div class="col">


                        <div class="card-header">
                            <h4>Billing Address</h4>
                        </div>

                        <div class="card-body">
                            <div class="row">

                                <div class="col">
                                    <label for="exampleFormControlInput1" class="form-label">First Name</label>
                                    <input type="text" class="form-control" placeholder="first name" aria-label="First name" name="First Name" />
                                </div>

                                <div class="col">
                                    <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" placeholder="last name" aria-label="Last name" name="Last Name" />
                                </div>

                                <div class="separation">  </div>

                                <div><label for="exampleFormControlInput1" class="form-label">Username</label></div>

                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">@</span>
                                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name="username" />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email
                                        <span class="text-muted">(Optional)</span>
                                    </label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="you@example.com" />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Address</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="1234 Main st" />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Address 2
                                        <span class="text-muted">(Optional)</span>
                                    </label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Apartment or Suite" />
                                </div>

                                <div class="col-md-5 mb-3">
                                    <label for="validationCustom03" class="form-label">Country</label>
                                    <select class="form-select" id="validationCustom04" required>
                                        <option selected disabled value="">Choose...</option>
                                        <option>India</option>
                                    </select>
                                </div>

                                <div class="col-md-4 mb-3">
                                    <label for="validationCustom04" class="form-label">State</label>
                                    <select class="form-select" id="validationCustom04" required>
                                        <option selected disabled value="">Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="validationCustom05" class="form-label">Zip</label>
                                    <input type="text" class="form-control" id="validationCustom05" required />
                                </div>

                                <hr />
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="checkDefault" />
                                    <label class="form-check-label" for="checkDefault">
                                        Shipping address is the same as my billing address
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="checkChecked" />
                                    <label class="form-check-label" for="checkChecked">
                                        Save this information for next time
                                    </label>
                                </div>

                                <div class="separation"></div>
                                <hr />

                                <div class="separation"></div>

                                <h4>Payment</h4>

                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
                                    <label class="form-check-label" for="radioDefault1">
                                        Credit card
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault2" />
                                    <label class="form-check-label" for="radioDefault2">
                                        Debit card
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault2" />
                                    <label class="form-check-label" for="radioDefault2">
                                        Paypal
                                    </label>
                                </div>

                                <div className="separation"></div>

                                <div class="col">
                                    <label for="exampleFormControlInput1" class="form-label">Name on card</label>
                                    <input type="text" class="form-control" placeholder=" " aria-label="First name" name="Name on card" />
                                </div>

                                <div class="col">
                                    <label for="exampleFormControlInput1" class="form-label">Credit card number</label>
                                    <input type="text" class="form-control" placeholder="" aria-label="Last name" name="CC number" />
                                </div>

                                <div className="separation"></div>

                                <div class="col-md-3 mb-3">
                                    <label for="validationCustom03" class="form-label">Expiration</label>
                                    <input type="text" class="form-control" name="Expiration" id="validationCustom05" required />
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="validationCustom03" class="form-label">CVV</label>
                                    <input type="text" class="form-control" name="CVV" id="validationCustom05" required />
                                </div>

                                <div className="separation"></div>

                                <hr />

                            </div>

                            <button class="btn btn-primary btn-lg btn-block" type="submit" width="100%">Continue to checkout</button>

                        </div>

                    </div>

                    <div class="col-md-3">


                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text-muted">Your cart</span>
                            <span class="badge badge-secondary badge-pill">3</span>
                        </h4>
                        <ul class="list-group mb-3">
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 class="my-0">Product name</h6>
                                    <small class="text-muted">Brief description</small>
                                </div>
                                <span class="text-muted">$12</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 class="my-0">Second product</h6>
                                    <small class="text-muted">Brief description</small>
                                </div>
                                <span class="text-muted">$8</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 class="my-0">Third item</h6>
                                    <small class="text-muted">Brief description</small>
                                </div>
                                <span class="text-muted">$5</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between bg-light">
                                <div class="text-success">
                                    <h6 class="my-0">Promo code</h6>
                                    <small>EXAMPLECODE</small>
                                </div>
                                <span class="text-success">-$5</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>$20</strong>
                            </li>
                        </ul>

                        <form class="card p-2">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Promo code" />
                                <div class="input-group-append">
                                    <button type="submit" class="btn btn-secondary">Redeem</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-md-1"></div>

                </div>

                <div className="separation"></div>
                <div className="separation"></div>


                <footer >
                    <p class="footerp">© 2017-2018 Company Name</p>
                    <ul class="footerlist">
                        <li class="fl"><a href="">Privacy</a></li>
                        <li class="fl"><a href="">Terms</a></li>
                        <li class="fl"><a href="">Support</a></li>
                    </ul>
                </footer>

            </div>


        </>
    )

}

export default CheckOut;