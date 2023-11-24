import { app, InvocationContext } from "@azure/functions";
import * as https from "https";
import * as df from 'durable-functions';
import { ActivityHandler, OrchestrationContext, OrchestrationHandler } from 'durable-functions';

const holaTesssts => {}

export async function serviceBusQueueTrigger(message: unknown, context: InvocationContext): Promise<void> {
    context.log('Service bus queue function processed message:', message);
    const client = df.getClient(context);
    const instanceId: string = await client.startNew("2-200-0d91af95cfe617041886", message);
    context.log(`Started orchestration with ID = '${instanceId}'.`);
}
app.serviceBusQueue('2-200-0d91af95cfe617041886', {
    connection: 'azureQueueConnection',
    queueName: '2-200-0d91af95cfe617041886',
    handler: serviceBusQueueTrigger,
    extraInputs: [df.input.durableClient()],
});