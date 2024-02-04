import { query } from 'gql-query-builder'
import { FieldList, GraphQuery, KeyValue } from './types'

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

function advancedBuild(
  operation: string,
  fields: FieldList,
  variables?: KeyValue,
): GraphQuery {
  const formatFields = (fields: FieldList): string => {
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
  
  const fieldsStr = formatFields(fields);
  const queryStr = `query { ${operation} { ${fieldsStr} } }`;
  
  return {
    query: queryStr,
    variables: variables || {}
  };
}


export {build, advancedBuild}
