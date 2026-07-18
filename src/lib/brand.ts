export const BRAND = {
  name: "Malaysian Lagom",
  fullName: "Malaysian Lagom Hair & Nail Unisex Salon",
  tagline: "Luxury Unisex Hair & Nail Salon",
  phone: "+91 63796 01362",
  phoneTel: "+916379601362",
  whatsapp: "916379601362",
  hours: "10:00 AM – 9:00 PM",
  hoursShort: "10:00 – 21:00",
  daysOpen: "Open Daily",
  rating: "4.9",
  reviewCount: "369",
  address: {
    line1: "Plot No. W-99, 3rd Avenue",
    line2: "Anna Nagar West",
    line3: "Chennai, Tamil Nadu 600040",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Malaysian+Lagom+Hair+%26+Nail+Unisex+Salon+Anna+Nagar+Chennai",
  mapsEmbed:
    "https://www.google.com/maps?q=Malaysian+Lagom+Hair+%26+Nail+Unisex+Salon,+Anna+Nagar,+Chennai,+Tamil+Nadu+600040&output=embed",
  instagram: "https://instagram.com/malaysianlagom",
};

export const WHATSAPP_LINK = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
  "Hi Malaysian Lagom, I'd like to book an appointment.",
)}`;