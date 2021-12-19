import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadfileService {

  constructor(private http:HttpClient) { }


  public uploadFile(file, id): Observable<any> {
    const formData = new FormData();
    // if (navigator.msSaveBlob) {
    //     formData.append('File', file);
    // } else {

    // }
    formData.append('file', file);
    formData.append('articleId', id);
    const uploadReq = new HttpRequest(
      'PUT', "https://localhost:44357" + '/api/app/article/icon-image', formData,
      {
        reportProgress: true,
      }
    );
    return this.http.request(uploadReq);
  }
}
