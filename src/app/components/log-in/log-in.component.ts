import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  providers: [StudentService, UploadService]
})
export class LogInComponent implements OnInit {

  public titulo: String;
  public student: Student;
  public status: boolean;
  public filesToUpload: Array<File>;
  public url: string;

  public comments: Student[];

  constructor(
    private _studentService: StudentService,
    private _uploadService: UploadService
  ) {
    this.titulo = 'Comentarios';
    this.student = new Student('', '', '', '', '');
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getComments();
  }

  enviar(form) {
    this._studentService.saveComment(this.student).subscribe(
      res => {
        if (res.student) {
          var nombre = res.student.nombre;

          this._uploadService.makeFileRequest(this.url + 'image/' + res.student._id, [], this.filesToUpload, 'imagen')
            .then((result: any) => {
              alert('Se a publicado su comentario exitosamente. Gracias ' + nombre + '.');
              console.log(result);
            })
          form.reset();
          location.reload();
            
        } else {
          alert('Error al subir comentario')
        }
      },
      err => { console.log(<any>err) }
    )
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  getComments() {
    this._studentService.getComments().subscribe(
      res => {
        if (res.students) {
          this.comments = res.students;
        }
      },
      err => {
        console.log(<any>err);
      }
    )
  }

}