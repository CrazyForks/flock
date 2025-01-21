import { Icon, type IconProps, createIcon } from "@chakra-ui/icons";

import { SiliconFlowIcon, ZhipuAIIcon } from "../models";
import { FaProjectDiagram } from "react-icons/fa";

const Serper = createIcon({
  displayName: "Serper",
  viewBox: "0 0 128 128",
  path: (
    <svg
      width="128px"
      height="128px"
      viewBox="0 0 128 128"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>serper</title>
      <g
        id="ai-doc-check-2.0"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="画板" fill="#90CDF4" fillRule="nonzero">
          <g id="serper">
            <path
              d="M65.2785371,32.0482743 C68.7012571,32.0482743 71.9303314,32.6286629 74.9661257,33.7892571 C78.0315429,34.9500343 80.7100343,36.5571657 83.0017829,38.6106514 C85.2935314,40.66432 87.0345143,43.0453029 88.2249143,45.7536 C88.4928,46.3488 88.6268343,46.9589943 88.6268343,47.584 C88.6268343,48.8042057 88.1802971,49.8607543 87.2875886,50.7536457 C86.42432,51.6167314 85.3827657,52.0482743 84.16256,52.0482743 C83.3589029,52.0482743 82.5554286,51.7952 81.7517714,51.2892343 C80.9482971,50.7536457 80.38272,50.1136457 80.0554057,49.3696 C78.9244343,46.8101486 77.0346057,44.7714743 74.3857371,43.2535771 C71.7666743,41.73568 68.73088,40.9768229 65.2785371,40.9768229 C63.5821714,40.9768229 61.7815771,41.1850971 59.8767543,41.6018286 C58.0017371,42.0183771 56.2309486,42.6583771 54.5642057,43.5214629 C52.8976457,44.3547429 51.5434057,45.4112914 50.5018514,46.6911086 C49.4601143,47.9707429 48.9393371,49.4590171 48.9393371,51.1553829 C48.9393371,52.5244343 49.3856914,53.7148343 50.2785829,54.7267657 C51.1714743,55.7088914 52.1684114,56.4827429 53.2695771,57.0481371 C55.8590171,58.3279543 58.71616,59.2208457 61.8410057,59.7268114 C64.99584,60.2327771 68.1802971,60.7237486 71.39456,61.2000914 C74.6090057,61.6762514 77.6,62.5095314 80.3679086,63.6999314 C82.1238857,64.4439771 83.80544,65.4709029 85.4125714,66.7803429 C87.0197029,68.0899657 88.3291429,69.6821029 89.3410743,71.55712 C90.3530057,73.4321371 90.8589714,75.6344686 90.8589714,78.1642971 C90.8589714,81.4381714 90.0703086,84.3101257 88.4928,86.7803429 C86.9154743,89.25056 84.8469943,91.3042286 82.2875429,92.9409829 C79.7279086,94.57792 76.9451886,95.81312 73.9392,96.6464 C70.9630171,97.4500571 68.0464457,97.8517943 65.1893029,97.8517943 C61.3202286,97.8517943 57.6892343,97.2416 54.2965029,96.0213943 C50.9035886,94.7713829 47.9422171,93.0154057 45.4125714,90.7536457 C42.8827429,88.4618971 40.9482971,85.7834057 39.6088686,82.7178057 C39.3409829,82.1226057 39.2071314,81.5274057 39.2071314,80.9322057 C39.2071314,79.7118171 39.6386743,78.6702629 40.50176,77.8071771 C41.3946514,76.9142857 42.4512,76.4679314 43.6714057,76.4679314 C44.5046857,76.4679314 45.3231543,76.7356343 46.1268114,77.2714057 C46.9302857,77.7773714 47.4808686,78.4171886 47.77856,79.19104 C49.0881829,82.1970286 51.3053257,84.5780114 54.4303543,86.3339886 C57.5553829,88.06016 61.1415771,88.9232457 65.1893029,88.9232457 C67.7191314,88.9232457 70.2637714,88.5511314 72.8232229,87.8070857 C75.3826743,87.0334171 77.5255771,85.8578286 79.2517486,84.28032 C81.0077257,82.6731886 81.8856229,80.6345143 81.8856229,78.1642971 C81.8856229,76.5869714 81.3500343,75.2923429 80.2784914,74.2804114 C79.2369371,73.2386743 78.0911543,72.4500114 76.8411429,71.91424 C74.0136229,70.6940343 70.9928229,69.8607543 67.77856,69.4142171 C64.5642971,68.9380571 61.3648457,68.4470857 58.1803886,67.94112 C54.9957486,67.4053486 52.0195657,66.4380343 49.25184,65.03936 C46.9006629,63.8487771 44.75776,62.1226057 42.8231314,59.8606629 C40.9184914,57.5690971 39.9659886,54.6673371 39.9659886,51.1553829 C39.9659886,48.06016 40.7100343,45.3368686 42.1981257,42.9856914 C43.7160229,40.6047086 45.71008,38.6106514 48.1802971,37.00352 C50.68032,35.3665829 53.4184229,34.1315657 56.3946057,33.2982857 C59.3707886,32.4648229 62.33216,32.0482743 65.2785371,32.0482743 Z"
              id="路径"
            ></path>
            <path
              d="M64,0 C99.3462239,0 128,28.6537761 128,64 C128,99.3462239 99.3462239,128 64,128 C28.6537761,128 0,99.3462239 0,64 C0,28.6537761 28.6537761,0 64,0 Z M64,10.9714286 C34.7131288,10.9714286 10.9714286,34.7131288 10.9714286,64 C10.9714286,93.2868712 34.7131288,117.028571 64,117.028571 C93.2868712,117.028571 117.028571,93.2868712 117.028571,64 C117.028571,34.7131288 93.2868712,10.9714286 64,10.9714286 Z"
              id="椭圆形"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  ),
});
const OpenWeather = createIcon({
  displayName: "OpenWeather",
  viewBox: "0 0 16 16",
  path: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
      <g clipPath="url(#clip0_16624_62807)">
        <path
          d="M7.11111 0.888889C7.11111 0.888889 7.11111 0 8 0C8.88889 0 8.88889 0.888889 8.88889 0.888889V1.77778C8.88889 1.77778 8.88889 2.66667 8 2.66667C7.11111 2.66667 7.11111 1.77778 7.11111 1.77778V0.888889ZM15.1111 7.11111C15.1111 7.11111 16 7.11111 16 8C16 8.88889 15.1111 8.88889 15.1111 8.88889H14.2222C14.2222 8.88889 13.3333 8.88889 13.3333 8C13.3333 7.11111 14.2222 7.11111 14.2222 7.11111H15.1111ZM1.77778 7.11111C1.77778 7.11111 2.66667 7.11111 2.66667 8C2.66667 8.88889 1.77778 8.88889 1.77778 8.88889H0.888889C0.888889 8.88889 0 8.88889 0 8C0 7.11111 0.888889 7.11111 0.888889 7.11111H1.77778ZM4.05378 3.24133C4.05378 3.24133 4.68222 3.86978 4.05378 4.49822C3.42533 5.12667 2.79689 4.49822 2.79689 4.49822L2.168 3.87022C2.168 3.87022 1.53956 3.24178 2.168 2.61289C2.79689 1.98444 3.42533 2.61289 3.42533 2.61289L4.05378 3.24133ZM13.2036 4.49822C13.2036 4.49822 12.5751 5.12667 11.9467 4.49822C11.3182 3.86978 11.9467 3.24133 11.9467 3.24133L12.5751 2.61289C12.5751 2.61289 13.2036 1.98444 13.832 2.61289C14.4604 3.24133 13.832 3.86978 13.832 3.86978L13.2036 4.49822ZM3.87022 13.8316C3.87022 13.8316 3.24178 14.46 2.61333 13.8316C1.98489 13.2031 2.61333 12.5747 2.61333 12.5747L3.24178 11.9462C3.24178 11.9462 3.87022 11.3178 4.49867 11.9462C5.12711 12.5747 4.49867 13.2031 4.49867 13.2031L3.87022 13.8316Z"
          fill="#FFCF27"
        />
        <path
          d="M8.00011 12.4446C10.4547 12.4446 12.4446 10.4547 12.4446 8.00011C12.4446 5.54551 10.4547 3.55566 8.00011 3.55566C5.54551 3.55566 3.55566 5.54551 3.55566 8.00011C3.55566 10.4547 5.54551 12.4446 8.00011 12.4446Z"
          fill="#FFCB13"
        />
        <path
          d="M13.2343 10.3111C12.949 10.3111 12.6743 10.3556 12.4152 10.4378C12.1094 9.53647 11.2774 8.88892 10.2966 8.88892C9.24411 8.88892 8.36322 9.63469 8.11922 10.6387C7.85878 10.436 7.53744 10.3116 7.18544 10.3116C6.32633 10.3116 5.62989 11.0276 5.62989 11.9116C5.62989 12.1262 5.67255 12.3298 5.74722 12.5174C5.59878 12.4742 5.44544 12.4445 5.28411 12.4445C4.32944 12.4445 3.55566 13.2405 3.55566 14.2222C3.55566 15.204 4.32944 16 5.28411 16H13.2348C14.7619 16 16.0001 14.7271 16.0001 13.1556C16.0001 11.5845 14.7619 10.3111 13.2343 10.3111Z"
          fill="#E9F6FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_16624_62807">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
});
const DuckduckgoSearch = createIcon({
  displayName: "DuckduckgoSearch",
  viewBox: "0 0 32 32",
  path: (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
      <g transform="matrix(.266667 0 0 .266667 -17.954934 -5.057333)">
        <circle cx="127.332" cy="78.966" r="51.15" fill="#de5833" />
        <defs>
          <path
            id="A"
            d="M178.684 78.824c0 28.316-23.035 51.354-51.354 51.354-28.313 0-51.348-23.04-51.348-51.354s23.036-51.35 51.348-51.35c28.318 0 51.354 23.036 51.354 51.35z"
          />
        </defs>
        <clipPath id="B"></clipPath>
        <g clipPath="url(#B)">
          <path
            d="M148.293 155.158c-1.8-8.285-12.262-27.04-16.23-34.97s-7.938-19.1-6.13-26.322c.328-1.312-3.436-11.308-2.354-12.015 8.416-5.5 10.632.6 14.002-1.862 1.734-1.273 4.1 1.047 4.7-1.06 2.158-7.567-3.006-20.76-8.77-26.526-1.885-1.88-4.77-3.06-8.03-3.687-1.254-1.713-3.275-3.36-6.138-4.88-3.188-1.697-10.12-3.938-13.717-4.535-2.492-.4-3.055.287-4.12.46.992.088 5.7 2.414 6.615 2.55-.916.62-3.607-.028-5.324.742-.865.392-1.512 1.877-1.506 2.58 4.9-.496 12.574-.016 17.1 2-3.602.4-9.08.867-11.436 2.105-6.848 3.608-9.873 12.035-8.07 22.133 1.804 10.075 9.738 46.85 12.262 59.13 2.525 12.264-5.408 20.2-10.455 22.354l5.408.363-1.8 3.967c6.484.72 13.695-1.44 13.695-1.44-1.438 3.965-11.176 5.412-11.176 5.412s4.7 1.438 12.258-1.447l12.263-4.688 3.604 9.373 6.854-6.847 2.885 7.2c.014-.001 5.424-1.808 3.62-10.103z"
            fill="#d5d7d8"
          />
          <path
            d="M150.47 153.477c-1.795-8.3-12.256-27.043-16.228-34.98s-7.935-19.112-6.13-26.32c.335-1.3.34-6.668 1.43-7.38 8.4-5.494 7.812-.184 11.187-2.645 1.74-1.27 3.133-2.806 3.738-4.912 2.164-7.572-3.006-20.76-8.773-26.53-1.88-1.88-4.768-3.062-8.023-3.686-1.252-1.718-3.27-3.36-6.13-4.882-5.4-2.862-12.074-4.006-18.266-2.883 1 .1 3.256 2.138 4.168 2.273-1.38.936-5.053.815-5.03 2.896 4.916-.492 10.303.285 14.834 2.297-3.602.4-6.955 1.3-9.3 2.543-6.854 3.603-8.656 10.812-6.854 20.914 1.807 10.097 9.742 46.873 12.256 59.126 2.527 12.26-5.402 20.188-10.45 22.354l5.408.36-1.8 3.973c6.484.72 13.695-1.44 13.695-1.44-1.438 3.974-11.176 5.406-11.176 5.406s4.686 1.44 12.258-1.445l12.27-4.688 3.604 9.373 6.852-6.85 2.9 7.215c-.016.007 5.388-1.797 3.58-10.088z"
            fill="#fff"
          />
          <path
            d="M109.02 70.69c0-2.093 1.693-3.787 3.79-3.787 2.1 0 3.785 1.694 3.785 3.787s-1.695 3.786-3.785 3.786c-2.096.001-3.79-1.692-3.79-3.786z"
            fill="#2d4f8e"
          />
          <path
            d="M113.507 69.43a.98.98 0 0 1 .98-.983c.543 0 .984.438.984.983s-.44.984-.984.984c-.538.001-.98-.44-.98-.984z"
            fill="#fff"
          />
          <path
            d="M134.867 68.445c0-1.793 1.46-3.25 3.252-3.25 1.8 0 3.256 1.457 3.256 3.25 0 1.8-1.455 3.258-3.256 3.258a3.26 3.26 0 0 1-3.252-3.258z"
            fill="#2d4f8e"
          />
          <path
            d="M138.725 67.363c0-.463.38-.843.838-.843a.84.84 0 0 1 .846.843c0 .47-.367.842-.846.842a.84.84 0 0 1-.838-.842z"
            fill="#fff"
          />
          <linearGradient
            id="C"
            gradientUnits="userSpaceOnUse"
            x1="105.318"
            y1="60.979"
            x2="113.887"
            y2="60.979"
          >
            <stop offset=".006" stopColor="#6176b9" />
            <stop offset=".691" stopColor="#394a9f" />
          </linearGradient>
          <path
            d="M113.886 59.718s-2.854-1.3-5.63.453-2.668 3.523-2.668 3.523-1.473-3.283 2.453-4.892 5.844.916 5.844.916z"
            fill="url(#C)"
          />
          <linearGradient
            id="D"
            gradientUnits="userSpaceOnUse"
            x1="132.273"
            y1="58.371"
            x2="140.078"
            y2="58.371"
          >
            <stop offset=".006" stopColor="#6176b9" />
            <stop offset=".691" stopColor="#394a9f" />
          </linearGradient>
          <path
            d="M140.078 59.458s-2.05-1.172-3.643-1.152c-3.27.043-4.162 1.488-4.162 1.488s.55-3.445 4.732-2.754c2.268.377 3.073 2.418 3.073 2.418z"
            fill="url(#D)"
          />
        </g>
        <path
          d="M124.4 85.295c.38-2.3 6.3-6.625 10.5-6.887 4.2-.265 5.5-.205 9-1.043s12.535-3.088 15.033-4.242c2.504-1.156 13.104.572 5.63 4.738-3.232 1.8-11.943 5.13-18.172 6.987-6.22 1.86-10-1.776-12.06 1.28-1.646 2.432-.334 5.762 7.1 6.453 10.037.93 19.66-4.52 20.72-1.625s-8.625 6.508-14.525 6.623c-5.893.1-17.77-3.896-19.555-5.137s-4.165-4.13-3.67-7.148z"
          fill="#fdd20a"
        />
        <path
          d="M128.943 115.592s-14.102-7.52-14.332-4.47c-.238 3.056 0 15.5 1.643 16.45s13.396-6.108 13.396-6.108zm5.403-.474s9.635-7.285 11.754-6.815c2.1.48 2.582 15.5.7 16.23-1.88.7-12.908-3.813-12.908-3.813z"
          fill="#65bc46"
        />
        <path
          d="M125.53 116.4c0 4.932-.7 7.05 1.4 7.52s6.104 0 7.518-.938.232-7.28-.232-8.465c-.477-1.174-8.696-.232-8.696 1.884z"
          fill="#43a244"
        />
        <path
          d="M126.426 115.292c0 4.933-.707 7.05 1.4 7.52 2.106.48 6.104 0 7.52-.938 1.4-.94.23-7.28-.236-8.466-.473-1.173-8.692-.227-8.692 1.885z"
          fill="#65bc46"
        />
        <circle
          cx="127.331"
          cy="78.965"
          r="57.5"
          fill="none"
          stroke="#de5833"
          strokeWidth="5"
        />
      </g>
    </svg>
  ),
});

const GoogleTranslate = createIcon({
  displayName: "GoogleTranslate",

  path: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M22.501 12.7332C22.501 11.8699 22.4296 11.2399 22.2748 10.5865H12.2153V14.4832H18.12C18.001 15.4515 17.3582 16.9099 15.9296 17.8898L15.9096 18.0203L19.0902 20.435L19.3106 20.4565C21.3343 18.6249 22.501 15.9298 22.501 12.7332Z"
        fill="#4285F4"
      />
      <path
        d="M12.214 23C15.1068 23 17.5353 22.0666 19.3092 20.4567L15.9282 17.8899C15.0235 18.5083 13.8092 18.9399 12.214 18.9399C9.38069 18.9399 6.97596 17.1083 6.11874 14.5766L5.99309 14.5871L2.68583 17.0954L2.64258 17.2132C4.40446 20.6433 8.0235 23 12.214 23Z"
        fill="#34A853"
      />
      <path
        d="M6.12046 14.5766C5.89428 13.9233 5.76337 13.2233 5.76337 12.5C5.76337 11.7766 5.89428 11.0766 6.10856 10.4233L6.10257 10.2841L2.75386 7.7355L2.64429 7.78658C1.91814 9.20993 1.50146 10.8083 1.50146 12.5C1.50146 14.1916 1.91814 15.7899 2.64429 17.2132L6.12046 14.5766Z"
        fill="#FBBC05"
      />
      <path
        d="M12.2141 6.05997C14.2259 6.05997 15.583 6.91163 16.3569 7.62335L19.3807 4.73C17.5236 3.03834 15.1069 2 12.2141 2C8.02353 2 4.40447 4.35665 2.64258 7.78662L6.10686 10.4233C6.97598 7.89166 9.38073 6.05997 12.2141 6.05997Z"
        fill="#EB4335"
      />
    </svg>
  ),
});

const Wikipedia = createIcon({
  displayName: "Wikipedia",

  path: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M22.3627 6.50009H18.3156H18.1783V6.63743V7.07751V7.21484H18.3156H18.5969C18.924 7.21484 19.2189 7.38272 19.386 7.66394C19.553 7.94516 19.5593 8.28448 19.4028 8.57169L14.9027 16.8317L12.8532 11.9459L14.7837 8.40336C15.1832 7.67026 15.95 7.21484 16.7849 7.21484H16.8761H17.0134V7.07751V6.63743V6.50009H16.8761H12.829H12.6917V6.63743V7.07751V7.21484H12.829H13.1102C13.4373 7.21484 13.7323 7.38272 13.8993 7.66394C14.0663 7.94516 14.0726 8.28448 13.9162 8.57169L12.5159 11.1419L11.268 8.16696C11.1776 7.95134 11.1999 7.71594 11.3294 7.52124C11.4589 7.32654 11.6673 7.21484 11.9011 7.21484H12.221H12.3583V7.07751V6.63743V6.50009H12.221H7.3808H7.24347V6.63743V7.07751V7.21484H7.3808H7.44737C8.40218 7.21484 9.25775 7.78379 9.62715 8.66426L11.471 13.0599L9.4161 16.8317L5.78141 8.16696C5.69095 7.95134 5.71334 7.71594 5.8428 7.52124C5.97227 7.32654 6.18065 7.21484 6.41449 7.21484H6.90603H7.04337V7.07751V6.63743V6.50009H6.90603H1.63734H1.5V6.63743V7.07751V7.21484H1.63734H1.96072C2.91554 7.21484 3.77116 7.78379 4.1405 8.66426L8.33049 18.6529C8.40379 18.8276 8.57372 18.9405 8.76347 18.9405C8.93762 18.9405 9.09139 18.849 9.17485 18.6958L9.72141 17.6928L11.8081 13.8635L13.8171 18.6528C13.8904 18.8275 14.0603 18.9404 14.2501 18.9404C14.4242 18.9404 14.578 18.849 14.6614 18.6958L15.208 17.6928L20.2703 8.40327C20.6698 7.67016 21.4366 7.21475 22.2715 7.21475H22.3627H22.5V7.07741V6.63734V6.5H22.3627V6.50009Z"
        fill="#222A30"
      />
    </svg>
  ),
});

const tavilysearch = createIcon({
  displayName: "tavilysearch",
  viewBox: "0 0 500 500",
  path: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="500"
      zoomAndPan="magnify"
      height="500"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
    >
      <defs>
        <clipPath id="d0348dc115">
          <path
            d="M 109.378906 231.132812 L 146.484375 231.132812 L 146.484375 268.238281 L 109.378906 268.238281 Z M 109.378906 231.132812 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="a28b194a7a">
          <path
            d="M 127.933594 231.132812 C 117.6875 231.132812 109.378906 239.4375 109.378906 249.6875 C 109.378906 259.933594 117.6875 268.238281 127.933594 268.238281 C 138.179688 268.238281 146.484375 259.933594 146.484375 249.6875 C 146.484375 239.4375 138.179688 231.132812 127.933594 231.132812 Z M 127.933594 231.132812 "
            clipRule="nonzero"
          />
        </clipPath>
      </defs>
      <path
        stroke-linecap="round"
        transform="matrix(0, -2.578223, 2.578223, 0, 113.745458, 254.140061)"
        fill="none"
        stroke-linejoin="miter"
        d="M 5.499573 5.500038 L 79.114962 5.500038 "
        stroke="#f25022"
        strokeWidth="11"
        stroke-opacity="1"
        stroke-miterlimit="4"
      />
      <path
        stroke-linecap="round"
        transform="matrix(0, -2.578223, 2.578223, 0, 113.745458, 254.140061)"
        fill="none"
        stroke-linejoin="round"
        d="M 59.865692 -10.999336 L 81.864858 5.500038 L 59.865692 21.999412 "
        stroke="#f25022"
        strokeWidth="11"
        stroke-opacity="1"
        stroke-miterlimit="4"
      />
      <path
        stroke-linecap="round"
        transform="matrix(2.578223, -0.000251357, 0.000251357, 2.578223, 126.828174, 239.987372)"
        fill="none"
        stroke-linejoin="miter"
        d="M 5.500751 5.50068 L 72.398214 5.499627 "
        stroke="#ffb901"
        strokeWidth="11"
        stroke-opacity="1"
        stroke-miterlimit="4"
      />
      <path
        stroke-linecap="round"
        transform="matrix(2.578223, -0.000251357, 0.000251357, 2.578223, 126.828174, 239.987372)"
        fill="none"
        stroke-linejoin="round"
        d="M 53.149037 -11.000109 L 75.148109 5.499895 L 53.14885 22.000154 "
        stroke="#ffb901"
        strokeWidth="11"
        stroke-opacity="1"
        stroke-miterlimit="4"
      />
      <path
        stroke-linecap="round"
        transform="matrix(-1.692446, 1.944957, -1.944957, -1.692446, 134.219043, 258.208373)"
        fill="none"
        stroke-linejoin="miter"
        d="M 4.499518 4.49999 L 38.441562 4.500107 "
        stroke="#04a3ec"
        strokeWidth="9"
        stroke-opacity="1"
        stroke-miterlimit="4"
      />
      <path
        stroke-linecap="round"
        transform="matrix(-1.692446, 1.944957, -1.944957, -1.692446, 134.219043, 258.208373)"
        fill="none"
        stroke-linejoin="round"
        d="M 22.691248 -9.000192 L 40.69038 4.49943 L 22.68978 17.999994 "
        stroke="#04a3ec"
        strokeWidth="9"
        stroke-opacity="1"
        stroke-miterlimit="4"
      />
      <g clipPath="url(#d0348dc115)">
        <g clipPath="url(#a28b194a7a)">
          <path
            fill="#32b37f"
            d="M 109.378906 231.132812 L 146.484375 231.132812 L 146.484375 268.238281 L 109.378906 268.238281 Z M 109.378906 231.132812 "
            fillOpacity="1"
            fillRule="nonzero"
          />
        </g>
      </g>
    </svg>
  ),
});
const calculator = createIcon({
  displayName: "calculator",
  viewBox: "0 0 500 500",
  path: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="512px"
      height="512px"
    >
      <g>
        <path
          fill="#010101"
          d="M 354.5,-0.5 C 364.5,-0.5 374.5,-0.5 384.5,-0.5C 438.965,10.4672 470.465,43.4672 479,98.5C 481.412,127.587 473.912,153.753 456.5,177C 473.277,199.338 480.777,224.505 479,252.5C 477.092,257.205 473.592,259.538 468.5,259.5C 463.661,258.828 460.495,256.162 459,251.5C 460.432,229.538 454.598,209.871 441.5,192.5C 432.642,197.031 426.976,194.531 424.5,185C 424.909,182.679 425.743,180.513 427,178.5C 460.028,146.677 467.361,109.677 449,67.5C 422.577,25.5507 385.41,11.384 337.5,25C 311.514,35.6522 293.681,54.1522 284,80.5C 280.753,89.5232 280.753,98.5232 284,107.5C 292.532,118.302 303.032,120.469 315.5,114C 321.767,108.633 325.267,101.8 326,93.5C 336.331,71.081 353.831,61.2477 378.5,64C 400.878,70.54 413.211,85.3734 415.5,108.5C 412.61,138.225 396.276,153.725 366.5,155C 349.702,160.095 344.202,170.929 350,187.5C 357.228,197.452 367.062,201.618 379.5,200C 401.515,206.191 413.515,220.691 415.5,243.5C 414.092,267.737 401.759,283.237 378.5,290C 343.224,291.728 324.724,274.895 323,239.5C 317.83,226.332 308.33,221.165 294.5,224C 284.918,228.005 279.918,235.171 279.5,245.5C 281.411,284.518 300.077,312.018 335.5,328C 358.938,336.837 382.271,336.504 405.5,327C 412.76,322.871 420.093,319.038 427.5,315.5C 430.916,316.044 433.916,317.378 436.5,319.5C 439.366,324.763 438.699,329.596 434.5,334C 405.492,354.002 373.825,359.669 339.5,351C 332.724,348.594 326.058,346.261 319.5,344C 300.325,372.018 280.658,399.685 260.5,427C 280.495,426.72 300.495,426.72 320.5,427C 348.67,433.811 360.503,451.644 356,480.5C 350.502,497.644 339.002,507.977 321.5,511.5C 273.833,511.5 226.167,511.5 178.5,511.5C 155.982,508.98 142.149,496.646 137,474.5C 135.493,458.689 139.826,444.689 150,432.5C 183.556,389.053 215.889,344.72 247,299.5C 254.022,289.129 258.522,277.796 260.5,265.5C 258.869,251.037 250.703,243.037 236,241.5C 228.116,242.442 221.449,245.775 216,251.5C 212.245,258.836 209.245,266.503 207,274.5C 199.293,287.695 187.793,295.028 172.5,296.5C 176.465,317.119 170.465,333.952 154.5,347C 136.508,356.482 119.174,355.482 102.5,344C 95.553,337.61 91.053,329.777 89,320.5C 88.5,243.167 88.3333,165.834 88.5,88.5C 63.3361,93.0839 45.1694,84.0839 34,61.5C 28.1052,40.8522 33.6052,24.0188 50.5,11C 55.1719,8.16348 60.1719,6.16348 65.5,5C 89.8333,4.33333 114.167,4.33333 138.5,5C 155.9,9.40004 167.067,20.2334 172,37.5C 172.167,83.8369 172.667,130.17 173.5,176.5C 206.996,155.157 242.329,151.657 279.5,166C 316.965,183.136 338.798,211.969 345,252.5C 351.754,268.089 363.254,273.256 379.5,268C 394.184,259.279 398.018,247.112 391,231.5C 388.433,227.3 384.933,224.133 380.5,222C 373.295,220.071 365.961,218.737 358.5,218C 331.532,207.563 322.032,188.396 330,160.5C 335.808,148.024 345.308,139.858 358.5,136C 365.961,135.263 373.295,133.929 380.5,132C 395.003,122.489 398.17,109.989 390,94.5C 375.586,79.6848 361.586,80.0181 348,95.5C 345.395,103.313 342.395,110.98 339,118.5C 325.26,137.063 307.427,142.563 285.5,135C 266.698,125.234 258.532,109.734 261,88.5C 273.213,38.7842 304.38,9.11757 354.5,-0.5 Z"
        />
      </g>
      <g>
        <path
          fill="#9ee3a3"
          d="M 468.5,259.5 C 467.281,267.376 465.281,275.043 462.5,282.5C 451.52,279.98 446.687,284.313 448,295.5C 449.332,297.66 450.832,299.66 452.5,301.5C 447.567,307.772 442.233,313.772 436.5,319.5C 433.916,317.378 430.916,316.044 427.5,315.5C 420.093,319.038 412.76,322.871 405.5,327C 382.271,336.504 358.938,336.837 335.5,328C 300.077,312.018 281.411,284.518 279.5,245.5C 279.918,235.171 284.918,228.005 294.5,224C 308.33,221.165 317.83,226.332 323,239.5C 324.724,274.895 343.224,291.728 378.5,290C 401.759,283.237 414.092,267.737 415.5,243.5C 413.515,220.691 401.515,206.191 379.5,200C 367.062,201.618 357.228,197.452 350,187.5C 344.202,170.929 349.702,160.095 366.5,155C 396.276,153.725 412.61,138.225 415.5,108.5C 413.211,85.3734 400.878,70.54 378.5,64C 353.831,61.2477 336.331,71.081 326,93.5C 325.267,101.8 321.767,108.633 315.5,114C 303.032,120.469 292.532,118.302 284,107.5C 280.753,98.5232 280.753,89.5232 284,80.5C 293.681,54.1522 311.514,35.6522 337.5,25C 385.41,11.384 422.577,25.5507 449,67.5C 467.361,109.677 460.028,146.677 427,178.5C 425.743,180.513 424.909,182.679 424.5,185C 426.976,194.531 432.642,197.031 441.5,192.5C 454.598,209.871 460.432,229.538 459,251.5C 460.495,256.162 463.661,258.828 468.5,259.5 Z"
        />
      </g>
      <g>
        <path
          fill="#fc9a99"
          d="M 69.5,24.5 C 90.8359,24.3334 112.169,24.5 133.5,25C 142.793,26.9579 148.96,32.4579 152,41.5C 152.667,93.1667 152.667,144.833 152,196.5C 138.503,212.996 130.337,231.829 127.5,253C 127.929,271.035 136.096,284.201 152,292.5C 152.667,300.5 152.667,308.5 152,316.5C 145.467,332.517 134.301,337.017 118.5,330C 113.781,326.611 110.614,322.111 109,316.5C 108.5,240.501 108.333,164.501 108.5,88.5C 116.872,87.4331 120.039,82.7664 118,74.5C 117.215,72.714 116.049,71.214 114.5,70C 99.234,68.7139 83.9007,68.0473 68.5,68C 55.3901,62.9539 50.2234,53.4539 53,39.5C 56.1733,31.8218 61.6733,26.8218 69.5,24.5 Z"
        />
      </g>
      <g>
        <path
          fill="#fce4b2"
          d="M 224.5,177.5 C 252.959,175.374 277.626,183.874 298.5,203C 281.3,204.863 269.133,213.696 262,229.5C 238.897,216.285 218.23,219.285 200,238.5C 197.268,242.241 194.934,246.241 193,250.5C 189.531,272.81 177.364,279.977 156.5,272C 149.298,265.76 146.465,257.927 148,248.5C 158.982,209.013 184.482,185.346 224.5,177.5 Z"
        />
      </g>
      <g>
        <path
          fill="#010201"
          d="M 462.5,282.5 C 467.503,286.476 468.669,291.476 466,297.5C 462.265,301.096 457.765,302.429 452.5,301.5C 450.832,299.66 449.332,297.66 448,295.5C 446.687,284.313 451.52,279.98 462.5,282.5 Z"
        />
      </g>
      <g>
        <path
          fill="#fde4b2"
          d="M 271.5,297.5 C 272.496,297.414 273.329,297.748 274,298.5C 281.267,311.512 290.767,322.679 302.5,332C 281.138,364.194 258.805,395.694 235.5,426.5C 230.073,426.627 225.239,428.294 221,431.5C 217.958,438.085 219.458,443.252 225.5,447C 257.5,447.333 289.5,447.667 321.5,448C 336.675,455.19 340.508,466.356 333,481.5C 329.902,485.935 325.736,488.768 320.5,490C 272.5,490.667 224.5,490.667 176.5,490C 161.021,485.549 154.854,475.382 158,459.5C 159.333,456.833 160.667,454.167 162,451.5C 196.067,406.365 229.4,360.699 262,314.5C 265.179,308.806 268.345,303.139 271.5,297.5 Z"
        />
      </g>
    </svg>
  ),
});

const spark = createIcon({
  displayName: "spark",
  viewBox: "0 0 24 24",
  path: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.6547 16.7993C21.3111 18.0034 20.7384 19.0938 20.0054 20.048C18.9058 21.4111 15.1261 21.4111 12.8583 20.8204C10.4072 20.1616 8.6433 18.6395 8.50586 18.5259C9.46797 19.2756 10.6821 19.7072 12.0107 19.7072C15.1948 19.7072 17.7605 17.1174 17.7605 13.9368C17.7605 12.9826 17.5314 12.0966 17.119 11.3015C17.0961 11.2561 17.1419 11.2106 17.1649 11.2333C18.9745 11.5287 22.571 13.2098 21.6547 16.7993Z"
        fill="#2751D0"
      />
      <path
        d="M21.9994 12.7773C21.9994 12.8454 21.9306 12.8682 21.8848 12.8C21.0372 11.0053 19.5483 10.46 17.7615 10.0511C16.4099 9.75577 15.5166 9.3014 15.1271 9.09694C15.0355 9.0515 14.9668 8.98335 14.8751 8.93791C12.0575 7.23404 12.0117 4.30339 12.0117 4.30339V0.0550813C12.0117 0.00964486 12.0804 -0.0130733 12.1034 0.0096449L18.7694 6.50706L19.2734 6.98414C20.7394 8.52898 21.7474 10.5509 21.9994 12.7773Z"
        fill="#D82F20"
      />
      <path
        d="M20.0052 20.0462C18.1726 22.4316 15.2863 23.9992 12.0334 23.9992C6.48985 23.9992 2 19.501 2 13.9577C2 11.2543 3.05374 8.8234 4.7947 7.00594L5.29866 6.50614L9.65107 2.25783C9.69688 2.2124 9.7656 2.25783 9.7427 2.30327C9.67397 2.59861 9.55944 3.28015 9.62816 4.18888C9.71979 5.25664 10.0634 6.68789 11.0713 8.27817C11.6898 9.27777 12.5832 10.3228 13.8202 11.4133C13.9577 11.5496 14.118 11.6632 14.2784 11.7995C14.8281 12.3674 15.1488 13.1171 15.1488 13.9577C15.1488 15.6616 13.7515 17.0474 12.0563 17.0474C11.3233 17.0474 10.659 16.7975 10.1321 16.3659C10.0863 16.3204 10.1321 16.2523 10.1779 16.275C10.2925 16.2977 10.407 16.3204 10.5215 16.3204C11.1171 16.3204 11.6211 15.8433 11.6211 15.2299C11.6211 14.8665 11.4378 14.5257 11.163 14.3439C10.4299 13.7533 9.81142 13.1853 9.28455 12.6173C8.55151 11.8222 8.00174 11.0498 7.61231 10.3001C6.81055 11.2997 6.30659 12.5492 6.30659 13.935C6.30659 15.7979 7.17707 17.4563 8.55152 18.5014C8.68896 18.615 10.4528 20.1371 12.9039 20.7959C15.1259 21.432 18.9057 21.4093 20.0052 20.0462Z"
        fill="#69C5F4"
      />
    </svg>
  ),
});

const iconMap: { [key: string]: React.FC } = {
  open_weather: OpenWeather,
  google_translate: GoogleTranslate,
  duckduckgo: DuckduckgoSearch,
  Wikipedia: Wikipedia,
  tavily_search: tavilysearch,
  math_calculator: calculator,
  image_generation: SiliconFlowIcon,
  spark_image_generation: spark,
  image_understanding: ZhipuAIIcon,
  qingyan_assistant: ZhipuAIIcon,
  web_search_pro: ZhipuAIIcon,
  serper_search: Serper,
  workflow: FaProjectDiagram,
};

const DefaultIcon = Wikipedia;

const ToolsIcon = ({
  tools_name,
  ...props
}: {
  tools_name: string;
} & IconProps) => {
  const normalizedKey = (tools_name || "").toLowerCase();
  const IconComponent = iconMap[normalizedKey] || DefaultIcon;

  return <Icon as={IconComponent} {...props} />;
};

export default ToolsIcon;
