import { Context } from 'aws-lambda/handler';
import { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from 'aws-lambda/trigger/api-gateway-proxy';
import { Props } from '../frontend/app';

export const handler = async (event: APIGatewayProxyEventV2, _context?: Context): Promise<APIGatewayProxyStructuredResultV2> => {

    const input: Props = { title: 'Hello World' };
    const body: string = await (await import('../frontend/render')).default(input);

    return {
        statusCode: 200,
        headers: { 'Content-Type': 'text/html' },
        body
    };
};
