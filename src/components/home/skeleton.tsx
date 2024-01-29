const SkeletonUI = () => {
  return (
    <div className="w-full">
      <div className="grid xl:px-20 lg:px-16 max-md:px-5 justify-center text-center mt-10 w-full gap-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {Array.from({ length: 20 }, () => (
          <div className="shadow p-5 w-72 bg-slate-900 rounded-xl">
            <div className="skeleton rounded-xl h-52 w-full"></div>
            <div className="flex w-full gap-x-3 items-center">
              <>
                <div className="skeleton w-12 h-12 mt-4 rounded-full"></div>
              </>
              <div className="grid gap-2 items-center">
                <h1 className="skeleton h-4 w-24"></h1>
                <h1 className="skeleton h-4 w-24"></h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SkeletonUI;
