import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Snackbar } from '@material-ui/core';
import { Form } from '@unform/web';
import close from '../../../assets/icons/close.png';

import Select from '../../Dropdown/index';

import {
  ContainerModal,
  Title,
  Content,
  ContentSchedule,
  ContentScheduling,
  GroupSelect,
  GroupButton,
  Img,
} from './styles';

import Button from '../../Buttons/index';

import ScheduleService from '../../../services/schedule';
import ClassService from '../../../services/class';
import SchoolSubjectsService from '../../../services/school_subjects';

const hourlyNight = [
  { id: 1, hours: '19:00:00' },
  { id: 2, hours: '21:00:00' },
];

export default function ModalScheduling({
  isModalOpen,
  schedulings,
  selectDate,
  selected,
  profile,
}) {
  const formRef = useRef(null);
  const [schedules, setSchedules] = useState([]);
  const [schoolClasses, setSchoolClasses] = useState([]);
  const [schoolSubjects, setSchoolSubjects] = useState([]);
  const [open, setOpen] = useState(isModalOpen);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(async () => {
    await setSchedules(schedulings.filter((x) => x.date === selectDate));
    try {
      const responseClass = await await ClassService.getClass(
        localStorage.getItem('teacher')
      );
      if (responseClass.status === 200 && !responseClass.data.erro) {
        setSchoolClasses(responseClass.data.resp);
      }

      const responseSchoolSubjects = await await SchoolSubjectsService.getSchoolSubjectsByTeacher(
        localStorage.getItem('teacher')
      );
      if (
        responseSchoolSubjects.status === 200 &&
        !responseSchoolSubjects.data.erro
      ) {
        setSchoolSubjects(responseSchoolSubjects.data.resp);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleSubmit = useCallback(async (data) => {
    try {
      formRef.current?.setErrors({});

      const { schoolClass, schoolSubject, hourly } = data;

      if (!schoolClass || !schoolSubject || !hourly) {
        setMessage('Por favor, preenchas os campos!');
        setSnackbarOpen(true);
        return;
      }

      const response = await ScheduleService.createSchedule({
        school_class: data.schoolClass,
        subject: data.schoolSubject,
        start_time: data.hourly,
        date: selectDate,
        teacher_id: localStorage.getItem('teacher'),
        laboratory_id: selected.laboratory_id,
      });

      if (response.status === 200 && !response.data.erro) {
        setMessage('Laboratório agendado com sucesso!');
        setSnackbarOpen(true);
        setOpen(false);
      }
    } catch (err) {
      console.log(err);
    }
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={snackbarOpen}
        autoHideDuration={3000}
        message={message}
        color="#04C35C"
        onClose={handleClose}
      />
      <ContainerModal open={open}>
        <Title>
          <div>Agendamentos</div>
          <Img
            onClick={() => {
              setOpen(false);
            }}
            src={close}
          />
        </Title>
        <Content>
          {schedules &&
            schedules.map((schedule, index) => (
              <ContentSchedule key={index} profile={profile}>
                <p>
                  <b>Horário:</b> {schedule.start_time}
                </p>
                <br />
                <p>
                  <b>Disciplina:</b> {schedule.subject}
                </p>
                <br />
                <p>
                  <b>Turma:</b> {schedule.school_class}
                </p>
              </ContentSchedule>
            ))}
          {!profile && (
            <ContentScheduling>
              <Title>
                <div>Agendar</div>
              </Title>
              <Form ref={formRef} onSubmit={handleSubmit}>
                <GroupSelect>
                  <div style={{ margin: '0 5px 0 5px', width: '30%' }}>
                    <Select
                      name="hourly"
                      label="Horário"
                      color="#f1f1f1"
                      list={hourlyNight.map((timetable) => ({
                        id: timetable.id,
                        value: timetable.hours,
                        label: timetable.hours,
                        disabled: schedules.some(
                          (x) => x.start_time === timetable.hours
                        ),
                      }))}
                      onSelectElement={() => {
                        const formData = formRef.current?.getData();

                        formRef.current?.setData({
                          ...formData,
                          item: '',
                        });
                      }}
                    />
                  </div>
                  <div style={{ margin: '0 5px 0 5px', width: '30%' }}>
                    <Select
                      name="schoolClass"
                      label="Turma"
                      color="#f1f1f1"
                      list={schoolClasses.map((schoolClass) => ({
                        id: schoolClass.school_class_id,
                        value: schoolClass.name,
                        label: schoolClass.name,
                      }))}
                      onSelectElement={() => {
                        const formData = formRef.current?.getData();

                        formRef.current?.setData({
                          ...formData,
                          item: '',
                        });
                      }}
                    />
                  </div>
                  <div style={{ margin: '0 5px 0 5px', width: '30%' }}>
                    <Select
                      name="schoolSubject"
                      label="Disciplina"
                      color="#f1f1f1"
                      list={schoolSubjects.map((schoolSubject) => ({
                        id: schoolSubject.school_subject_id,
                        value: schoolSubject.name,
                        label: schoolSubject.name,
                      }))}
                      onSelectElement={() => {
                        const formData = formRef.current?.getData();

                        formRef.current?.setData({
                          ...formData,
                          item: '',
                        });
                      }}
                    />
                  </div>
                </GroupSelect>
                <GroupButton>
                  <div style={{ width: '50%' }}>
                    <Button type="submit" color="#04C35C" bold>
                      Confirmar Agendamento
                    </Button>
                  </div>
                </GroupButton>
              </Form>
            </ContentScheduling>
          )}
        </Content>
      </ContainerModal>
    </>
  );
}
