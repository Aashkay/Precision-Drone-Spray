import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import '../style.css';

export default function OppositeContentTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          ECEN 403
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className='dot'/>
          <TimelineConnector className='dot' />
        </TimelineSeparator>
        <TimelineContent>Fall 2022</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          Spring 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className='dot'/>
          {/* <TimelineConnector /> */}
        </TimelineSeparator>
        <TimelineContent color="text.secondary">ECEN 404</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
