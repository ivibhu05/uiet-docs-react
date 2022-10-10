import React from "react";
import logo1 from "../../assets/l1.png";
import logo2 from "../../assets/l2.png";
import logo3 from "../../assets/l3.png";

// import Footer from '../footer';
// import Header from '../header';

const Home = () => {
  return (
    <div>
      <div
        id="carouselDarkVariant"
        class="carousel slide carousel-fade carousel-dark relative"
        data-bs-ride="carousel"
      >
        {/* <!-- Indicators --> */}
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="1"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="2"
            aria-label="Slide 1"
          ></button>
        </div>

        {/* <!-- Inner --> */}
        <div class="carousel-inner relative w-full overflow-hidden">
          {/* <!-- Single item --> */}
          <div class="carousel-item active relative float-left w-full">
            <img src={logo3} class="block w-full" alt="Motorbike Smoke" />
            <div class="carousel-caption hidden md:block absolute text-center"></div>
          </div>

          {/* <!-- Single item --> */}
          <div class="carousel-item relative float-left w-full">
            <img src={logo1} class="block w-full" alt="Mountaintop" />
            <div class="carousel-caption hidden md:block absolute text-center"></div>
          </div>

          {/* <!-- Single item --> */}
          <div class="carousel-item relative float-left w-full">
            <img src={logo2} class="block w-full" alt="Woman Reading a Book" />
            <div class="carousel-caption hidden md:block absolute text-center"></div>
          </div>
        </div>
        {/* <!-- Inner --> */}

        {/* <!-- Controls --> */}
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div>
        
        
        <div
          id="modal"
          class=" rounded pb-8 container mx-auto flex justify-center items-center px-4 md:px-0 py-15"
        >
          <div class="bg-white dark:bg-gray-800 px-3 md:px-4 py-2 flex flex-col justify-center items-center">
            
            <h1 class="mt-8 md:mt-12 text-3xl lg:text-4xl font-semibold leading-10 text-center text-gray-800 text-center md:w-9/12 lg:w-7/12 dark:text-white">
              Welcome to the UIET DOCS
            </h1>
            <p class="mt-4  text-gray-600 md:w-9/12 lg:w-7/12 dark:text-white">
            UIET Kanpur, UNIVERSITY INSTITUTE OF ENGINEERING AND TECHNOLOGY, a department of CSJM UNIVERSITY has prospered by leaps and bounds over the years achieving great academic heights besides foraying into the top 50 finest engineering colleges of the country. Having been taught by one of the best faculties of the region, the students of UIET Kanpur have been empowered and groomed to take on the rigorous challenges in their upcoming lives. The sincere efforts made by our glorious alumni in the progress of the institute has further strengthened its fundamentals in a short span of time. The atmosphere of creativity and the enterprising attitude of the students has promoted a spirit of innovation. The recent achievements of the students in myriad fields including software, mechanical, electronics has set a new trend in the road to establishing a brand name for UIET Kanpur.
            This site was designed with the vision on helping the students of UIET with previous years exam Papers,Notes and other stuffs like books, videos which will help them with their academics and help them grow better in their academics as well as in their respective fields too.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
