export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-2xl transition-all">
      <div className="text-center">
        <img
          src="/pizza.png"
          className="h-auto max-h-24 block mx-auto"
          alt="Pizza"
        />
      </div>

      <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
        Add to cart $12
      </button>
    </div>
  );
}
