import { Facebook, Github, Linkedin } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  {
    title: 'Github',
    href: 'https://github.com/nhwnahid007',
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/nhwnahid/',
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/nhwnahid/',
    icon: <Linkedin className="w-5 h-5" />,
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn('flex items-center gap-3.5 text-zinc-400', className)}>
        {socialLink.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'p-2 border rounded-full hover:text-white hover:border-white hoverEffect',
                  iconClassName,
                )}
              >
                {item.icon}
              </a>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                'bg-white text-darkColor font-semibold',
                tooltipClassName,
              )}
            >
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
