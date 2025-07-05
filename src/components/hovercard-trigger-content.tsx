import React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';


type HoverCardTriggerContentProps = {
    btnLabel: string;
    url: string;
};

export const HoverCardTriggerContentComponent = ({ btnLabel, url }: HoverCardTriggerContentProps) => {

    const container = document.createElement('div');

    if (url == "") {
        ReactDOMClient.createRoot(container!).render(<a className="underline text-gray-500" href={url}>{btnLabel}</a>);
    }
    ReactDOMClient.createRoot(container!).render(<a className="underline text-gray-500" href={url}>{btnLabel}</a>);

    return (container);
};