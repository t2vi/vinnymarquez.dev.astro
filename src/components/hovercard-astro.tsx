import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@components/ui/avatar";
import { HoverCardTriggerContentComponent } from "@components/hovercard-trigger-content";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@components/ui/hover-card"
import { Button } from "@components/ui/button"

type AvatarComponentProps = {
    btnLabel: string;
    icon: string;
    url: string;
    header: string
    description: string;
    dateDescription: string;
};

// function GenerateLink(props: string, btnLabel: string, url: string) {
//   if (url === "") {
//     return (<a className="underline text-gray-500 md:text-sm lg:text-md" href={url}>{btnLabel}</a>);
//   }
//   return (<span className="underline text-gray-500 md:text-sm lg:text-md">{btnLabel}</span>);
// }

export const HoverCardComponent = ({ btnLabel, url, icon, header, description, dateDescription }: AvatarComponentProps) => {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <a className="underline text-gray-500 md:text-xs lg:text-lg" target='_blank' href={url}>{btnLabel}</a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between gap-4">
                    <Avatar>
                        <AvatarImage src={icon} />
                        <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">{header}</h4>
                        <p className="text-sm">
                            {description}
                        </p>
                        <div className="text-muted-foreground text-xs">
                            {dateDescription}
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
};