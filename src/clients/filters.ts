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

import {
  FilterBuilder,
  FilterMappingFn,
  FilterOrderDirection,
  FilterOrderType,
  FilterType,
} from '../types'

export function getFilters(filters: FilterBuilder[]) {
  const mappingFn = subsquidFilterMapping
  return generateFilters(filters, mappingFn)
}

function generateFilters(
  filters: FilterBuilder[],
  mappingFn: FilterMappingFn,
): string[] {
  return filters
    .flatMap(([type, directions]) =>
      getFilterOrders(directions).map((direction) => mappingFn(type, direction))
    )
}

function subsquidFilterMapping(
  filter: FilterType,
  direction: FilterOrderDirection,
): string {
  return appendFilterDirection(filter, direction)
}

function appendFilterDirection(
  filter: string,
  direction: FilterOrderDirection,
) {
  return filter + '_' + direction
}

function getFilterOrders(
  filterOrders: FilterOrderType,
): FilterOrderDirection[] {
  if (!filterOrders) {
    return ['ASC', 'DESC']
  }

  return filterOrders.filter(Boolean)
}
