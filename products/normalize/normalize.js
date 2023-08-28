const uuid = require("uuid");

const normalizeObject = (cardData) => {
  const card = {
    id: 21,
    title: cardData.title,
    price: cardData.price || 0,
    description: cardData.description,
    category: cardData.category,
    image: cardData.image || null,
    rating: {
      rate: cardData.rating ? cardData.rating.rate : 0,
      count: cardData.rating ? cardData.rating.count : 0,
    },
    quantity: cardData.quantity || 0,
  };

  return card;
};

exports.normalizeObject = normalizeObject;
