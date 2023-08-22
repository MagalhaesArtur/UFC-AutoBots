import "./preloader.css";

const Preloader = () => {
  return (
    <div className="loader">
      <div className="svg-wrapper">
        {/* copy svg image and past it here */}
        <svg
          className="text-black"
          height="80"
          viewBox="0 0 196 313"
          fill=""
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Loader</title>
          <defs>
            <linearGradient id="ttb" y2="1">
              {/* if you are thinking how it is animating 
                    we have added animation to svg here 
                */}

              <stop offset="100%" stopOpacity="1" stopColor="#333">
                <animate
                  attributeName="offset"
                  values="0;1;1;0"
                  repeatCount="indefinite"
                  repeatDur="05:00"
                  dur="4s"
                  begin="0s"
                />
              </stop>
              <stop offset="100%" stopOpacity="1" stopColor="#E0E0E0">
                <animate
                  attributeName="offset"
                  values="0;1;1;0"
                  repeatCount="indefinite"
                  repeatDur="05:00"
                  dur="2s"
                  begin="0s"
                />
              </stop>

              {/* end */}
            </linearGradient>
          </defs>
          <path
            fill="url(#ttb)"
            d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-28,16v24H120V152ZM80,164a12,12,0,0,1,12-12h12v24H92A12,12,0,0,1,80,164Zm84,12H152V152h12a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z"
          />
        </svg>
        <div className="loading-text">Loading...</div>
      </div>
    </div>
  );
};

export default Preloader;
