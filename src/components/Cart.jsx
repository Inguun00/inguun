import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">🛒 Таны сагс</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Сагс хоосон байна.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item, index) => (
            <li key={index} className="flex items-center justify-between p-4 border rounded-lg shadow-md">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 overflow-hidden rounded-lg">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">Үнэ: <span className="font-bold">{item.price}₮</span></p>
                  <p className="text-gray-600">Тоо ширхэг: <span className="font-bold">{item.quantity}</span></p>

                  {item.selectedColor && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-gray-600">Өнгө:</span>
                      <span className="w-6 h-6 rounded-full border border-gray-300" style={{ backgroundColor: item.selectedColor }} />
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Устгах
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 text-lg font-semibold">
        Нийт үнэ: <span className="text-green-600">{totalPrice.toFixed(2)}₮</span>
      </div>

      {/* Buy Now товчийг нэмэх */}
      {cartItems.length > 0 && (
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => alert("Захиалга хийх функцийг энд бичнэ")}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
