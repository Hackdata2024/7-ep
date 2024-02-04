import React from 'react';
import Styles from './our_service.css';


const Service = () => {
    return (
        <>

        <section>
                <h2>Our Services</h2>

                <ul class="services">
                    <li class="card-large card-dark card-wide" id="serv-groom">
                        {/* <div class="card-image"><img src="https://ouch-cdn2.icons8.com/T11rfGmMKgcStJyAFKNgtOfE79cadabx0DVMnvzA9Pk/rs:fit:368:313/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDQx/LzFlYWU4MWY3LWQ1/ZjYtNDM2Ny1hZjM5/LWVmNTFmMGM5Njk4/MS5wbmc.png"></div> */}
                        <ul>
                            Assesment<span class="subtitle">walk together</span>
                            <li><a href="#">1</a><span>$80</span></li>
                            <li><a href="#">2</a><span>$16</span></li>
                            <li><a href="#">3</a><span>$160</span></li>
                            <button class="btn-filled-dark"><span class="material-symbols-outlined">
                                    Assignments
                                </span>Come and Explore</button>

                        </ul>


                    </li>
                    <li class="card-large card-dark card-wide" id="serv-board">
                        {/* <div class="card-image"><img src="https://ouch-cdn2.icons8.com/F5Ea1suZtMYimKDkJr0CJLO_1bju6-bTyT1EuDKEg8s/rs:fit:368:254/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjcx/LzVjMzE4NWM0LWZh/NTMtNGQ1OS05ZTM2/LTZjYzBhNGU3ODg0/NC5wbmc.png"></div> */}
                        <ul>
                            Latest_update<span class="subtitle">Explore new updates</span>
                            <li><a href="#">1</a><span>$80</span></li>
                            <li><a href="#">2</a><span>$80</span></li>
                            <button class="btn-filled-dark"><span class="material-symbols-outlined">
                                   Updates
                                </span>Come and Explore</button>
                        </ul>

                    </li>
                </ul>
            </section>
        </>    
    );
}

export default Service;