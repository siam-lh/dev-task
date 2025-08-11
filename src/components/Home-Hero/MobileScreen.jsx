import React from "react";
import Image from "next/image";
const MobileScreen = () => {
  return (
    <div className="md:hidden relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="324"
        height="436"
        viewBox="0 0 324 436"
        fill="none"
        className="absolute -top-5 right-5"
      >
        <path
          d="M161.5 84.0948C198.974 88.5351 301.831 86.8276 310.5 35.7117C321.336 -28.1831 169.5 -1.99996 291 114.712C376.908 197.234 289.5 403.288 -20.5 434.5"
          stroke="#FFC93E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="10 10"
        />
      </svg>
      <div className="relative">
        <div className="mt-[4rem] mb-[2.69rem]">
          <div className="px-[29px]">
            <div className="relative text-[#111D5E] text-end font-inter text-[3rem] not-italic font-bold leading-none pr-[1.3rem]">
              <h1>React</h1>
              <h1>Conference</h1>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                className="absolute -top-[2rem] right-[9rem]"
              >
                <path
                  d="M35.2266 20.9158C33.8292 15.8288 32.2924 10.811 30.6868 5.7894"
                  stroke="#FFC93E"
                  strokeWidth="2"
                  strokeMiterlimit="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.873 27.7763C22.4883 22.877 18.3515 18.631 14.5168 14.1156"
                  stroke="#FFC93E"
                  strokeWidth="2"
                  strokeMiterlimit="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.5007 37.2487C15.0895 34.9979 10.3153 33.1704 5.41798 32.5409"
                  stroke="#FFC93E"
                  strokeWidth="2"
                  strokeMiterlimit="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="py-8 text-base font-normal leading-normal text-[#0A142F] font-inter">
              <p>
                Lorem uis diam turpis quam id fermetum.In quis diam turpis quam
                id fermentu me.In quis diam turpis quam id fermentum.
              </p>
            </div>
            <div className="mb-[1.5rem] flex flex-row justify-center">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-[1.875rem] bg-[#FFC93E] text-[18px]">
                Buy Tickets
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.5001 3.125C17.5001 2.95924 17.4342 2.80027 17.317 2.68306C17.1998 2.56585 17.0408 2.5 16.8751 2.5H9.37506C9.2093 2.5 9.05033 2.56585 8.93312 2.68306C8.81591 2.80027 8.75006 2.95924 8.75006 3.125C8.75006 3.29076 8.81591 3.44973 8.93312 3.56694C9.05033 3.68415 9.2093 3.75 9.37506 3.75H15.3663L2.68256 16.4325C2.62445 16.4906 2.57835 16.5596 2.5469 16.6355C2.51545 16.7114 2.49927 16.7928 2.49927 16.875C2.49927 16.9572 2.51545 17.0386 2.5469 17.1145C2.57835 17.1904 2.62445 17.2594 2.68256 17.3175C2.74067 17.3756 2.80965 17.4217 2.88558 17.4532C2.9615 17.4846 3.04288 17.5008 3.12506 17.5008C3.20724 17.5008 3.28861 17.4846 3.36454 17.4532C3.44046 17.4217 3.50945 17.3756 3.56756 17.3175L16.2501 4.63375V10.625C16.2501 10.7908 16.3159 10.9497 16.4331 11.0669C16.5503 11.1842 16.7093 11.25 16.8751 11.25C17.0408 11.25 17.1998 11.1842 17.317 11.0669C17.4342 10.9497 17.5001 10.7908 17.5001 10.625V3.125Z"
                    fill="#0A142F"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute left-0 bottom-0 h-60 w-1/2 pointer-events-none z-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(213, 232, 243, 0.75), rgba(255, 255, 255, 0))",
                backdropFilter: "blur(100px)",
                WebkitMaskImage: `linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)`,
                maskImage: `linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)`,
                WebkitMaskComposite: "destination-in",
                maskComposite: "intersect",
              }}
            ></div>
            <div className="flex flex-row justify-center mt-[2.5rem]">
              <div>
                <div className="relative min-w-[22.4375rem] min-h-[22.83981rem] w-full h-auto">
                  <Image
                    alt="Hero Image"
                    src="/hero-Image-coding.png"
                    fill
                    className="object-cover"
                    priority
                  />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 90 89"
                    fill="none"
                    className="absolute"
                    style={{
                      width: "5rem",
                      height: "5rem",
                      bottom: 0,
                      right: "2rem",
                      transform: "translate(50%, 50%) rotate(9deg)",
                      transformOrigin: "center",
                    }}
                  >
                    <path
                      d="M65.7459 0.870674L52.367 37.621L89.1452 50.923L50.0592 49.5553L48.7734 88.6441L37.9959 51.0485L0.422946 61.9047L32.8481 40.037L10.9125 7.6577L41.7299 31.7383L65.7459 0.870674Z"
                      fill="#FFC93E"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-row justify-center mt-[2.5rem] px-6">
              <div className="relative w-full max-w-xl min-h-[22.83981rem] h-auto">
                <Image
                  alt="Hero Image"
                  src="/hero-Image-coding.png"
                  width={600}
                  height={432}
                  className="object-contain"
                  priority
                />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 90 89"
                  fill="none"
                  className="absolute"
                  style={{
                    width: "5rem",
                    height: "5rem",
                    bottom: "0%",
                    top:"70%",
                    right: "10%",
                    transform: "translate(50%, 50%) rotate(9deg)",
                    transformOrigin: "center",
                  }}
                >
                  <path
                    d="M65.7459 0.870674L52.367 37.621L89.1452 50.923L50.0592 49.5553L48.7734 88.6441L37.9959 51.0485L0.422946 61.9047L32.8481 40.037L10.9125 7.6577L41.7299 31.7383L65.7459 0.870674Z"
                    fill="#FFC93E"
                  />
                </svg>
              </div>
            </div> */}

            <div className="flex justify-between gap-4 mt-[4.1rem]">
              <div className="pl-[29px] pb-[1.2rem]">
                <div className="relative min-w-[9.81269rem] min-h-[12.5rem] w-full h-auto">
                  <Image
                    src="/hero-image-speaking.png"
                    alt="Hero Image"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="pt-15 flex items-end pb-4">
                <svg
                  width="57"
                  height="100"
                  viewBox="0 0 57 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    transform: "rotate(1800deg)",
                  }}
                  
                >
                  <path
                    d="M31.4536 0.414938C31.7849 0.273255 32.118 0.134929 32.4529 0H71.1442C71.4791 0.134929 71.8122 0.273255 72.1435 0.414938H31.4536Z"
                    fill="#FFC93E"
                  />
                  <path
                    d="M23.6679 4.56432C23.8837 4.42443 24.1007 4.28612 24.3187 4.14938H79.2784C79.4965 4.28612 79.7134 4.42443 79.9293 4.56432H23.6679Z"
                    fill="#FFC93E"
                  />
                  <path
                    d="M18.1151 8.71369C18.2777 8.57439 18.4412 8.43607 18.6055 8.29876H84.9916C85.156 8.43607 85.3194 8.57439 85.482 8.71369H18.1151Z"
                    fill="#FFC93E"
                  />
                  <path
                    d="M13.7998 12.8631C13.9287 12.724 14.0584 12.5857 14.1887 12.4481H89.4084C89.5388 12.5857 89.6684 12.724 89.7973 12.8631H13.7998Z"
                    fill="#FFC93E"
                  />
                  <path
                    d="M10.3351 17.0124C10.4393 16.8736 10.5442 16.7353 10.6498 16.5975H92.9474C93.0529 16.7353 93.1578 16.8736 93.262 17.0124H10.3351Z"
                    fill="#FFC93E"
                  />
                  <path
                    d="M7.52297 21.1618C7.60752 21.0231 7.69272 20.8848 7.77854 20.7469H95.8186C95.9044 20.8848 95.9896 21.0231 96.0742 21.1618H7.52297Z"
                    fill="#FFC93E"
                  />
                  <path
                    d="M5.24721 25.3112C5.3152 25.1725 5.3838 25.0342 5.45299 24.8963H98.1441C98.2133 25.0342 98.2819 25.1725 98.3499 25.3112H5.24721Z"
                    fill="#FFC93E"
                  />
                  <path
                    d="M3.43373 29.4606C3.48719 29.322 3.54122 29.1837 3.59583 29.0456H100.001C100.056 29.1837 100.11 29.322 100.163 29.4606H3.43373Z"
                    fill="#FFC93E"
                  />
                  <path
                    d="M2.03292 33.61C2.07322 33.4714 2.11408 33.3331 2.1555 33.195H101.442C101.483 33.3331 101.524 33.4714 101.564 33.61H2.03292Z"
                    fill="#FFC93E"
                  />
                  <path
                    d="M1.01065 37.7593C1.03874 37.6208 1.06739 37.4825 1.09658 37.3444H102.501C102.53 37.4825 102.558 37.6208 102.586 37.7593H1.01065Z"
                    fill="#FFC93E"
                  />
                  <path
                    d="M0.343271 41.9087C0.359818 41.7702 0.376911 41.6319 0.394547 41.4938H103.203C103.22 41.6319 103.237 41.7702 103.254 41.9087H0.343271Z"
                    fill="#FFC93E"
                  />
                  <path
                    d="M0.0146707 46.0581C0.0201126 45.9196 0.0260968 45.7813 0.0326212 45.6432H103.564C103.571 45.7813 103.577 45.9196 103.582 46.0581H0.0146707Z"
                    fill="#FFC93E"
                  />
                  <path
                    d="M0.0146707 50.2075C0.00923966 50.0693 0.00434876 49.931 0 49.7925H103.597C103.593 49.931 103.588 50.0693 103.582 50.2075H0.0146707Z"
                    fill="#FFC93E"
                  />
                  <path
                    d="M0.343271 54.3568C0.326763 54.2187 0.310798 54.0804 0.295378 53.9419H103.302C103.286 54.0804 103.27 54.2187 103.254 54.3568H0.343271Z"
                    fill="#FFC93E"
                  />
                  <path
                    d="M1.01065 58.5062C0.982635 58.3681 0.955171 58.2298 0.928258 58.0913H102.669C102.642 58.2298 102.614 58.3681 102.586 58.5062H1.01065Z"
                    fill="#FFC93E"
                  />
                  <path
                    d="M2.03292 62.6556C1.99276 62.5175 1.95316 62.3792 1.91412 62.2407H101.683C101.644 62.3792 101.604 62.5175 101.564 62.6556H2.03292Z"
                    fill="#FFC93E"
                  />
                  <path
                    d="M3.43373 66.805C3.38049 66.667 3.32783 66.5286 3.27574 66.39H100.321C100.269 66.5286 100.217 66.667 100.163 66.805H3.43373Z"
                    fill="#FFC93E"
                  />
                  <path
                    d="M5.24721 70.9544C5.17955 70.8164 5.11249 70.6781 5.04603 70.5394H98.5511C98.4846 70.6781 98.4176 70.8164 98.3499 70.9544H5.24721Z"
                    fill="#FFC93E"
                  />
                  <path
                    d="M7.52297 75.1037C7.43893 74.9658 7.35551 74.8275 7.27273 74.6888H96.3244C96.2416 74.8275 96.1582 74.9658 96.0742 75.1037H7.52297Z"
                    fill="#FFC93E"
                  />
                  <path
                    d="M10.3351 79.2531C10.2317 79.1153 10.1289 78.977 10.0269 78.8382H93.5702C93.4682 78.977 93.3654 79.1153 93.262 79.2531H10.3351Z"
                    fill="#FFC93E"
                  />
                  <path
                    d="M13.7998 83.4025C13.6722 83.2649 13.5454 83.1266 13.4193 82.9876H90.1778C90.0517 83.1266 89.9249 83.2649 89.7973 83.4025H13.7998Z"
                    fill="#FFC93E"
                  />
                  <path
                    d="M18.1151 87.5519C17.9548 87.4145 17.7953 87.2762 17.6367 87.1369H85.9605C85.8018 87.2762 85.6424 87.4145 85.482 87.5519H18.1151Z"
                    fill="#FFC93E"
                  />
                  <path
                    d="M23.6679 91.7012C23.4567 91.5644 23.2467 91.4261 23.0377 91.2863H80.5594C80.3505 91.4261 80.1404 91.5644 79.9293 91.7012H23.6679Z"
                    fill="#FFC93E"
                  />
                  <path
                    d="M31.4536 95.8506C31.1373 95.7154 30.8225 95.577 30.5095 95.4357H73.0876C72.7746 95.577 72.4599 95.7154 72.1435 95.8506H31.4536Z"
                    fill="#FFC93E"
                  />
                  <path
                    d="M58.3851 99.5851C56.2282 99.8589 54.0298 100 51.7986 100C49.5673 100 47.369 99.8589 45.212 99.5851H58.3851Z"
                    fill="#FFC93E"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScreen;
