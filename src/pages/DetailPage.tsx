const DetailPage = () => {
  return (
    <div>
      <div className="flex gap-5 bg-slate-200 mt-10">
        <img className="xl:w-96 lg:w-56 " src="/src/images/film.jpg" />

        <h1 className="text-2xl font-semibold text-[rgba(156,117,50)]  ">
          Avatar Filmi
        </h1>

        <div className="text-wrap  ">
          <span className="text-2xl font-semibold text-[rgba(156,117,50)]">
            Film Hakkında
          </span>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores
          ex hic quis nostrum eligendi eaque fuga repudiandae, modi quas ipsa
          dolorum id eveniet est natus, provident error quo recusandae! At magni
        </div>
      </div>
      <div className="mt-10">
        <div className=" bg-slate-200 h-10 font-semibold py-2 px-2  ">
          Yönetmen
        </div>
        <div className=" h-10 font-semibold py-2 px-2 text-slate-200">
          Oyuncular
        </div>
        <div className=" bg-slate-200 h-10 font-semibold py-2 px-2">Yapım</div>
        <div className=" h-10 font-semibold py-2 px-2 text-slate-200">Tür</div>
        <div className=" bg-slate-200 h-10 font-semibold py-2 px-2">
          Kategori
        </div>
      </div>
      <div className="mt-10 h-10 bg-[rgba(156,117,50)] font-semibold hover:bg-red-800 text-2xl text-center">
        <button className="p-1 ">Filmi İzle</button>
      </div>
    </div>
  );
};

export default DetailPage;
