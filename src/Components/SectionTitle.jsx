export default function SectionTitle({ text1, text2, text3 }) {
    return (
        <>
            <p className="text-center uppercase font-medium text-orange-600 mt-28 border border-orange-400 px-10 py-2 rounded-full bg-pink-200">{text1}</p>
            <h3 className="text-3xl font-semibold text-center mx-auto mt-2">{text2}</h3>
            <p className="text-sm text-slate-800 text-center mt-4 max-w-lg mx-auto">{text3}</p>
        </>
    );
}