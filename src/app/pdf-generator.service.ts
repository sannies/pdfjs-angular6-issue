import { Injectable } from '@angular/core';
import * as pdf from 'pdfjs';
import * as blobStream from 'blob-stream';
import * as Helvetica from 'pdfjs/font/Helvetica';
import * as HelveticaBoldOblique from 'pdfjs/font/Helvetica-BoldOblique';
import * as HelveticaOblique from 'pdfjs/font/Helvetica-Oblique';
import * as HelveticaBold from 'pdfjs/font/Helvetica-Bold';
@Injectable()
export class PdfGeneratorService {

  constructor() { }

  public generate() {
    const doc = new pdf.Document({
      font: HelveticaBoldOblique,
      padding: 0
    });
    const stream = doc.pipe(blobStream());
    doc.text({}).add('Simple Test');
    doc.end();
    return new Promise<Blob>((resolve, reject) => {
      stream.on('finish', () => {
        resolve(stream.toBlob('application/pdf'));
      });
    });
  }
}
