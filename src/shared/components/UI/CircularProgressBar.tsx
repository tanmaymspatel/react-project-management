function CircularProgressBar({ percent }: any) {

  return (
    <div className="card d-flex align-items-center justify-content-center">
      <div className="box">
        <div className="position-relative rounded-circle">
          <svg className="position-relative circle-svg">
            <circle className="progress-circle" cx="70" cy="60" r="45"></circle>
            <circle className='progress-circle' style={{ strokeDashoffset: `calc(283 - (2.83 * ${percent}))` }} cx="70" cy="60" r="45" ></circle>
          </svg>
          <div className="position-absolute mt-0 top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center rounded-circle">
            <p className="fw-bolder">{percent}<span>%</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
