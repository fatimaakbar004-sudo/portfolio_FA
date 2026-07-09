import { Mail, Phone, MapPin } from "lucide-react";

const CONTACT_ITEMS = [
  { icon: <Mail size={24} />, title: "Email", value: "fatimaakbar004@gmail.com" },
  { icon: <Phone size={24} />, title: "Phone", value: "+92 3068575506" },
  { icon: <MapPin size={24} />, title: "Location", value: "Karachi, Pakistan" },
];

function ContactInfo() {
  return (
    <div className="space-y-6">
      {CONTACT_ITEMS.map((item) => (
        <div
          key={item.title}
          className="flex items-center gap-5 rounded-2xl bg-white dark:bg-zinc-900 shadow-lg p-6"
        >
          <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[rgb(var(--primary))]/10 text-[rgb(var(--primary))]">
            {item.icon}
          </div>

          <div>
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-gray-500">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactInfo;