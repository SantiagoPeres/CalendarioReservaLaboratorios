import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';

import Select from '../../components/Dropdown';
import BlocksService from '../../services/blocks';
import LabsService from '../../services/labs';
import ScheduleService from '../../services/schedule';

import {
  ContainerPage,
  ContainerSelect,
  ContainerCalendar,
  RowGrid,
} from './styles';
import './styles.css';

import Calendar from '../../components/Calendar/index';

export default function Home() {
  const formRef = useRef(null);
  const [listBlocks, setListBlocks] = useState([]);
  const [listLabs, setListLabs] = useState([]);
  const [selected, setSelected] = useState();
  const [schedule, setSchedule] = useState([]);
  const history = useHistory();

  const user = localStorage.getItem('username');
  if (!user) {
    history.push('/');
  }

  useEffect(async () => {
    try {
      const response = await BlocksService.list();
      if (response.status === 200 && !response.data.erro) {
        setListBlocks(response.data.resp);
      } else {
        console.log('erro');
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  const fetchLabs = useCallback(async (block) => {
    try {
      const response = await LabsService.list(block.id);
      if (response.status === 200 && !response.data.erro) {
        setListLabs(response.data.resp);
      } else {
        console.log('erro');
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  const fetchSchedules = useCallback(async (lab) => {
    try {
      const response = await ScheduleService.getSchedule(lab.laboratory_id);
      if (response.status === 200 && !response.data.erro) {
        setSchedule(response.data.resp);
      } else {
        console.log('erro');
      }
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <ContainerPage>
      <Form ref={formRef}>
        <ContainerSelect>
          <div style={{ width: '85%' }}>
            <Select
              label="Blocos"
              name="Selecionar Bloco..."
              list={listBlocks.map((block) => ({
                id: block.block_id,
                value: block.identification,
                label: block.identification,
              }))}
              onSelectElement={(block) => {
                const formData = formRef.current?.getData();

                formRef.current?.setData({
                  ...formData,
                  item: '',
                });

                fetchLabs(block);
              }}
            />
          </div>
          <div
            style={{
              width: '85%',
              marginTop: 20,
              backgroundColor: '#fafafa',
              borderRadius: 5,
            }}
          >
            {listLabs.map((item, key) => (
              <RowGrid
                key={key}
                active={
                  selected
                    ? item.identification === selected.identification
                    : false
                }
                onClick={() => {
                  setSelected(item);
                  fetchSchedules(item);
                }}
              >
                <b>{item.identification}</b>
              </RowGrid>
            ))}
          </div>
        </ContainerSelect>
      </Form>
      <ContainerCalendar>
        <Calendar scheduled={schedule} selected={selected} profile={false} />
      </ContainerCalendar>
    </ContainerPage>
  );
}
