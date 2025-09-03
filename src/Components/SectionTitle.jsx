export default function SectionTitle({ text1, text2, text3 }) {
    return (
        <div className=" flex flex-col gap-2">
            <div className="flex items-center justify-center">
                <h1 className="text-center px-10 py-2 rounded-full bg-pink-300 text-orange-600 font-bold shadow-lg">{text1}</h1>
            </div>

            <h3 className="text-3xl font-semibold text-center mx-auto mt-2">{text2}</h3>
            <p className="text-sm text-slate-800 dark:text-pink-100 text-center mt-4 max-w-lg mx-auto">{text3}</p>
        </div>
    );
}