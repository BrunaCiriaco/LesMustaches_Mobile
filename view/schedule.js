import React, {useState} from 'react';
import {CalendarList, LocaleConfig} from 'react-native-calendars';
import { View } from 'react-native';


LocaleConfig.locales['fr'] = {
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
  ],
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Junho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Quar.', 'Qui.', 'Sex.', 'Sab.'],
};

LocaleConfig.defaultLocale = 'fr';


const calendario = () => {
  const [selected, setSelected] = useState('');

  return (
    <CalendarList
      style={{
        height: 500,
        width:350,
        marginTop:40,
      }}

      onDayPress={day => {
      
        setSelected(day.dateString);
      }}
      markingType={'period'}
      markedDates={{
        '2023-06-20': {textColor: '#000'},
        '2023-06-22': {startingDay: true, color: '#d4d4d4', textColor:'#000'},
        '2023-06-23': {selected: true, endingDay: true,  color: '#d4d4d4', textColor:'#000'},
        '2023-06-04': {disabled: true, endingDay: true, color: '#d4d4d4', textColor:'#000'},
        '2023-06-01': {textColor: '#000'},
        '2023-06-03': {startingDay: true, color: '#d4d4d4', textColor:'#000'},
        '2023-06-27': {startingDay: true, color: '#d4d4d4', textColor:'#000'},
        '2023-06-28': {selected: true, endingDay: false,  color: '#d4d4d4', textColor:'#000'},
        '2023-06-29': {selected: true, endingDay: true,color: '#d4d4d4', textColor:'#000'}
      }}

  
    />
  );
};

export default calendario;