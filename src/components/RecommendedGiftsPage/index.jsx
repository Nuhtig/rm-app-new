import React from 'react';
import Navbar from '../Navbar';
import GiftCard from '../Cards/GiftCard/index.jsx';

import coffee1 from '../../images/coffee1.png'
import coffee2 from '../../images/coffee2.png'
import coffee3 from '../../images/coffee3.png'
import coffee4 from '../../images/coffee4.png'
import coffee5 from '../../images/coffee5.png'
import coffee6 from '../../images/coffee6.png'

const RecommendedGiftsPage = props => {
    return ( 
        <div>
            <Navbar page='RecommendedGiftsPage' />
            <section>
                <div className='row'>
                    <GiftCard
                        img={coffee1}
                        title='100% Columbian Arabica Coffee'
                        desc='Interdum et malesuada fames ac ante…'
                        price='RM 250'
                        url='https://www.amazon.com/Thoughtfully-Creative-Alphabet-Columbian-Accessories/dp/B01LVW6ITI?imprToken=xs.5RqvjesL..J4u2QTbpQ&slotNum=15%E2%8A%82scriptionId=AKIAJ7AVFUMOQR7SVC3A&tag=roastycoffee-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01LVW6ITI&fbclid=IwAR3190Hitz9GL36rMY0sV132xEoQAU6bSajvHzfBSKx_JPNdPcwNHPattQo'
                    />
                    <GiftCard
                        img={coffee2}
                        title='Hario Double Glass Coffee Press'
                        desc='Interdum et malesuada fames ac ante…'
                        price='RM 300'
                        url='https://www.amazon.com/Hario-Double-Glass-Coffee-Olivewood/dp/B0092UDYLQ?imprToken=xs.5RqvjesL..J4u2QTbpQ&slotNum=16%E2%8A%82scriptionId=AKIAJ7AVFUMOQR7SVC3A&tag=roastycoffee-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0092UDYLQ&fbclid=IwAR3190Hitz9GL36rMY0sV132xEoQAU6bSajvHzfBSKx_JPNdPcwNHPattQo'
                    />
                </div>
                <div className='row'>
                    <GiftCard
                        img={coffee3}
                        title='Espro Travel Coffee Press'
                        desc='Interdum et malesuada fames ac ante…'
                        price='RM 180'
                        url='https://www.amazon.com/Espro-Travel-Coffee-Press-Stainless/dp/B00UTO949U?imprToken=xs.5RqvjesL..J4u2QTbpQ&slotNum=17&psc=1%E2%8A%82scriptionId=AKIAJ7AVFUMOQR7SVC3A&tag=roastycoffee-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00UTO949U&fbclid=IwAR3190Hitz9GL36rMY0sV132xEoQAU6bSajvHzfBSKx_JPNdPcwNHPattQo'
                    />
                    <GiftCard
                        img={coffee4}
                        title='NitroBrew Home Kit - 12oz'
                        desc='Interdum et malesuada fames ac ante…'
                        price='RM 453'
                        url='https://www.amazon.com/NitroBrew-NBHK-Home-Kit/dp/B00Y8QK71Y?imprToken=xs.5RqvjesL..J4u2QTbpQ&slotNum=18%E2%8A%82scriptionId=AKIAJ7AVFUMOQR7SVC3A&tag=roastycoffee-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00Y8QK71Y&fbclid=IwAR2Nbq2tALgdp1-SI8w3KF9-lQCSmLqpLkSbs9qXBExIg7nSbbCZ6dHlkhY'
                    />
                </div>
                <div className='row'>
                    <GiftCard
                        img={coffee5}
                        title='Soma Sustainable Pitcher & Plant'
                        desc='Interdum et malesuada fames ac ante…'
                        price='RM 89'
                        url='https://www.amazon.com/Soma-Sustainable-Pitcher-Plant-Based-Filter/dp/B00WFY7I2C?imprToken=xs.5RqvjesL..J4u2QTbpQ&slotNum=20%E2%8A%82scriptionId=AKIAJ7AVFUMOQR7SVC3A&tag=roastycoffee-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00WFY7I2C&fbclid=IwAR0HdGL_LJVI2_sjyw8hBQeRb5bmQiAJzSbKIRZmJQZMDd9T67_ebYQ7Z7E'
                    />
                    <GiftCard
                        img={coffee6}
                        title='Nispira Belgian Belgium Luxury…'
                        desc='Interdum et malesuada fames ac ante…'
                        price='RM 889'
                        url='https://www.amazon.com/Nispira-Belgian-Belgium-Luxury-Balance/dp/B00BWH8UZ2?imprToken=xs.5RqvjesL..J4u2QTbpQ&slotNum=23&psc=1%E2%8A%82scriptionId=AKIAJ7AVFUMOQR7SVC3A&tag=roastycoffee-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00BWH8UZ2&fbclid=IwAR1FMeYkxqBqBYWfyabkSBNaAf34fN1kgEJHiFwwrONEpgj9A899GD7DHM8'
                    />
                </div>
            </section>
        </div>
     );
}
 
export default RecommendedGiftsPage;