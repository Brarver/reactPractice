import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  ViewState,
  EditingState,
  IntegratedEditing
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  Toolbar,
  Appointments,
  ViewSwitcher,
  DateNavigator,
  TodayButton,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog
} from "@devexpress/dx-react-scheduler-material-ui";
import { DragDropProvider } from "@devexpress/dx-react-scheduler-material-ui";

const brianAvailable = [
  {
    id: 1,
    startDate: "2019-11-15 10:00",
    endDate: "2019-11-15 11:00",
    title: "Available"
  }
];

//Dummy Data
const appointments = [
  {
    id: 1,
    startDate: "2019-10-31 10:00",
    endDate: "2019-10-31 11:00",
    title: "Meeting"
  },
  {
    id: 2,
    startDate: "2019-11-01 18:00",
    endDate: "2019-11-01 19:30",
    title: "Go to a gym"
  },
  {
    id: 3,
    startDate: "2019-11-15 7:00",
    endDate: "2019-11-15 7:30",
    title: "Grocery Store"
  },
  {
    id: 4,
    startDate: "2019-11-16 8:00",
    endDate: "2019-11-16 8:30",
    title: "Hair Cut",
    rRule: "FREQ=WEEKLY;COUNT=10"
  }
];

//   export default class Demo extends React.PureComponent {

//       state = {
//         data: appointments,
//         currentDate: '2018-06-27'
//         // currentDate: new Date()
//       };

//     commitChanges = ({ added, changed, deleted }) => {
//       this.setState((state) => {
//         let { data } = state;
//         if (added) {
//           const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
//           data = [...data, { id: startingAddedId, ...added }];
//         }
//         if (changed) {
//           data = data.map(appointment => (
//             changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
//         }
//         if (deleted !== undefined) {
//           data = data.filter(appointment => appointment.id !== deleted);
//         }
//         return { data };
//       });
//     }

//     render() {
//       const { currentDate, data } = this.state;

//       return (
//         <Paper>
//           <Scheduler
//             data={data}
//             height={660}
//           >
//             <ViewState
//               currentDate={currentDate}
//               onCurrentDateChange={this.currentDateChange}
//             />
//             <EditingState
//               onCommitChanges={this.commitChanges}
//             />
//             <IntegratedEditing />
//             <WeekView startDayHour={5} endDayHour={19} />
//             <DayView startDayHour={5} endDayHour={19} />
//             <ConfirmationDialog />
//             <Toolbar />
//             <DateNavigator />
//             <ViewSwitcher />
//             <TodayButton />
//             <Appointments />
//             <AppointmentTooltip
//               showOpenButton
//               showDeleteButton
//               // visible={true}
//             />
//             <DragDropProvider />
//             <AppointmentForm />
//           </Scheduler>
//         </Paper>
//       );
//     }
//   }
function headerComponent() {
  return <a href='www.reddit.com'>Test</a>
}

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: brianAvailable,
      // currentDate: '2018-06-27'
      currentDate: new Date()
    };

    this.commitChanges = this.commitChanges.bind(this);
    this.currentDateChange = currentDate => {
      this.setState({ currentDate });
    };
  }

  commitChanges({ added, changed, deleted }) {
    this.setState(state => {
      let { data } = state;
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        );
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });
  }

  render() {
    const { currentDate, data } = this.state;

    return (
      <Paper>
        <Scheduler data={data} height={660}>
          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={this.currentDateChange}
          />
          <EditingState onCommitChanges={this.commitChanges} />
          <IntegratedEditing />
          <WeekView startDayHour={5} endDayHour={19} />
          <DayView startDayHour={5} endDayHour={19} />
          <ConfirmationDialog />
          <Toolbar />
          <DateNavigator />
          <ViewSwitcher />
          <TodayButton />
          <Appointments />
          <AppointmentTooltip
            showOpenButton
            showDeleteButton={false}
            // visible={true}
            headerComponent={headerComponent}
          >
          </AppointmentTooltip>
          <AppointmentForm />
        </Scheduler>
      </Paper>
    );
  }
}
