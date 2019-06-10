import React from 'react';
import Navbar from '../Navbar';
import GiftCard from '../Cards/GiftCard/index.jsx';

import coffee1 from '../../images/coffee1.png'
import coffee2 from '../../images/coffee2.png'
import coffee3 from '../../images/coffee3.png'
import coffee4 from '../../images/coffee4.png'
import coffee5 from '../../images/coffee5.png'
import coffee6 from '../../images/coffee6.png'
import coffee7 from '../../images/coffee7.png'
import coffee8 from '../../images/coffee8.png'
import coffee9 from '../../images/coffee9.png'
import coffee10 from '../../images/coffee10.png'

const RecommendedGiftsPage = props => {
    return ( 
        <div>
            <Navbar page='RecommendedGiftsPage' />
            <section>
                <div className='row'>
                    <GiftCard
                        img='https://cdn.11street.my/h/0/3/2/1/6/5/56032165_B_V10.jpg'
                        title='USA KEG STORM Nitro Cold Brew Coffee'
                        desc="Nitro cold brew is where coffee meets science..."
                        price='RM 1,719'
                        url='https://www.11street.my/productdetail/usa-keg-storm-nitro-cold-brew-coffee-maker-56032165?fbclid=IwAR0z_msDQykw2_9QxhmpgyXZQgKSd2_khdA14I4XaUDDlxl-RP_tZvUfdZE'
                    />
                    <GiftCard
                        img='https://cdn.11street.my/h/1/0/1/6/0/7/46101607_B_V379.jpg'
                        title="Soma Sustainable Pitcher & Plant-Based"
                        desc='USA electronic product(110voltage.)...'
                        price='RM 293'
                        url='https://www.11street.my/productdetail/soma-sustainable-pitcher-plant-based-water-filter-46101607?fbclid=IwAR3SmxQKtllzE8LkVcgXqcUriqFEGPRfdwzz6ji2Xvt3qt5GRIsEjVprY0M'
                    />
                </div>
                <div className='row'>
                    <GiftCard
                        img={coffee1}
                        title='100% Columbian Arabica Coffee'
                        desc='Interdum et malesuada fames ac ante…'
                        price='RM 250'
                        url='https://www.amazon.com/Thoughtfully-Creative-Alphabet-Columbian-Accessories/dp/B01LVW6ITI?imprToken=xs.5RqvjesL..J4u2QTbpQ&slotNum=15%E2%8A%82scriptionId=AKIAJ7AVFUMOQR7SVC3A&tag=roastycoffee-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01LVW6ITI&fbclid=IwAR3190Hitz9GL36rMY0sV132xEoQAU6bSajvHzfBSKx_JPNdPcwNHPattQo'
                    />
                    <GiftCard
                        img={coffee4}
                        title='NitroBrew Home Kit - 12oz'
                        desc='Interdum et malesuada fames ac ante…'
                        price='RM 1,534'
                        url='https://www.amazon.com/NitroBrew-NBHK-Home-Kit/dp/B00Y8QK71Y?imprToken=xs.5RqvjesL..J4u2QTbpQ&slotNum=18%E2%8A%82scriptionId=AKIAJ7AVFUMOQR7SVC3A&tag=roastycoffee-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00Y8QK71Y&fbclid=IwAR2Nbq2tALgdp1-SI8w3KF9-lQCSmLqpLkSbs9qXBExIg7nSbbCZ6dHlkhY'
                    />
                </div>
                <div className='row'>
                    <GiftCard
                        img='https://my-test-11.slatic.net/original/9bc4e685b03cf86ebfcec31afb9ba316.jpg_340x340q80.jpg_.webp'
                        title='Death Wish Coffee Co. Death Wish Organic'
                        desc="Stay awake with The World's Strongest Coffee. Death Wish…"
                        price='RM 216.26'
                        url='https://www.lazada.com.my/products/death-wish-coffee-co-death-wish-organic-usda-certified-whole-bean-coffee-16-ounce-bag-i393349263-s567308174.html?spm=a2o4k.searchlist.list.1.3f8c26007KF7CB&search=1&fbclid=IwAR2VxzvAtILlIjAWYxP_QIEsspFmEfDA0sadB_iRPdUdGF7q5Js66kQ8rL8'
                    />
                    <GiftCard
                        img='https://images-na.ssl-images-amazon.com/images/I/71sszbYHncL._SX425_.jpg'
                        title='Crislan Sumiyoshi Taisha…'
                        desc='Easily brew a delicious coffee with this full brewing kits…'
                        price='RM 600'
                        url='https://www.amazon.com/Osaka-Coffee-Dripper-Starter-Color/dp/B01LZS2EP6?creativeASIN=B01LZS2EP6&linkCode=w61&imprToken=W1JvDRJSwkCfmcQGE.s2JA&slotNum=19&tag=drippedcoffee-20&fbclid=IwAR1zzsi5RquLFGY_fsLYodicWoju1IfLXCpCpK8VTZvuhVzk1iUZEespAkE'
                    />
                </div>
                <div className='row'>
                    <GiftCard
                        img='https://my-test-11.slatic.net/original/618278c0791e2e78191a41496e6d425b.jpg_340x340q80.jpg_.webp'
                        title='Kuissential Manual Coffee Burr…'
                        desc='Coffee Grinder- The Original EvenGrind…'
                        price='RM 219'
                        url='https://www.lazada.com.my/products/kuissential-manual-coffee-burr-grinder-the-original-evengrind-wpatented-stability-cage-even-coffee-grounds-guaranteed-i355572950-s503459486.html?spm=a2o4k.pdp.recommendation_1.1.5376613bpfJe6V&mp=1&clickTrackInfo=1b466fca-c4af-4355-9671-4dec76043408__355572950__10000599__cate__124572__0.30768752__0.30768752__0.0__0.30768752__0.0__0.30768752__0__null__null__null__null__null__null__&scm=1007.16389.126158.0'
                    />
                    <GiftCard
                        img='https://images-na.ssl-images-amazon.com/images/I/91jnPEMXovL._SX355SX355_SY240_CR,0,0,355,240_PIbundle-5,TopRight,0,0_SX355_SY240_CR,0,0,355,240_SH20_.jpg'
                        title='Creative Coffee Lovers ‘Coffee Therapy’…'
                        desc='Makes a perfect gift for the winter holidays…'
                        price='RM 106'
                        url='https://www.amazon.com/Nispira-Belgian-Belgium-Luxury-Balance/dp/B00BWH8UZ2?imprToken=xs.5RqvjesL..J4u2QTbpQ&slotNum=23&psc=1%E2%8A%82scriptionId=AKIAJ7AVFUMOQR7SVC3A&tag=roastycoffee-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00BWH8UZ2&fbclid=IwAR1FMeYkxqBqBYWfyabkSBNaAf34fN1kgEJHiFwwrONEpgj9A899GD7DHM8'
                    />
                </div>
                <div className='row'>
                    <GiftCard
                        img={coffee9}
                        title='Khaw-Fee HG1B Manual Coffee...'
                        desc="For some of us, Coffee is a way of life. There's nothing quite like getting the..."
                        price='RM 254.39'
                        url='https://www.lazada.com.my/products/khaw-fee-hg1b-manual-coffee-grinder-with-conical-ceramic-burr-because-hand-ground-coffee-beans-taste-best-infinitely-adjustable-grind-glass-jar-stainless-steel-built-to-last-quiet-and-portable-i361046554-s511934544.html?spm=a2o4k.searchlist.list.1.44261c7dO1u8Jr&search=1&fbclid=IwAR3RBAUbq1u0kWdyA2D36DfptwyPeVrf5X2xhDZ0iLFb4Bs_T9fntx7h_0g'
                    />
                    <GiftCard
                        img={coffee10}
                        title='Aerobie Aeropress Coffee and Espresso Maker'
                        desc='The AEROPRESS® is an entirely new way to make... '
                        price='RM 234'
                        url='https://www.lazada.com.my/products/aerobie-aeropress-coffee-and-espresso-maker-i647940-s740339.html?spm=a2o4k.searchlist.list.3.4399341fb1mVBv&search=1&fbclid=IwAR3l44d_6PsO4FeaF8tFr1_d8PyxEjJj815VtsDDXQ3GfiEafjoc9ze47OQ'
                    />
                </div>
            </section>
        </div>
     );
}
 
export default RecommendedGiftsPage;