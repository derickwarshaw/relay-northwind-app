/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type ProductConnection_viewer = {|
  +productConnection: ?{|
    +count: number;
    +pageInfo: {|
      +hasNextPage: boolean;
      +endCursor: ?string;
    |};
    +edges: $ReadOnlyArray<{|
      +cursor: string;
      +node: {|
        +_id: any;
      |};
    |}>;
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "count",
      "type": "Int"
    },
    {
      "kind": "RootArgument",
      "name": "cursor",
      "type": "String"
    },
    {
      "kind": "RootArgument",
      "name": "filter",
      "type": "FilterFindManyProductInput"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProductConnection_viewer",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "after",
          "variableName": "cursor",
          "type": "String"
        },
        {
          "kind": "Variable",
          "name": "filter",
          "variableName": "filter",
          "type": "FilterFindManyProductInput"
        },
        {
          "kind": "Variable",
          "name": "first",
          "variableName": "count",
          "type": "Int"
        }
      ],
      "concreteType": "ProductConnection",
      "name": "productConnection",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "count",
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "hasNextPage",
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "endCursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "ProductEdge",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "cursor",
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "Product",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "_id",
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "ProductConnectionItem_product",
                  "args": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Viewer"
};

module.exports = fragment;
