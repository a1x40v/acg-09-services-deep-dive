import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

/*  The service always been included */
// bootstrapApplication(AppComponent, {
//     providers: [TasksService],
//   }).catch((err) => console.error(err));

bootstrapApplication(AppComponent).catch((err) => console.error(err));
