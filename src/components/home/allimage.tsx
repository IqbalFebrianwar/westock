import dynamic from "next/dynamic"

const UseImageUI = dynamic(()=> import("@/app/(public)/hooks/useImage"))

const AllImageUI =()=>{
    return(
        <div className="w-full grid justify-center mt-20 mb-96">
            <div className="xl:px-80 lg:px-48 max-md:px-5 w-full flex justify-start">
                <h1 className="text-white text-2xl font-body font-semibold">Untuk Kamu</h1>
            </div>
            <div className="grid xl:px-20 lg:px-16 max-md:px-5 justify-center text-center mt-10 w-full gap-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                <UseImageUI />
            </div>
        </div>
    )
}
export default AllImageUI