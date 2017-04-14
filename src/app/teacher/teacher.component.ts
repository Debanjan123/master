import { Component } from '@angular/core';
import { TeacherService } from './teacher.service';
import { TeacherModel } from './teacher.model';
import { SubjectModel } from './subject.model';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html'
})
export class TeacherComponent {
  title: string = 'app works!';
      OPTIONS_BASIC: Array<any> = [
        {value: '0', label: 'Aech'},
        {value: '1', label: 'Art3mis'},
        {value: '2', label: 'Daito'},
        {value: '3', label: 'Parzival'},
        {value: '4', label: 'Shoto'}
    ];
  subjects: Array<any> = new Array();
  teacher: TeacherModel = new TeacherModel();
  constructor(private teacherService: TeacherService) {
    this.getSubjects();
  
  }
  private save() {
    this.teacher.subjects = [];
    this.teacher.subjects.push({SubjectId: this.teacher.subject});
    this.teacherService
      .saveTeacherDetail(this.teacher)
      .then(result => {
        if (result) {
        }
      });
  }

  private getSubjects() {
    this.teacherService
      .getSubject()
      .then(result => {
        this.subjects = result;
      });

  }

}
