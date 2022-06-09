import React from 'react'
import {PickerView} from './styles'
import Picker from 'react-native-picker-select'
export default ({setValue})=>{
  return(
    <PickerView>
      <Picker 
      style={{}}
      placeholder={{
        label:'Selecione',
        color:'#222',
        value:false
      }}
      onValueChange={(t)=>setValue(t)}
      items={[
        {label:'Receita' ,value:'receita' ,color:'#222'},
        {label:'Despesa' ,value:'despesa' ,color:'#222'},
      ]}
      />
    </PickerView>
  )
}