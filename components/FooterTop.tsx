import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

interface Props {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const data: Props[] = [
  {
    title: 'Visit Us',
    subtitle: 'New Orlean, USA',
    icon: (
      <MapPin className="h-6 w-6 text-gray-600 group-hover:text-darkColor transition-colors" />
    ),
  },
  {
    title: 'Call Us',
    subtitle: '+12 958 890 800',
    icon: (
      <Phone className="h-6 w-6 text-gray-600 group-hover:text-darkColor transition-colors" />
    ),
  },
  {
    title: 'Working Hours',
    subtitle: 'Mon - Sat: 10AM - 7 PM',
    icon: (
      <Clock className="h-6 w-6 text-gray-600 group-hover:text-darkColor transition-colors" />
    ),
  },
  {
    title: 'Email Us',
    subtitle: 'wearhaus@gmail.com',
    icon: (
      <Mail className="h-6 w-6 text-gray-600 group-hover:text-darkColor transition-colors" />
    ),
  },
];

const FooterTop = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b">
      {data?.map((Item, index) => (
        <ContactItem
          key={index}
          title={Item.title}
          icon={Item.icon}
          subtitle={Item.subtitle}
        />
      ))}
    </div>
  );
};

const ContactItem = ({ icon, title, subtitle }: Props) => {
  return (
    <div className="flex items-center gap-3 group hover:bg-gray-50 p-4 transition-colors">
      {icon}
      <div className="">
        <h3 className="font-semibold text-sm text-gray-900 group-hover:text-darkColor transition-colors">
          {title}
        </h3>
        <p className=" text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default FooterTop;
