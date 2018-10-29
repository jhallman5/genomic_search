import { combineReducers } from 'redux'
import gene_names from './gene_names'
import gene_data from './gene_data'

export default combineReducers({
  gene_names,
  gene_data
})
