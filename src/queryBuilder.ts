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
import { FieldArr, FieldList as FieldListDif } from './clients/defaults';

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

// const formatFieldsToArray = (fields: FieldListDif): any[] => {
//   const resultArray = [];

//   for (const [key, value] of Object.entries(fields)) {
//     if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
//       // If the value is a nested object, recurse
//       const nestedObject = {};
//       nestedObject[key] = formatFieldsToArray(value);
//       resultArray.push(nestedObject);
//     } else {
//       // For primitive values, push the key directly
//       resultArray.push(key);
//     }
//   }

//   return resultArray;
// }


// const formatFieldsToArray = (fields: FieldListDif): any[] => {
//   const resultArray = [];

//   for (const [key, value] of Object.entries(fields)) {
//     if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
//       // Check if the nested object should be directly converted to an array or kept as an object with an array value
//       const isDeepNested = Object.values(value).some(val => typeof val === 'object' && val !== null);
//       if (isDeepNested) {
//         // If the nested object contains further nested objects, recurse
//         const nestedArray = formatFieldsToArray(value);
//         const nestedObject = {};
//         nestedObject[key] = nestedArray;
//         resultArray.push(nestedObject);
//       } else {
//         // If the nested object does not contain further nested objects, convert it to an array including its keys
//         const shallowNestedArray = Object.entries(value).map(([nestedKey, nestedValue]) => {
//           return typeof nestedValue === 'object' ? {[nestedKey]: formatFieldsToArray(nestedValue)} : nestedValue;
//         });
//         const nestedObject = {};
//         nestedObject[key] = shallowNestedArray;
//         resultArray.push(nestedObject);
//       }
//     } else {
//       // For primitive values, push the key directly
//       resultArray.push(key);
//     }
//   }

//   return resultArray;
// }



function advancedBuild2(
  operation: string,
  fields: FieldArr,
  variables?: KeyValue,
): GraphQuery {
  return query({
    operation: operation,
    variables: variables,
    fields: fields
  })
}


export {formatFields, build, advancedBuild, advancedBuild2}
