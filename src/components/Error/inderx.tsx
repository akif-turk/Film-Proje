const Error = () => {
  return (
    <div>
      <div className=" bg-slate-200 mt-10 h-[75vh]">
        <div>
          <h1 className="text-center font-semibold text-[200px] text-[rgba(156,117,50)] ">
            404{' '}
          </h1>
          <h2 className=" text-center font-semibold text-[rgba(156,117,50)] ">
            Not Found
          </h2>
          <p className="text-center font-semibold text-[rgba(156,117,50)]">
            Aradığınız sayfa bulunamadı. Lütfen tekrar deneyin
          </p>
        </div>
      </div>

      <div className="h-20  mt-10 text-center p-6 bg-[rgba(198,28,32)] hover:bg-slate-200">
        <button className="text-[rgba(156,117,50)] font-semibold  text-2xl">
          Tekrar Dene
        </button>
      </div>
    </div>
  );
};

export default Error;
