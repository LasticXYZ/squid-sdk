import { query } from 'gql-query-builder'
import { FieldList, GraphQuery, KeyValue } from './types'
import { FieldList as FieldListDif } from './clients/defaults';

function build(
  operation: string,
  fields: FieldList,
  variables?: KeyValue,
): GraphQuery {
  return query({
    operation,
    variables,
    fields,
  })
}

const formatFields = (fields: FieldListDif): string => {
  if (typeof fields === 'string') {
    return fields;
  } else {
    return Object.entries(fields).map(([key, value]) => {
      if (typeof value === 'string') {
        return value;
      } else {
        // Recursively format nested fields
        return `${key} { ${formatFields(value)} }`;
      }
    }).join(' ');
  }
};

function advancedBuild(
  operation: string,
  fields: FieldListDif,
  variables?: KeyValue,
): GraphQuery {
  const fieldsStr = formatFields(fields);
  const queryStr = `query { ${operation} { ${fieldsStr} } }`;
  
  return {
    query: queryStr,
    variables: variables || {}
  };
}


export {formatFields, build, advancedBuild}
