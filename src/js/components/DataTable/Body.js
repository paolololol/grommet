import React from 'react';

import {InfiniteScroll} from '../InfiniteScroll';
import {TableRow} from '../TableRow';
import {TableCell} from '../TableCell';

import {Cell} from './Cell';
import {StyledDataTableBody, StyledDataTableRow} from './StyledDataTable';

export const Body = ({
                       columns,
                       data,
                       onMore,
                       primaryProperty,
                       size,
                       theme,
                       rowClickHandler,
                       ...rest
                     }) => (
  <StyledDataTableBody size={size} {...rest}>
    <InfiniteScroll
      items={data}
      onMore={onMore}
      scrollableAncestor="window"
      renderMarker={marker => (
        <TableRow>
          <TableCell>{marker}</TableCell>
        </TableRow>
      )}
    >
      {datum => (
        <StyledDataTableRow key={datum[primaryProperty]} size={size} onClick={() => rowClickHandler(datum)}>
          {columns.map(column => (
            <Cell
              key={column.property}
              context="body"
              column={column}
              datum={datum}
              primaryProperty={primaryProperty}
              scope={
                column.primary || column.property === primaryProperty
                  ? 'row'
                  : undefined
              }
            />
          ))}
        </StyledDataTableRow>
      )}
    </InfiniteScroll>
  </StyledDataTableBody>
);
