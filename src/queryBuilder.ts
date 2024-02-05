/*
 * --------------------------------------------------------------------------------
 * This file is part of the LasticXYZ project.
 * 
 * Originally based on code from kodadot/uniquery (link: https://github.com/kodadot/uniquery).
 * Adapted and modified by LasticXYZ. Link to repository: https://github.com/LasticXYZ/squid-sdk
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation version 3.
 * --------------------------------------------------------------------------------
 */

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
