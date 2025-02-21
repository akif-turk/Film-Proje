const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-h-[400px] gap-5 mb-10">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold">Herhangi bir</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, cum,
          alias inventore sapiente temporibus consequatur, labore odit provident
          dignissimos qui in quas autem natus illum fugiat beatae error quam
          animi. Atque vel voluptatem aspernatur aliquid veniam asperiores
        </p>
        <p className="flex gap-2">
          <span className="text-red-800 hover:text-[rgba(156,117,50)] font-bold">
            IMDB :
          </span>
          <span className="text-[rgba(156,117,50)] hover:text-red-800">
            3333
          </span>
        </p>
        <div className="flex gap-5">
          <button className="bg-[rgba(156,117,50)] p-2 rounded hover:bg-red-800">
            Filmi izle
          </button>
          <button className="bg-red-800 p-2 rounded hover:bg-[rgba(156,117,50)]">
            detay
          </button>
        </div>
      </div>

      <div>
        <img
          className="max-h-[300px] hero-img my-4 object-contain"
          src="/src/images/film2.jpg"
          alt="film"
        />
      </div>
    </div>
  );
};

export default Hero;
