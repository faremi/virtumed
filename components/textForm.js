export function CustomTextForm({ handler, type, placeholder, label }) {
  return (
    <div className="my-2">
      <span className="block mb-1 font-medium">{label}</span>
      <input
        onChange={handler}
        className="h-12 w-full mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 border-b-2"
        type={type}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
