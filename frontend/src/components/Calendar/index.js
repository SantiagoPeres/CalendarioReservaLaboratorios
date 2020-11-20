import * as React from 'react';
import { useState, useEffect } from 'react';

import ModalScheduling from '../Modal/ModalScheduling/index';

import { Frame, Body, Button, Day, Header } from './styles';

export default function Calendar({ scheduled, selected, profile = false }) {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB', 'DOM'];
  const MONTHS = [
    'JAN',
    'FEV',
    'MAR',
    'ABR',
    'MAI',
    'JUN',
    'JUL',
    'AGO',
    'SET',
    'OUT',
    'NOV',
    'DEZ',
  ];

  function getStartDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectDate, setSelectDate] = useState('');

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  function isLeapYear(leapYear) {
    return (leapYear % 4 === 0 && leapYear % 100 !== 0) || leapYear % 400 === 0;
  }

  const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;

  return (
    <Frame>
      {isModalOpen && (
        <ModalScheduling
          isModalOpen={isModalOpen}
          schedulings={scheduled}
          selectDate={selectDate}
          selected={selected}
          profile={profile}
        />
      )}

      <Header>
        <Button onClick={() => setDate(new Date(year, month - 1, day))}>
          Próx.
        </Button>
        <div>
          {MONTHS[month]} {year}
        </div>
        <Button onClick={() => setDate(new Date(year, month + 1, day))}>
          Ant.
        </Button>
      </Header>
      <Body>
        {DAYS_OF_THE_WEEK.map((d) => (
          <Day key={d}>
            <strong>{d}</strong>
          </Day>
        ))}
        {Array(days[month] + (startDay - 1))
          .fill(null)
          .map((_, index) => {
            const d = index - (startDay - 2);
            return (
              <Day
                key={index}
                isToday={d === today.getDate()}
                isSelected={d === day}
                onClick={() => {
                  if (
                    !scheduled.find(
                      (x) => x.date === `${d}/${month + 1}/${year}`
                    ) &&
                    profile
                  ) {
                    return;
                  }
                  setDate(new Date(year, month, d));
                  if (
                    scheduled.filter(
                      (x) => x.date === `${d}/${month + 1}/${year}`
                    ).length !== 2 ||
                    profile
                  ) {
                    setIsModalOpen(!isModalOpen);
                    setSelectDate(`${d}/${month + 1}/${year}`);
                  }
                }}
                scheduledFull={
                  scheduled.filter(
                    (x) => x.date === `${d}/${month + 1}/${year}`
                  ).length === 2
                }
                scheduledPartial={scheduled.some(
                  (x) => x.date === `${d}/${month + 1}/${year}`
                )}
                scheduledProfile={
                  scheduled.some(
                    (x) => x.date === `${d}/${month + 1}/${year}`
                  ) && profile
                }
                profile={profile}
              >
                {d > 0 ? d : ''}
              </Day>
            );
          })}
      </Body>
    </Frame>
  );
}
