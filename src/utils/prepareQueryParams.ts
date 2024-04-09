import { SORT_ENUM } from 'types/sort.types';

export type ParamsValueType =
  | ({ order: SORT_ENUM; property: string } | string | number)[]
  | string
  | number
  | boolean;
const INITIAL_QUERY = '?';
export const prepareQueryParams = (params: Record<string, ParamsValueType>) => {
  console.log('params', params);
  let query = INITIAL_QUERY;

  Object.entries(params).forEach(([key, value]: [string, ParamsValueType]) => {
    const joiner = query === INITIAL_QUERY ? '' : '&';

    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      query += `${joiner}${key}=${value}`;
    }
    if (Array.isArray(value) && value.length) {
      if (key === 'sort') {
        query += `&${key}=${value
          .map((e) => {
            if (typeof e === 'object') {
              return `${e.property},${e.order}`;
            }
            return '';
          })
          .join(`${joiner}${key}=`)}`;
      } else {
        query += `${joiner}${key}=${value.join(`&${key}=`)}`;
      }
    }
  });
  console.log(query);
  return query;
};
