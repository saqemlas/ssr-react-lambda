import React from 'react';
import { renderToString } from 'react-dom/server';
import App, { Props } from './app';
import { renderHtml } from './html';

export default async function render(input: Props): Promise<string> {
    const app = renderToString(
        <App 
            title={input.title} 
        />
    );
    return renderHtml(app);
};
