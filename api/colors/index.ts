import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const colors = [
  'darkred',
  'darkblue',
  'green',
  'orange',
  'hotpink',
  'purple',
  'darkslategray',
  'darksalmon',
  'dodgerblue',
  'lightskyblue',
  'coral',
  'darkgoldenrod',
];

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log('HTTP trigger function processed a request.', req);

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: colors,
  };
};

export default httpTrigger;
