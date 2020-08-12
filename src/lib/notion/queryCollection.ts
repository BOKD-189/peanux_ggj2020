import rpc from './rpc'

export default function queryCollection({
  collectionId,
  collectionViewId,
  loader = {},
  query = {},
}: any) {
  const queryCollectionBody = {
    loader: {
      type: 'reducer',
      reducers: {
        collection_group_results: {
      