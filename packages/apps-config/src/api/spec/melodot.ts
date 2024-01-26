// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

// structs need to be in order
/* eslint-disable sort-keys */

const definitions: OverrideBundleDefinition = {
  rpc: {
    das: {
      submitBlobTx: {
        description: 'Get Block Length',
        params: [
          {
            name: 'data',
            type: 'Vec<u8>'
          },
          {
            name: 'extrinsic',
            type: 'Vec<u8>'
          }
        ],
        type: 'BlockLength'
      }
    }
  },
  types: [
    {
      // on all versions
      minmax: [0, undefined],
      types: {
        Header: {
          parentHash: 'Hash',
          number: 'Compact<BlockNumber>',
          stateRoot: 'Hash',
          extrinsicsRoot: 'Hash',
          digest: 'Digest',
          extension: 'HeaderExtension'
        },
        HeaderExtension: {
          commitments_bytes: 'Vec<u8>'
        },
        KZGCommitment: 'Vec<u8>',
        KZGProof: 'Vec<u8>',
        Blob: 'Vec<u8>',
        BlsScalar: 'Vec<u8>',
        BlobTxSatus: {
          tx_hash: 'Hash',
          err: 'Option<Vec<u8>>'
        }
      }
    }
  ]
};

export default definitions;
