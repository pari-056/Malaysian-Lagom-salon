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
    line1: "1572, 13th Main Road, Opposite Ram IAS",
    line2: "Bharathi Colony, Bharathi Nagar, Anna Nagar",
    line3: "Chennai, Tamil Nadu 600040",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Malaysian+Lagom+Hair+%26+Nail+Unisex+Salon+Anna+Nagar+Chennai",
  mapsEmbed:
    "https://www.google.com/maps?q=Malaysian+Lagom+Hair+%26+Nail+Unisex+Salon,+Anna+Nagar,+Chennai,+Tamil+Nadu+600040&output=embed",
  instagram: "https://www.instagram.com/lagom_salons",
};

export const WHATSAPP_LINK = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
  "Hi Malaysian Lagom, I'd like to book an appointment.",
)}`;