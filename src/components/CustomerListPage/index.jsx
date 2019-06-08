import React from 'react'
import Navbar from '../Navbar';
import CustomerCard from '../Cards/CustomerCard/index.jsx';

import ppl1 from '../../images/ppl1.png'
import ppl2 from '../../images/ppl2.png'
import ppl3 from '../../images/ppl3.png'
import ppl4 from '../../images/ppl4.png'
import ppl5 from '../../images/ppl5.png'
import ppl6 from '../../images/ppl6.png'
import ppl7 from '../../images/ppl7.png'
import ppl8 from '../../images/ppl8.png'
import ppl9 from '../../images/ppl9.png'
import ppl10 from '../../images/ppl10.png'
import redPlus from '../../images/redplus.png'


const CustomerListPage = () => {
    return ( 
        <div>
            <Navbar page='CustomerListPage' />
            <section>
                <CustomerCard 
                    name='Benjamin Guzman'
                    img={ppl1}
                />
                <CustomerCard 
                    name='Brandon Bennett'
                    img={ppl2}
                />
                <CustomerCard 
                    name='Jesse Turner'
                    img={ppl3}
                />
                <CustomerCard 
                    name='Howard White'
                    img={ppl4}
                />
                <CustomerCard 
                    name='Lisa Jackson'
                    img={ppl5}
                />
                <CustomerCard 
                    name='John Snyder'
                    img={ppl6}
                />
                <CustomerCard 
                    name='Charles Harper'
                    img={ppl7}
                />
                <CustomerCard 
                    name='Betty Ray'
                    img={ppl8}
                />
                <CustomerCard 
                    name='Gary Delgado'
                    img={ppl9}
                />
                <CustomerCard 
                    name='Timothy Lewis'
                    img={ppl10}
                />
                <div className='row full'>
                    <img className='customerPlus' src={redPlus} alt="plus"/>
                </div>
            </section>
        </div>
     );
}
 
export default CustomerListPage;