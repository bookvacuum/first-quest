// import {
//     Mina,
//     isReady,
//     PublicKey,
//     PrivateKey,
//     Field,
//     fetchAccount,
//   } from 'snarkyjs'
  
//   type Transaction = Awaited<ReturnType<typeof Mina.transaction>>;
  
//   // ---------------------------------------------------------------------------------------
  
//   import type { OracleExample } from '../../contracts/src/ValidEmailOracle';
  
//   const state = {
//     OracleExample: null as null | typeof OracleExample,
//     zkapp: null as null | OracleExample,
//     transaction: null as null | Transaction,
//   }
  
//   // ---------------------------------------------------------------------------------------
  
//   const functions = {
//     loadSnarkyJS: async (args: {}) => {
//       await isReady;
//     },
//     setActiveInstanceToBerkeley: async (args: {}) => {
//       const Berkeley = Mina.BerkeleyQANet(
//         "https://proxy.berkeley.minaexplorer.com/graphql"
//       );
//       Mina.setActiveInstance(Berkeley);
//     },
//     loadContract: async (args: {}) => {
//       const { OracleExample } = await import('../../contracts/src/ValidEmailOracle');
//       state.OracleExample = OracleExample;
//     },
//     compileContract: async (args: {}) => {
//       await state.OracleExample!.compile();
//     },
//   };
  
//   // ---------------------------------------------------------------------------------------
  
//   export type WorkerFunctions = keyof typeof functions;
  
//   export type ZkappWorkerRequest = {
//     id: number,
//     fn: WorkerFunctions,
//     args: any
//   }
  
//   export type ZkappWorkerReponse = {
//     id: number,
//     data: any
//   }
//   if (process) {
//     addEventListener('message', async (event: MessageEvent<ZkappWorkerRequest>) => {
//       const returnData = await functions[event.data.fn](event.data.args);
  
//       const message: ZkappWorkerReponse = {
//         id: event.data.id,
//         data: returnData,
//       }
//       postMessage(message)
//     });
//   }


export {}