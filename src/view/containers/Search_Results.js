import React from 'react'
import Button from '@material-ui/core/Button';

import Search_Bar from './Search_Bar'
import Varient_Table from './Varient_Table'

export default class Search_Results extends React.Component {
  render() {
    return (
      <div>
        Search_Results
        <Search_Bar />
        <Varient_Table />
      </div>
    )
  }
}
