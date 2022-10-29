import React from 'react';
import logo1 from '../../assets/l1.png';
import logo2 from '../../assets/l2.png';
import logo3 from '../../assets/l3.png';

const Home = () => {
  return (
    <div>
      <div
        id="carouselDarkVariant"
        class="carousel slide carousel-fade carousel-dark relative"
        data-bs-ride="carousel"
      >
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

        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <img src={logo3} class="block w-full" alt="Motorbike Smoke" />
            <div class="carousel-caption hidden md:block absolute text-center"></div>
          </div>

          <div class="carousel-item relative float-left w-full">
            <img src={logo1} class="block w-full" alt="Mountaintop" />
            <div class="carousel-caption hidden md:block absolute text-center"></div>
          </div>

          <div class="carousel-item relative float-left w-full">
            <img src={logo2} class="block w-full" alt="Woman Reading a Book" />
            <div class="carousel-caption hidden md:block absolute text-center"></div>
          </div>
        </div>

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
          <p class="mt-4 text-black dark:text-white text-justify">
            <strong>UIET Kanpur</strong>, <b>UNIVERSITY INSTITUTE OF ENGINEERING AND TECHNOLOGY</b>, a
            department of <b>CSJM UNIVERSITY</b> has prospered by leaps and bounds over
            the years achieving great academic heights besides foraying into the
            top 50 finest engineering colleges of the country. Having been
            taught by one of the best faculties of the region, the students of
            UIET Kanpur have been empowered and groomed to take on the rigorous
            challenges in their upcoming lives. The sincere efforts made by our
            glorious alumni in the progress of the institute has further
            strengthened its fundamentals in a short span of time. The
            atmosphere of creativity and the enterprising attitude of the
            students has promoted a spirit of innovation. The recent
            achievements of the students in myriad fields including software,
            mechanical, electronics has set a new trend in the road to
            establishing a brand name for UIET Kanpur.
            <br />
            <br />
            This site was designed with the vision on helping the students of
            UIET with previous years exam Papers,Notes and other stuffs like
            books, videos which will help them with their academics and help
            them grow better in their academics as well as in their respective
            fields too.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
