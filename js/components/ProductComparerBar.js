/**
 * Created by dis_name_pc on 16.09.2015.
 */
import React from 'react';

class ProductComparerBar extends React.Component {
    render() {
        return <div className="heading">
            <h1>Products comaprer</h1>
            <section>Please type urls of products that you want to compare and click <b>Compare</b> button.</section>
            <div className="inputs">
                <input type="text" name="input_url_first"
                       id="input_url_first"
                       className="input_url"/>
                <input type="text"
                       name="input_url_second"
                       id="input_url_second"
                       className="input_url"/>
            </div>
            <button>Compare</button>
        </div>;
    }
}

export default ProductComparerBar;