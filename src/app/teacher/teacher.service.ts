import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { TeacherModel } from './teacher.model';
import { SubjectModel } from './subject.model';
import { ApiUrl } from '../../config';

@Injectable()
export class TeacherService {
    constructor(private http: Http) {
    }
    public saveTeacherDetail(teacherDetails) {
        return this
            .http
             .post(ApiUrl.baseUrl + 'Teacher/', teacherDetails)
            .toPromise()
            .then(response => response.json() as TeacherModel);
    }
    public getSubject() {
        return this
            .http
            .get(ApiUrl.baseUrl + 'Subject/list')
            .toPromise()
            .then(response => response.json() as SubjectModel[]);

    }
}