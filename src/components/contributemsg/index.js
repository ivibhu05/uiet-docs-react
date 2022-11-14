import React from "react";
const ContributeMSG = () => {
  return (
    <>
      <div class="relative">
        <div class="h-screen w-full z-10 inset-0 overflow-y-auto">
          <div class="absolute w-full h-full inset-0 bg-gray-500 opacity-75"></div>
          <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <span
              class="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            ></span>
            <div
              class="inline-block relative overflow-hidden transform transition-all sm:align-middle sm:max-w-lg"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div>
                <div class="rounded-lg p-8 bg-white shadow">
                  <div class="bg-white dark:bg-gray-800 ">
                    <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                      <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-2xl">
                        <span class="block">Wants to Contribute ?</span>
                        <span class="block text-indigo-500">
                          Send us Papers, Notes, other documents and help the
                          community.
                        </span>
                      </h2>
                      <div class="lg:mt-0 lg:flex-shrink-0">
                        <div class="mt-12 inline-flex rounded-md shadow">
                          <a
                            href="https://forms.gle/QnnVLMj1eQqocEgC7"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <button
                              type="button"
                              class="py-4 px-6  bg-green-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                            >
                              Contribute
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContributeMSG;
