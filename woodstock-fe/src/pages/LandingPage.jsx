import React, { useState } from "react";

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goals = [
    "Provide high-quality wood",
    "Support sustainable forestry",
    "Offer diverse wood types",
    "Ensure customer satisfaction",
    "Innovate in wood processing"
  ];

  const maxItems = 3;
  const totalItems = goals.length;

  const nextItem = () => {
    if (currentIndex + maxItems < totalItems) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevItem = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <div>
      <section className="bg-black1">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-xl font-title leading-none tracking-tight md:text-2xl xl:text-3xl dark:text-white">
              Welcome to
          </h1>
          <h1>
              <span className="text-darkOrange text-9xl font-extrabold font-title text-outline">WOOD</span>
              <span className="text-lightGreen text-9xl font-extrabold font-title text-outline">STOCK</span>
          </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              This free and open-source landing page template was built using the
              utility classes from and based on the components from Flowbite Library and the
              Blocks System.
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <svg width="289" height="219" viewBox="0 0 289 219" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M110.765 91.9259H80.7832L119.331 219H147.17L164.303 175.741L185.718 219H209.275L232.832 155.463L256.388 91.9259L269.237 56.7778L288.511 67.5926L275.662 0L226.407 29.7407L239.256 37.8519L243.539 40.5556L239.256 51.3704L224.265 91.9259L196.426 175.741L164.303 91.9259L136.463 175.741L110.765 91.9259Z" fill="url(#paint0_angular_139_135)"/>
                  <path d="M75.2315 75.3752C57.7906 71.6321 29.6771 58.8145 29.654 31.639C29.6515 28.7724 32.3764 26.8046 35.1439 27.6046C58.2151 34.2735 76.2322 54.6052 79.905 70.1795C79.9631 70.4257 80.0175 70.6706 80.0684 70.9143C80.6651 73.7745 78.0942 75.9896 75.2315 75.3752Z" fill="#5B8844"/>
                  <path d="M79.905 70.1795C79.9631 70.4257 80.0175 70.6706 80.0684 70.9143C80.6651 73.7745 78.0942 75.9896 75.2315 75.3752C57.7906 71.6321 29.6771 58.8145 29.654 31.639C29.6515 28.7724 32.3764 26.8046 35.1439 27.6046C58.2151 34.2735 76.2322 54.6052 79.905 70.1795ZM79.905 70.1795C78.886 69.3596 77.7776 68.4697 76.6007 67.5272M41.2131 40.5158C42.3473 40.7531 50.9403 47.2831 60.3405 54.6421M62.2567 56.1448C55.8047 54.6359 52.1872 53.79 45.7351 52.2811M62.2567 56.1448C61.6157 55.6413 60.9762 55.1398 60.3405 54.6421M62.2567 56.1448C63.431 57.0672 64.6107 57.9967 65.7832 58.9228M60.3405 54.6421L55.4125 45.2079M68.4292 61.0165L55.5774 61.2252M68.4292 61.0165C67.5549 60.3235 66.6711 59.6241 65.7832 58.9228M68.4292 61.0165C71.3248 63.3118 74.1152 65.5367 76.6007 67.5272M65.7832 58.9228L65.2547 54.152M76.6007 67.5272L65.085 67.1486" stroke="#3B5934" stroke-width="0.2"/>
                  <path d="M68.9175 92.9849C54.9899 103.683 27.2369 116.559 4.78753 99.9522C2.43198 98.2097 2.6005 94.8077 5.10349 93.1633C24.8289 80.2043 52.6051 79.2936 67.7255 86.1021C67.9841 86.2185 68.2389 86.3372 68.49 86.4581C71.1783 87.7529 71.3088 91.148 68.9175 92.9849Z" fill="#5B8844"/>
                  <path d="M67.7255 86.1021C67.9841 86.2185 68.2389 86.3372 68.49 86.4581C71.1783 87.7529 71.3088 91.148 68.9175 92.9849C54.9899 103.683 27.2369 116.559 4.78753 99.9522C2.43198 98.2097 2.6005 94.8077 5.10349 93.1633C24.8289 80.2043 52.6051 79.2936 67.7255 86.1021ZM67.7255 86.1021C66.4172 86.3591 64.9956 86.6401 63.4884 86.9397M19.2687 96.769C20.164 96.067 30.8776 93.6624 42.7765 91.1645M45.2043 90.657C39.9789 94.5522 37.0492 96.7361 31.8237 100.631M45.2043 90.657C44.3914 90.8262 43.5812 90.9956 42.7765 91.1645M45.2043 90.657C46.6933 90.3469 48.1915 90.0371 49.6825 89.7305M42.7765 91.1645L31.9074 89.0409M53.0503 89.0412L45.3113 98.7789M53.0503 89.0412C51.9366 89.2682 50.8116 89.4984 49.6825 89.7305M53.0503 89.0412C56.7394 88.2893 60.3051 87.5727 63.4884 86.9397M49.6825 89.7305L45.395 87.1885M63.4884 86.9397L56.0842 95.3169" stroke="#3B5934" stroke-width="0.2"/>
                  <g filter="url(#filter0_i_139_135)">
                  <path d="M82.339 109.663C83.8849 126.608 79.5972 155.587 52.5638 163.953C49.7288 164.83 46.8392 162.763 46.8051 159.85C46.5385 137.108 61.2622 114.78 75.6539 106.7C75.9026 106.561 76.1511 106.425 76.3995 106.294C79.0269 104.908 82.0716 106.732 82.339 109.663Z" fill="#5B8844"/>
                  </g>
                  <path d="M75.6539 106.7C75.9026 106.561 76.1511 106.425 76.3995 106.294C79.0269 104.908 82.0716 106.732 82.339 109.663C83.8849 126.608 79.5972 155.587 52.5638 163.953C49.7288 164.83 46.8392 162.763 46.8051 159.85C46.5385 137.108 61.2622 114.78 75.6539 106.7ZM75.6539 106.7C75.1469 107.873 74.5975 109.149 74.0165 110.502M57.8773 150.782C57.7647 149.686 61.6545 139.913 66.1259 129.157M67.04 126.963C67.5214 133.252 67.7913 136.777 68.2727 143.066M67.04 126.963C66.7334 127.697 66.4283 128.429 66.1259 129.157M67.04 126.963C67.6017 125.618 68.1688 124.267 68.7347 122.922M66.1259 129.157L58.1925 136.519M70.0157 119.888L74.1963 131.421M70.0157 119.888C69.5912 120.891 69.1633 121.904 68.7347 122.922M70.0157 119.888C71.4216 116.565 72.7894 113.36 74.0165 110.502M68.7347 122.922L64.1161 124.874M74.0165 110.502L77.1955 121.011" stroke="#3B5934" stroke-width="0.2"/>
                  <path d="M94.3347 73.2498C89.0913 56.9945 86.8895 27.7295 111.542 14.1934C114.13 12.7726 117.381 14.1792 118.049 16.9837C123.34 39.1997 113.821 63.9952 101.498 74.7519C101.289 74.9348 101.078 75.1136 100.867 75.2882C98.5917 77.1716 95.2312 76.0291 94.3347 73.2498Z" fill="#5B8844"/>
                  <path d="M101.498 74.7519C101.289 74.9348 101.078 75.1136 100.867 75.2882C98.5917 77.1716 95.2312 76.0291 94.3347 73.2497C89.0913 56.9945 86.8895 27.7295 111.542 14.1934C114.13 12.7726 117.381 14.1792 118.049 16.9837C123.34 39.1997 113.821 63.9952 101.498 74.7519ZM101.498 74.7519C101.737 73.5047 101.995 72.1488 102.267 70.7106M109.227 28.1263C109.577 29.177 107.914 39.503 105.897 50.9067M105.484 53.2327C103.635 47.1765 102.598 43.781 100.749 37.7247M105.484 53.2327C105.623 52.4542 105.761 51.678 105.897 50.9067M105.484 53.2327C105.229 54.6588 104.97 56.0929 104.711 57.5194M105.897 50.9067L112.044 42.1402M104.123 60.7405L97.5071 50.2843M104.123 60.7405C104.319 59.6757 104.515 58.5997 104.711 57.5194M104.123 60.7405C103.476 64.2676 102.841 67.6729 102.267 70.7106M104.711 57.5194L108.802 54.6998M102.267 70.7106L96.8545 61.0586" stroke="#3B5934" stroke-width="0.2"/>
                  <path d="M117.865 81.9054C126.037 66.7597 145.84 44.4088 173.4 50.8953C176.288 51.5751 177.574 54.8234 175.955 57.3349C163.466 76.7173 138.546 88.2229 121.847 87.8392C121.555 87.8325 121.266 87.8221 120.979 87.8081C117.987 87.6621 116.438 84.5505 117.865 81.9054Z" fill="#5B8844"/>
                  <path d="M121.847 87.8392C121.555 87.8325 121.266 87.8221 120.979 87.8081C117.987 87.6621 116.438 84.5505 117.865 81.9054C126.037 66.7597 145.84 44.4088 173.4 50.8953C176.288 51.5751 177.574 54.8234 175.955 57.3349C163.466 76.7173 138.546 88.2229 121.847 87.8392ZM121.847 87.8392C122.932 87.0994 124.111 86.2942 125.359 85.4387M161.542 59.3937C161.025 60.3805 152.269 66.7119 142.469 73.5859M140.469 74.9865C143.573 69.4114 145.313 66.2857 148.417 60.7106M140.469 74.9865C141.139 74.5182 141.806 74.0508 142.469 73.5859M140.469 74.9865C139.242 75.8444 138.006 76.7057 136.775 77.5611M142.469 73.5859L153.309 71.3312M133.994 79.4906L136.89 67.6081M133.994 79.4906C134.914 78.8534 135.843 78.2089 136.775 77.5611M133.994 79.4906C130.946 81.6012 127.996 83.632 125.359 85.4387M136.775 77.5611L141.782 78.2288M125.359 85.4387L128.532 74.9283" stroke="#3B5934" stroke-width="0.2"/>
                  <defs>
                  <filter id="filter0_i_139_135" x="46.7002" y="105.723" width="36.0166" height="62.5324" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_139_135"/>
                  </filter>
                  <radialGradient id="paint0_angular_139_135" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(172.08 89.0389) rotate(91.1616) scale(123.02 55.5464)">
                  <stop offset="0.24" stop-color="#B86822"/>
                  <stop offset="0.76959" stop-color="#8B380C"/>
                  </radialGradient>
                  </defs>
              </svg>
          </div>
        </div>
      </section>
      <section className="bg-black2">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-12">
          <div className=" items-center lg:col-span-full justify-center">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-3xl text-lightGreen font-title leading-none tracking-tight md:text-2xl xl:text-4xl">
                Our Goals
              </h1>
            </div>

            <div className="flex justify-center items-center">
              {/* Left Arrow Button */}
              <button
                onClick={prevItem}
                className="p-2 bg-darkOrange text-white rounded-full mr-4"
                disabled={currentIndex === 0}
              >
                &#8592;
              </button>

              {/* Centered List */}
              <div className="w-full max-w-3xl flex justify-center">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                  {goals
                    .slice(currentIndex, currentIndex + maxItems)
                    .map((goal, index) => (
                      <li
                        key={index}
                        className="text-center p-6 bg-gray-800 text-lightGreen rounded-lg shadow-lg dark:bg-gray-900 dark:text-white transition duration-300 transform hover:scale-105"
                      >
                        {goal}
                      </li>
                    ))}
                </ul>
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={nextItem}
                className="p-2 bg-darkOrange text-white rounded-full ml-4"
                disabled={currentIndex + maxItems >= totalItems}
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>


  );
};

export default LandingPage;
