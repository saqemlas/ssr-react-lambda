import React from 'react';
import { bodyStyle, rootStyle } from './styles';

export type Props = {
    title: string
};

function App(props: Props): React.ReactElement<Props> {
    return (
        <body style={bodyStyle}>
            <div id='root' style={rootStyle}>
                <h1>
                    {props.title}
                </h1>
            </div>
        </body>
    );
}

export default App;
