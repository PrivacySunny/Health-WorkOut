import { Component } from '@angular/core';
// import { Chart } from 'chart.js/auto'
// import { NgChartjsService } from 'ng-chartjs';
import { ChartData, ChartType } from 'chart.js';

interface Workout {
  name: string;
  workouts: string;
  numberOfWorkouts: number;
  totalWorkoutMinutes: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'workout3';

  workouts: Workout[] = [
    {
      name: 'John Doe',
      workouts: 'Running, Cycling',
      numberOfWorkouts: 2,
      totalWorkoutMinutes: 75,
    },
    {
      name: 'Jane Smith',
      workouts: 'Swimming, Running',
      numberOfWorkouts: 1,
      totalWorkoutMinutes: 80,
    },
    {
      name: 'Mike Johnson',
      workouts: 'Yoga, Cycling',
      numberOfWorkouts: 4,
      totalWorkoutMinutes: 90,
    },
    {
      name: 'Sunny Kumar',
      workouts: 'Yoga, Cycling',
      numberOfWorkouts: 8,
      totalWorkoutMinutes: 90,
    },
    {
      name: 'Praveen Kumar',
      workouts: 'Yoga, Cycling',
      numberOfWorkouts: 7,
      totalWorkoutMinutes: 90,
    },
    {
      name: 'Akash Kumar',
      workouts: 'Yoga, Cycling',
      numberOfWorkouts: 32,
      totalWorkoutMinutes: 90,
    },
    {
      name: 'Lakshay Kumar',
      workouts: 'Yoga, Cycling',
      numberOfWorkouts: 2,
      totalWorkoutMinutes: 90,
    },
    {
      name: 'Pradeep Kumar',
      workouts: 'Yoga, Cycling',
      numberOfWorkouts: 12,
      totalWorkoutMinutes: 90,
    },
    {
      name: 'Shaley Kumar',
      workouts: 'Yoga, Cycling',
      numberOfWorkouts: 21,
      totalWorkoutMinutes: 90,
    },
    {
      name: 'Kamlesh Kumar',
      workouts: 'Yoga, Cycling',
      numberOfWorkouts: 32,
      totalWorkoutMinutes: 90,
    },
    {
      name: 'Sarvesh Kumar',
      workouts: 'Yoga, Cycling',
      numberOfWorkouts:342,
      totalWorkoutMinutes: 90,
    },
    {
      name: 'wsdcfvbvbhji Kumar',
      workouts: 'Yoga, Cycling',
      numberOfWorkouts:342,
      totalWorkoutMinutes: 90,
    },
    {
      name: 'rfgbuyhgvjnh Kumar',
      workouts: 'Yoga, Cycling',
      numberOfWorkouts:342,
      totalWorkoutMinutes: 90,
    },
    {
      name: 'rtyuikcvbnm Kumar',
      workouts: 'Yoga, Cycling',
      numberOfWorkouts:342,
      totalWorkoutMinutes: 90,
    },
    {
      name: 'asdkjf Kumar',
      workouts: 'Yoga, Cycling',
      numberOfWorkouts:342,
      totalWorkoutMinutes: 90,
    },
    {
      name: 'dfghjkl Kumar',
      workouts: 'Yoga, Cycling',
      numberOfWorkouts:342,
      totalWorkoutMinutes: 90,
    },
    {
      name: 'wertyuio Kumar',
      workouts: 'Yoga, Cycling',
      numberOfWorkouts:342,
      totalWorkoutMinutes: 90,
    },
    {
      name: 'sdfghjk Kumar',
      workouts: 'Yoga, Cycling',
      numberOfWorkouts:342,
      totalWorkoutMinutes: 90,
    },
    {
      name: 'wertyuio Kumar',
      workouts: 'Yoga, Cycling',
      numberOfWorkouts:342,
      totalWorkoutMinutes: 90,
    },
    {
      name: 'dfghjk Kumar',
      workouts: 'Yoga, Cycling',
      numberOfWorkouts:342,
      totalWorkoutMinutes: 90,
    },
    {
      name: 'asdkasdjfa Kumar',
      workouts: 'Yoga, Cycling',
      numberOfWorkouts:342,
      totalWorkoutMinutes: 90,
    },
    {
      name: 'jushs Kumar',
      workouts: 'Yoga, Cycling',
      numberOfWorkouts:342,
      totalWorkoutMinutes: 90,
    },
    {
      name: 'xcvbnm Kumar',
      workouts: 'Yoga, Cycling',
      numberOfWorkouts:342,
      totalWorkoutMinutes: 90,
    },
    {
      name: 'wertyuiollkjhgfd Kumar',
      workouts: 'Yoga, Cycling',
      numberOfWorkouts:342,
      totalWorkoutMinutes: 90,
    },
    {
      name: 'sdfghjk Kumar',
      workouts: 'Yoga, Cycling',
      numberOfWorkouts:342,
      totalWorkoutMinutes: 90,
    },
    {
      name: 'kailsh Kumar',
      workouts: 'Yoga, Cycling',
      numberOfWorkouts:342,
      totalWorkoutMinutes: 90,
    },
    {
      name: 'salens Kumar',
      workouts: 'Yoga, Cycling',
      numberOfWorkouts:342,
      totalWorkoutMinutes: 90,
    },
  ];

  newUserName: string = '';
  newWorkoutType: string = '';
  newWorkoutMinutes: number | null = null;

  searchQuery: string = '';
  filterType: string = 'All';

  currentPage = 1;
  itemsPerPage = 3;

  selectedWorkout: Workout = this.workouts[0];

  get paginatedWorkouts(): Workout[] {
    const filteredWorkouts = this.filterWorkouts(this.workouts);
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return filteredWorkouts.slice(start, end);
  }

  filterWorkouts(workouts: Workout[]): Workout[] {
    return workouts.filter(
      (workout) =>
        (this.filterType === 'All' ||
          workout.workouts.includes(this.filterType)) &&
        workout.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  addWorkout(): void {
    if (
      this.newUserName &&
      this.newWorkoutType &&
      this.newWorkoutMinutes !== null
    ) {
      const existingWorkout = this.workouts.find(
        (workout) => workout.name === this.newUserName
      );

      if (existingWorkout) {
        existingWorkout.workouts += `, ${this.newWorkoutType}`;
        existingWorkout.numberOfWorkouts += 1;
        existingWorkout.totalWorkoutMinutes += this.newWorkoutMinutes;
      } else {
        this.workouts.push({
          name: this.newUserName,
          workouts: this.newWorkoutType,
          numberOfWorkouts: 1,
          totalWorkoutMinutes: this.newWorkoutMinutes,
        });
      }

      this.newUserName = '';
      this.newWorkoutType = '';
      this.newWorkoutMinutes = null;
    }
  }

  selectWorkout(workout: Workout): void {
    this.selectedWorkout = workout;
  }

  nextPage(): void {
    if (this.currentPage * this.itemsPerPage < this.workouts.length) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get chartData(): ChartData<'bar'> {
    const workoutTypes = this.selectedWorkout.workouts.split(', ');
    const workoutMinutes = workoutTypes.map(
      () =>
        this.selectedWorkout.totalWorkoutMinutes /
        this.selectedWorkout.numberOfWorkouts
    );

    return {
      labels: workoutTypes,
      datasets: [
        {
          label: 'Minutes',
          data: workoutMinutes,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    };
  }

  get chartLabels(): string[] {
    return this.selectedWorkout.workouts.split(', ');
  }
}
