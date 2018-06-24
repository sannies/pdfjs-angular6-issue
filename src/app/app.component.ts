import { Component } from '@angular/core';
import {PdfGeneratorService} from './pdf-generator.service';
import {saveAs} from 'file-saver/FileSaver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PDFJS in Angualr 6';

  constructor(private pdf: PdfGeneratorService) {

  }

  public downloadPdf() {
    const blobPromise = this.pdf.generate();
    blobPromise.then(blob => {
      saveAs(blob, 'my.pdf');
    });
  }
}
