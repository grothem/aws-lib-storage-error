import { Component } from '@angular/core';

import { Upload } from "@aws-sdk/lib-storage";
import { S3Client, S3 } from "@aws-sdk/client-s3";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aws-lib-storage';

  async test(Bucket: any, Key: any, Body: any) {
    const target = { Bucket, Key, Body };
    try {
      const parallelUploads3 = new Upload({
        client: new S3({}) || new S3Client({}),
        params: target,
      });

      parallelUploads3.on("httpUploadProgress", (progress) => {
        console.log(progress);
      });

      await parallelUploads3.done();
    } catch (e) {
      console.log(e);
    }
  }
}
